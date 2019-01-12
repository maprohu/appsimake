package commonfb

import bootstrap.*
import common.ListenableMutableList
import commonui.RootPanel
import commonui.showClosable
import domx.*
import firebase.firestore.*
import firebase.firestore.ListenConfig.Companion.hasProps
import firebaseshr.HasProps
import killable.Killable
import killable.Killables
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLUListElement
import org.w3c.dom.Node
import styles.scrollVertical
import kotlin.browser.document

fun <T> stringListClick(
    itemText: (T) -> String,
    onClick: (T) -> Unit
) : (T) -> Node = { item ->
    document.listAction {
        rxText { itemText(item) }
        clickEvent {
            onClick(item)
        }
    }
}


data class ListUIConfig<T: HasProps<*, String>>(
    val root: RootPanel,
    val create: () -> T,
    val hourglassDecor: HTMLDivElement.() -> Unit = {},
    val emptyDivDecor : HTMLDivElement.() -> Unit = { cls.flexGrow1 },
    val listDivDecor : HTMLDivElement.() -> Unit = { cls.scrollVertical; cls.flexGrow1 },
    val ulDecor: HTMLUListElement.() -> Unit = {},
    val itemFactory: (T) -> Node
)

fun <T: HasProps<*, String>> QueryWrap<T>.listUI(
    config: ListUIConfig<T>
): () -> Unit = with(config) {
    root.setHourglass().apply(hourglassDecor)

    val list = ListenableMutableList<T>()

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

    query.listen(
        hasProps(
            list,
            create = create
        ).copy(
            onFirst = {
                list.isEmptyRx.forEach { empty ->
                    root.setRoot(
                        if (empty) emptyDiv else listDiv
                    )
                }
            }
        )
    )
}

fun <T: HasProps<*, String>> QueryWrap<T>.showClosableList(
    redisplay: () -> Unit,
    page: (T) -> (() -> Unit) -> Killable,
    config: (show: (T) -> Unit) -> ListUIConfig<T>
) : () -> Unit {

    val listKills = Killables()
    val viewSeq = listKills.seq()

    val onClick: (T) -> Unit = { dit ->

        val viewKills = viewSeq.killables()

        fun close() {
            redisplay()
            viewKills.kill()
        }

        viewKills += showClosable(
            page(dit),
            ::close
        )
        viewKills += dit.props.onDeleted.add {
            close()
        }
    }

    listKills += listUI(config(onClick))

    return listKills::kill
}

