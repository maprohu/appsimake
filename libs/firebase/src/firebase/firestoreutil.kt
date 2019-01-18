package firebase.firestore

import common.*
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonshr.SetDiff
import firebase.FirebaseError
import firebase.firestore
import firebaseshr.*
import killable.Killable
import killable.Killables
import kotlinx.coroutines.*
import org.w3c.dom.Element
import rx.RxVal
import rx.Var
import kotlin.reflect.KProperty

fun setOptionsMerge() = obj<SetOptions> { merge = true }


fun Settings() : Settings = obj()

enum class DocumentChangeType {
    added,
    modified,
    removed
}

val DocumentChange.typeEnum : DocumentChangeType
    get() = DocumentChangeType.valueOf(this.type)


fun <T> queryUi(
        query: Query,
        element: Element,
        callback: OnSnapshot? = null,
        item: (T) -> Element
): () -> Unit {
    return query
            .onSnapshot(
                    {
                        callback?.onNext?.invoke(it)

                        it
                                .docChanges()
                                .forEach {
                                    when (it.typeEnum) {
                                        DocumentChangeType.added -> {
                                            element.insertAt(it.newIndex, item(it.doc.data()))
                                        }
                                        DocumentChangeType.removed -> {
                                            element.removeAt(it.oldIndex)
                                        }
                                        DocumentChangeType.modified -> {
                                            val ie = item(it.doc.data())
                                            if (it.newIndex == it.oldIndex) element.replaceAt(it.oldIndex, ie)
                                            else {
                                                element.removeAt(it.oldIndex)
                                                element.insertAt(it.newIndex, ie)
                                            }
                                        }
                                    }
                                }
                    },
                    { error ->
                        callback?.onError?.invoke(error)
                        console.dir(error)
                    }
            )


}

data class OnSnapshot(
        val onNext: (QuerySnapshot) -> Unit,
        val onError: (FirebaseError) -> Unit
) {
    constructor(
            onNext: (QuerySnapshot) -> Unit
    ) : this(onNext, {})
}

fun <T> QueryWrap<T>.listen(
    killables: Killables,
    onFirst: () -> Unit = {},
    onError: (FirebaseError) -> Unit = { console.dir(it) }
): ListenableList<RxVal<T>> {
    var first = true

    val list = ListenableMutableList<Var<T>>()

    query.onSnapshot(
            { qs ->
                if (first) {
                    first = false
                    onFirst()
                }

                qs
                        .docChanges()
                        .forEach { dc ->
                            when (dc.typeEnum) {
                                DocumentChangeType.added -> {
                                    list.add(dc.newIndex, Var(dc.doc.data()))
                                }
                                DocumentChangeType.removed -> {
                                    list.removeAt(dc.oldIndex)
                                }
                                DocumentChangeType.modified -> {
                                    list[dc.oldIndex].now = dc.doc.data()
                                    if (dc.newIndex != dc.oldIndex) {
                                        list.move(dc.oldIndex, dc.newIndex)
                                    }
                                }
                            }
                        }

            },
            onError
    ).also { killables += it }

    return list
}


fun Firestore.withDefaultSettings(): Firestore {
    settings(Settings().apply {
        timestampsInSnapshots = true
    })
    return this
}

fun Query.onSnapshotNext(
    onNext: (QuerySnapshot) -> Unit
) : () -> Unit = onSnapshot(onNext, { console.dir(it) })

fun Query.idDiffs(fn: ((SetDiff<String>) -> Unit)) : () -> Unit = onSnapshotNext { qs ->
    qs.docChanges().fold(SetDiff<String>()) { d, ch ->
        when (ch.typeEnum) {
            DocumentChangeType.added -> d.copy(added = d.added + ch.doc.id)
            DocumentChangeType.removed -> d.copy(removed = d.removed + ch.doc.id)
            else -> d
        }
    }.also(fn)
}



data class ListenConfig<T>(
    val list: ListenableMutableList<T>,
    val create: (id: String, data: dynamic) -> T,
    val update: T.(dynamic) -> Unit,
    val remove: (T) -> Unit,
    val onFirst: () -> Unit = {},
    val onError: (FirebaseError) -> Unit = { console.dir(it) }
) {
    companion object {

//        fun <T> docItems(
//            list: ListenableMutableList<DocItem<T>>,
//            create: (dynamic) -> T,
//            update: T.(dynamic) -> Unit
//        ): ListenConfig<DocItem<T>> {
//            return ListenConfig(
//                list = list,
//                create = { id, data -> DocItem(id, create(data)) },
//                update = { d -> update(this.data, d) },
//                delete = { it -> it.deleted.kill() }
//            )
//        }
        fun <T: HasFBProps<*>> hasProps(
            list: ListenableMutableList<T>,
            collectionWrap: CollectionWrap<T>,
            create: () -> T
        ) = ListenConfig(
            list,
            create = { id, d ->
                create().also { t ->
                    t.props.apply {
                        collection = collectionWrap
                        persistedFB(id)
                        extractInitial(d)
                        live.now = true
                    }
                }
            },
            update = { d ->
                this.props.extractInitial(d)
            },
            remove = { t ->
                t.props.live.now = false
//                t.props.deleted()
//                t.props.resetInitial()
            }

        )
    }
}


fun <T> Query.listen(
    killables: Killables,
    config: ListenConfig<T>
) = with(config) {
    require(list.isEmpty())

    var onNext: (QuerySnapshot) -> Unit

    val onEach: (QuerySnapshot) -> Unit = { qs ->

        qs
            .docChanges()
            .forEach { dc ->
                when (dc.typeEnum) {
                    DocumentChangeType.added -> {
                        list.add(dc.newIndex, create(dc.doc.id, dc.doc.data()))
                    }
                    DocumentChangeType.removed -> {
                        remove(list.removeAt(dc.oldIndex))
                    }
                    DocumentChangeType.modified -> {
                        update(list[dc.oldIndex], dc.doc.data())
                        if (dc.newIndex != dc.oldIndex) {
                            list.move(dc.oldIndex, dc.newIndex)
                        }
                    }
                }
            }

    }

    onNext = {
        onFirst()
        onNext = onEach
        onNext(it)
    }


    killables += onSnapshot(
        { qs ->
            onNext(qs)
        },
        onError
    )

}

//class DocItem<T>(
//    val id: String,
//    val data: T,
//    val deleted: Killables = Killables()
//)


fun Query.orderBy(prop: KProperty<*>) = orderBy(prop.name)

fun <T> Firestore.txDefer(fn: suspend (Transaction) -> T) : Deferred<T> {
    return runTransaction<T> {
        GlobalScope.async {
            fn(it)
        }.asPromise()
    }.asDeferred()
}

suspend fun <T> Firestore.tx(fn: suspend (Transaction) -> T) : T = txDefer(fn).await()
suspend fun <T> Firestore.txTry(fn: suspend (Transaction) -> T) : Try<T> = Try { tx(fn) }

fun <T> Try<T>.onRollback(fn: () -> T) : T = fold({ if (it is RollbackException) fn() else throw it }, { it })

class RollbackException : Exception()
fun rollback() : Nothing = throw RollbackException()
fun launch(fn: suspend () -> Unit) {
    GlobalScope.launch {
        try {
            fn()
        } catch (e: RollbackException) {}
    }
}



class QueryBuilder<T>(
    var query : Query
) {
    infix fun <P> ScalarProp<T, Set<P>>.arrayContains(v: P) {
        // TODO fix this. introduce collection property
        query = query.where(name, "array-contains", write(setOf(v)).unsafeCast<Array<dynamic>>().first())
    }
    infix fun <P> ScalarProp<T, P>.eq(v: P) {
        query = query.where(name, "==", write(v))
    }
    fun <P> ScalarProp<T, P>.asc() {
        query = query.orderBy(name)
    }
    fun <P> ScalarProp<T, P>.desc() {
        query = query.orderBy(name, "desc")
    }
}
fun <T> CollectionWrap<T>.query(db: Firestore, fn:  QueryBuilder<T>.() -> Unit = {}): QueryWrap<T> {
    return QueryBuilder<T>(db.collection(path)).apply(fn).wrap()
}

fun <T> QueryBuilder<T>.wrap() = query.wrap<T>()
fun <T> Query.wrap() = QueryWrap<T>(this)

class QueryWrap<in T>(
    val query: Query
)

fun <T: HasFBProps<*>> T.onSnapshot(d: DocumentSnapshot) {
    if (d.exists) {
        val data = d.data<dynamic>()
        props.extractInitial(data)
    } else {
        props.deleted()
    }
}

fun <T: HasFBProps<*>> DocumentReference.listen(
    target: T
) : Killable {
    require(!target.props.live.now)
    target.props.live.now = true

    val killSnapshot = onSnapshot { d ->
        target.onSnapshot(d)
    }

    return Killable.once {
        killSnapshot()
        target.props.live.now = false
    }
}

fun DocWrap<*>.docRef(db: Firestore = firestore()) = db.doc(path)
fun CollectionWrap<*>.collectionRef(db: Firestore = firestore()) = db.collection(path)

const val MaxBatchSize = 500

fun deleteCollection(
    ref: CollectionReference,
    db: Firestore
): Deferred<Unit> {
    return GlobalScope.async {
        suspend fun step(): Boolean {
            val qs = ref
                .limit(MaxBatchSize)
                .get()
                .await()

            val batch = db.batch()
            for (doc in qs.docs) {
                batch.delete(doc.ref)
            }
            val c = batch.commit()
            launch {
                c.await()
            }

            return qs.size == MaxBatchSize
        }

        while (step()) {}
    }

}

fun initBinder(
    db: Firestore
) {
    initBinder(
        PropOps(
            delete = { FieldValue.delete() },
            serverTimestamp = { FieldValue.serverTimestamp() },
            deleteCollection = { cw ->
                deleteCollection(cw.collectionRef(db), db)
            },
            createId = {
                it.collectionRef(db).doc().id
            },
            write = { w, d ->
                w.docRef(db).set(d).asDeferred()
            },
            merge = { w, d ->
                w.docRef(db).set(d, setOptionsMerge()).asDeferred()
            },
            arrayUnion = { vs ->
                FieldValue.arrayUnion(*vs)
            },
            arrayRemove = { vs ->
                FieldValue.arrayRemove(*vs)
            }
        )

    )
}
