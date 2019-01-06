package firebase.firestore

import common.*
import commonlib.CollectionWrap
import firebase.FirebaseError
import killable.Killables
import kotlinx.coroutines.*
import org.w3c.dom.Element
import rx.RxVal
import rx.Var
import kotlin.js.Promise
import kotlin.reflect.KProperty
import kotlin.reflect.KProperty0
import kotlin.reflect.KProperty1

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

fun <T> Query.listen(
    killables: Killables? = null,
    onFirst: () -> Unit = {},
    onError: (FirebaseError) -> Unit = { console.dir(it) }
): ListenableList<RxVal<T>> {
    var first = true

    val list = ListenableMutableList<Var<T>>()

    onSnapshot(
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





fun <T> Query.listen(
    list: ListenableMutableList<T>,
    create: (QueryDocumentSnapshot) -> T,
    update: (T, QueryDocumentSnapshot) -> Unit,
    onFirst: () -> Unit = {},
    onError: (FirebaseError) -> Unit = { console.dir(it) }
): () -> Unit {
    require(list.isEmpty())

    var onNext: (QuerySnapshot) -> Unit

    val onEach: (QuerySnapshot) -> Unit = { qs ->

        qs
            .docChanges()
            .forEach { dc ->
                when (dc.typeEnum) {
                    DocumentChangeType.added -> {
                        list.add(dc.newIndex, create(dc.doc))
                    }
                    DocumentChangeType.removed -> {
                        list.removeAt(dc.oldIndex)
                    }
                    DocumentChangeType.modified -> {
                        update(list[dc.oldIndex], dc.doc)
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

class DocItem<T>(
    val id: String,
    val data: Var<T>
)

fun <T> Query.docItems(
    list: ListenableMutableList<DocItem<T>>,
    extract: (QueryDocumentSnapshot) -> T = { it.data() },
    onFirst: () -> Unit = {},
    onError: (FirebaseError) -> Unit = { console.dir(it) }
): () -> Unit {
    return listen(
        list = list,
        create = { DocItem(it.id, Var(extract(it))) },
        update = { di, qs -> di.data.now = extract(qs) },
        onFirst = onFirst,
        onError = onError
    )
}

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


class Prop<in T, out R>(
    val name: String
)
val <T, R> KProperty1<T, R>.cast
    get() = Prop<T, R>(name)

class QueryBuilder<T>(
    var query : Query
) {

    infix fun <P> KProperty1<T, P>.eq(v: P) = cast eq v
    fun <P> KProperty1<T, P>.asc() = cast.asc()
    fun <P> KProperty1<T, P>.desc() = cast.desc()

    infix fun <P> Prop<T, P>.eq(v: P) {
        query = query.where(name, "==", v)
    }
    fun <P> Prop<T, P>.asc() {
        query = query.orderBy(name)
    }
    fun <P> Prop<T, P>.desc() {
        query = query.orderBy(name, "desc")
    }
}
fun <T> CollectionWrap<T>.query(db: Firestore, fn:  QueryBuilder<T>.() -> Unit): Query {
    return QueryBuilder<T>(db.collection(path)).apply(fn).query
}