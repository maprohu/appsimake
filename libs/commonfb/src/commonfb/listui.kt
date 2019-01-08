package commonfb

import bootstrap.*
import common.ListenableMutableList
import commonui.RootPanel
import commonui.showClosable
import domx.*
import firebase.firestore.*
import killable.Killables
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.Node
import styles.scrollVertical
import kotlin.browser.document

fun <T> QueryWrap<T>.stringClickListUI(
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
        ListUIConfig(
            root,
            extract,
            hourglassDecor,
            emptyDivDecor,
            listDivDecor,
            ulDecor,
            stringListClick(itemText, onClick)
        )
    )
}

fun <T> stringListClick(
    itemText: (T) -> String,
    onClick: (DocItem<T>) -> Unit
) : (DocItem<T>) -> Node = { item ->
    document.listAction {
        rxText { itemText(item.data()) }
        clickEvent {
            onClick(item)
        }
    }
}

data class ListUIConfig<T>(
    val root: RootPanel,
    val extract: (QueryDocumentSnapshot) -> T = { it.data() },
    val hourglassDecor: HTMLDivElement.() -> Unit = {},
    val emptyDivDecor : HTMLDivElement.() -> Unit = { cls.flexGrow1 },
    val listDivDecor : HTMLDivElement.() -> Unit = { classes += scrollVertical; cls.flexGrow1 },
    val ulDecor: HTMLUListElement.() -> Unit = {},
    val itemFactory: (DocItem<T>) -> Node
)

fun <T> QueryWrap<T>.listUI(
    config: ListUIConfig<T>
): () -> Unit = with(config) {
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

    docItems(
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

fun <T> QueryWrap<T>.showClosableList(
    redisplay: () -> Unit,
    page: (DocItem<T>) -> (() -> Unit) -> (() -> Unit),
    config: ((DocItem<T>) -> Unit) -> ListUIConfig<T>
) : () -> Unit {

    val listKills = Killables()
    val viewSeq = listKills.seq()

    val onClick: (DocItem<T>) -> Unit = { dit ->

        val viewKills = viewSeq.killables()

        fun close() {
            viewKills.fire()
            redisplay()
        }

        viewKills += showClosable(
            page(dit),
            ::close
        )
        viewKills += dit.deleted.add(::close)
    }

    listKills += listUI(config(onClick))

    return listKills::kill
}
