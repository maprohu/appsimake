package commonfb

import bootstrap.*
import common.ListenableMutableList
import commonui.RootPanel
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.Query
import firebase.firestore.QueryDocumentSnapshot
import firebase.firestore.docItems
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.Node
import styles.scrollVertical
import kotlin.browser.document

fun <T> Query.stringClickListUI(
    root: RootPanel,
    extract: (QueryDocumentSnapshot) -> T = { it.data() },
    hourglassDecor: HTMLDivElement.() -> Unit = {},
    emptyDivDecor : HTMLDivElement.() -> Unit = { cls.flexGrow1 },
    listDivDecor : HTMLDivElement.() -> Unit = { classes += scrollVertical; flexGrow1() },
    ulDecor: HTMLUListElement.() -> Unit = {},
    itemText: (T) -> String,
    onClick: (DocItem<T>) -> Unit
): () -> Unit {
    return listUI(
        root,
        extract,
        hourglassDecor,
        emptyDivDecor,
        listDivDecor,
        ulDecor,
        { item ->
            document.listAction {
                rxText { itemText(item.data()) }
                clickEvent {
                    onClick(item)
                }
            }
        }
    )
}

fun <T> Query.listUI(
    root: RootPanel,
    extract: (QueryDocumentSnapshot) -> T = { it.data() },
    hourglassDecor: HTMLDivElement.() -> Unit = {},
    emptyDivDecor : HTMLDivElement.() -> Unit = { cls.flexGrow1 },
    listDivDecor : HTMLDivElement.() -> Unit = { classes += scrollVertical; cls.flexGrow1 },
    ulDecor: HTMLUListElement.() -> Unit = {},
    itemFactory: (DocItem<T>) -> Node
): () -> Unit {
    root.setHourglass().apply(hourglassDecor)

    val list = ListenableMutableList<DocItem<T>>()

    val emptyDiv = document.column {
        cls {
            flexCenter()
        }
        emptyDivDecor()
        span {
            innerText = "The list is empty"
        }
    }

    val listDiv = document.column {
        listDivDecor()
        listGroup {
            ulDecor()
            listenableList(list, itemFactory)
        }
    }

    return docItems(
        list,
        extract = extract,
        onFirst = {
            list.isEmptyRx.forEach { empty ->
                root.setRoot(
                    if (empty) emptyDiv else listDiv
                )
            }
        }
    )
}
