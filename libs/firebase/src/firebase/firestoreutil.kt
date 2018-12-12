package firebase.firestore

import common.*
import firebase.FirebaseError
import killable.Killables
import org.w3c.dom.Element
import rx.RxVal
import rx.Var

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

    return onSnapshot(
        { qs -> onNext(qs) },
        onError
    )
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

