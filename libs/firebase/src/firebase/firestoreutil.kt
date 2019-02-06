package firebase.firestore

import common.*
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonshr.*
import firebase.FirebaseError
import firebase.firestore
import firebaseshr.*
import killable.*
import killable.Killable.Companion.once
import kotlinx.coroutines.*
import org.w3c.dom.Element
import rx.RxVal
import rx.Var
import kotlin.reflect.KProperty

fun setOptionsMerge() = obj<SetOptions> { merge = true }


fun Settings() : Settings = obj()

inline val DocumentChangeType.Companion.added get() = "added".unsafeCast<DocumentChangeType>()
inline val DocumentChangeType.Companion.modified get() = "modified".unsafeCast<DocumentChangeType>()
inline val DocumentChangeType.Companion.removed get() = "removed".unsafeCast<DocumentChangeType>()


fun <T> queryUi(
        query: Query,
        element: Element,
        callback: OnSnapshot? = null,
        item: (T) -> Element
): () -> Unit {
    return query
            .onSnapshot(
                    { qs ->
                        callback?.onNext?.invoke(qs)

                        qs
                                .docChanges()
                                .forEach { dc ->
                                    when (dc.type) {
                                        DocumentChangeType.added -> {
                                            element.insertAt(dc.newIndex, item(dc.doc.data()))
                                        }
                                        DocumentChangeType.removed -> {
                                            element.removeAt(dc.oldIndex)
                                        }
                                        DocumentChangeType.modified -> {
                                            val ie = item(dc.doc.data())
                                            if (dc.newIndex == dc.oldIndex) element.replaceAt(dc.oldIndex, ie)
                                            else {
                                                element.removeAt(dc.oldIndex)
                                                element.insertAt(dc.newIndex, ie)
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
                            when (dc.type) {
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
//        timestampsInSnapshots = true
    })
    return this
}

fun Query.onSnapshotNext(
    onNext: (QuerySnapshot) -> Unit
) : Trigger = onSnapshot(onNext, { report(it.unsafeCast<Throwable>()) })

fun Query.idDiffs(fn: ((SetDiff<String>) -> Unit)) : Trigger = onSnapshotNext { qs ->
    qs.docChanges().fold(SetDiff<String>()) { d, ch ->
        when (ch.type) {
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
            }

        )
    }
}

fun <T> QueryWrap<T>.listen(
    killables: Killables,
    config: ListenConfig<T>
) = query.listen(killables, config)


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
                when (dc.type) {
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
    fun <P, T2: T> ScalarProp<T2, P>.asc() {
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

suspend fun DocumentReference.exists(): Boolean {
    return get().await().exists
}


@UseExperimental(ExperimentalCoroutinesApi::class)
suspend fun <T> QueryWrap<T>.toSetSource(
    killables: KillSet,
    create: (String, dynamic) -> T,
    update: (T, dynamic) -> Unit,
    write: suspend (String, suspend (T) -> Unit) -> Unit
): SetSourceWithKey<T, String> {
    var set = emptySet<T>()
    val cdmap = mutableMapOf<String, CompletableDeferred<T>>()

    val emitter = Emitter<SetMove<T>>()

    fun placeholder(id: String) = cdmap.getOrPut(id) { CompletableDeferred() }

    fun addOrUpdate(id: String, data: dynamic) {
        val cd = placeholder(id)
        if (!cd.isCompleted) {
            val t = create(id, data)
            set += t
            cd.complete(t)
            emitter.emit(SetAdded(t))
        } else {
            update(cd.getCompleted(), data)
        }
    }

    killables += query.onSnapshotNext { qs ->
        qs.docChanges().forEach { dc ->
            when (dc.type) {
                DocumentChangeType.added, DocumentChangeType.modified -> {
                    addOrUpdate(dc.doc.id, dc.doc.data())
                }
                DocumentChangeType.removed -> {
                    val id = dc.doc.id
                    val t = cdmap.remove(id)!!.getCompleted()
                    set -= t
                    emitter.emit(SetRemoved(t))
                }
            }
        }
    }

    val qs = query.get().await()

    qs.docs.forEach { qds ->
        addOrUpdate(qds.id, qds.data())
    }

    return object : SetSourceWithKey<T, String> {
        override val current: Set<T>
            get() = set

        override fun listen(ks: KillSet, fn: (SetMove<T>) -> Unit): Set<T> {
            ks += emitter.add(fn)
            return set
        }

        override fun get(k: String) = placeholder(k)

        override suspend fun getOrPut(id: String, fn: suspend (T) -> Unit): T {
            val cd = placeholder(id)
            if (!cd.isCompleted) {
                write(id, fn)
            }
            return cd.await()
        }
    }
}

suspend fun <T: HasFBProps<T>> QueryWrap<T>.toSetSource(
    killables: KillSet,
    collectionWrap: CollectionWrap<T>,
    create: () -> T
): SetSourceWithKey<T, String> {
    fun createPersisted(id: String) = create().apply {
        props.persisted(
            collectionWrap.doc(id)
        )
    }
    return toSetSource(
        killables,
        create = { id, data ->
            createPersisted(id).apply {
                initFrom(data)
            }
        },
        update = { t, data ->
            t.initFrom(data)
        },
        write = { id, fn ->
            createPersisted(id)
                .apply { fn(this) }
                .props.save()
        }
    )

}

suspend fun <T: HasFBProps<T>> CollectionWrap<T>.toSetSource(
    killables: KillSet,
    db: Firestore,
    create: () -> T
): SetSourceWithKey<T, String> {
    return query(db).toSetSource(
        killables,
        this,
        create
    )
}

