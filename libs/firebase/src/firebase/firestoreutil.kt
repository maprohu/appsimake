package firebase.firestore

import common.*
import commonlib.CollectionWrap
import commonlib.DocWrap
import firebase.FirebaseError
import firebase.firestore
import firebaseshr.HasProps
import firebaseshr.IdState
import firebaseshr.ScalarProp
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
    killables: Killables? = null,
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
    ).also { killables?.add(it) }

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




data class ListenConfig<T>(
    val list: ListenableMutableList<T>,
    val create: (id: String, data: dynamic) -> T,
    val update: T.(dynamic) -> Unit,
    val delete: (T) -> Unit,
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
        fun <T: HasProps<*, String>> hasProps(
            list: ListenableMutableList<T>,
            create: () -> T
        ) = ListenConfig(
            list,
            create = { id, d ->
                create().also { t ->
                    t.props.persisted(id)
                    t.props.extractInitial(d)
                }
            },
            update = { d ->
                this.props.extractInitial(d)
            },
            delete = { t ->
                t.props.deleted()
//                t.props.resetInitial()
            }

        )
    }
}


fun <T> Query.listen(
    config: ListenConfig<T>
): () -> Unit = with(config) {
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
                        delete(list.removeAt(dc.oldIndex))
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


    val killables = Killables()

    killables += onSnapshot(
        { qs ->
            onNext(qs)
        },
        onError
    )

    return { killables.kill() }
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
    infix fun <P> ScalarProp<T, P>.eq(v: P) {
        query = query.where(name, "==", v)
    }
    fun <P> ScalarProp<T, P>.asc() {
        query = query.orderBy(name)
    }
    fun <P> ScalarProp<T, P>.desc() {
        query = query.orderBy(name, "desc")
    }
}
fun <T> CollectionWrap<T>.query(db: Firestore, fn:  QueryBuilder<T>.() -> Unit = {}): QueryWrap<T> {
    return QueryBuilder<T>(db.collection(path)).apply(fn).query.wrap()
}

fun <T> Query.wrap() = QueryWrap<T>(this)

class QueryWrap<in T>(
    val query: Query
)

fun <T: HasProps<*, String>> DocumentReference.listen(
    target: T
) : Killable {
    return Killable.once(
        onSnapshot { d ->
            if (d.exists) {
                val data = d.data<dynamic>()
                target.props.extractInitial(data)
            } else {
                target.props.deleted()
            }
        }
    )

}

fun DocWrap<*, *>.docRef(db: Firestore = firestore()) = db.doc(path)
fun CollectionWrap<*>.collectionRef(db: Firestore = firestore()) = db.collection(path)
