package commonfb

import bootstrap.*
import common.ListenableMutableList
import commonlib.CollectionWrap
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
import rx.RxIface
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
    val query: RxIface<QueryWrap<T>>,
    val create: () -> T,
    val hourglassDecor: HTMLDivElement.() -> Unit = {},
    val emptyDivDecor : HTMLDivElement.() -> Unit = { cls.flexGrow1 },
    val listDivDecor : HTMLDivElement.() -> Unit = { cls.scrollVertical; cls.flexGrow1 },
    val ulDecor: HTMLUListElement.() -> Unit = {},
    val itemFactory: (T) -> Node
)

fun <T: HasProps<*, String>> listUI(
    killables: Killables,
    config: ListUIConfig<T>
) {
    with(config) {


        val emptyDiv = document.column {
            cls {
                flexCenter()
            }
            emptyDivDecor()
            span {
                innerText = "The list is empty"
            }
        }


        killables += query.fold(Killable.empty) { old, q ->
            old.kill()

            val queryRoot = root.sub()
            queryRoot.setHourglass().apply(hourglassDecor)

            val ks = killables.killables()

            val list = ListenableMutableList<T>()

            val listDiv = document.column {
                listDivDecor()
                listGroup {
                    ulDecor()
                    listenableList(list, itemFactory)
                }
            }

            q.query.listen(
                ks,
                hasProps(
                    list,
                    create = create
                ).copy(
                    onFirst = {
                        ks += list.isEmptyRx.forEach { empty ->
                            queryRoot.setRoot(
                                if (empty) emptyDiv else listDiv
                            )
                        }
                    }
                )
            )

            ks
        }

    }
}

fun <T: HasProps<*, String>> showClosableList(
    killables: Killables,
    redisplay: () -> Unit,
    page: (Killables, T, close: () -> Unit) -> Unit,
    config: (show: (T) -> Unit) -> ListUIConfig<T>
) {
    val viewSeq = killables.seq()

    val onClick: (T) -> Unit = { dit ->

        val viewKills = viewSeq.killables()

        fun close() {
            redisplay()
            viewKills.kill()
        }

        showClosable(
            viewKills,
            { ks, close -> page(ks, dit, close) },
            ::close
        )
        viewKills += dit.props.onDeleted.add {
            close()
        }
    }

    listUI(killables, config(onClick))
}

fun <T: HasProps<*, String>> T.keepAlive(
    killables: Killables,
    coll: CollectionWrap<T>,
    db: Firestore
) {
    val killListen = Killables()
    val killForeach = props.live.forEach { alive ->
        if (!alive) {
            killListen += coll.doc(id = props.idOrFail).docRef(db).listen(this)
        }
    }

    // Kill order may be important
    killables += {
        killForeach.kill()
        killListen.kill()
    }
}

