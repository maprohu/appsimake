package firebase.firestore

import common.*
import firebase.FirebaseError
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
            {
                if (first) {
                    first = false
                    onFirst()
                }

                it
                        .docChanges()
                        .forEach {
                            when (it.typeEnum) {
                                DocumentChangeType.added -> {
                                    list.add(it.newIndex, Var(it.doc.data()))
                                }
                                DocumentChangeType.removed -> {
                                    list.removeAt(it.oldIndex)
                                }
                                DocumentChangeType.modified -> {
                                    list[it.oldIndex].now = it.doc.data()
                                    if (it.newIndex != it.oldIndex) {
                                        list.move(it.oldIndex, it.newIndex)
                                    }
                                }
                            }
                        }

            },
            onError
    ).also { killables?.add(it) }

    return list
}