package commonfb

import bootstrap.*
import common.ListenableList
import common.ListenableMutableList
import common.map
import commonlib.CollectionWrap
import commonshr.invoke
import commonui.RootPanel
import commonui.showClosable
import domx.*
import firebase.firestore.*
import firebase.firestore.ListenConfig.Companion.hasProps
import firebaseshr.HasFBProps
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


data class ListUIConfig<T: HasFBProps<*>>(
    val root: RootPanel,
    val query: RxIface<QueryWrap<T>>,
    val collectionWrap: CollectionWrap<T>,
    val create: () -> T,
    val filter: (ListenableList<T>) -> ListenableList<T> = { it },
    val hourglassDecor: HTMLDivElement.() -> Unit = { cls.m2 },
    val emptyDivDecor : HTMLDivElement.() -> Unit = standardEmptyDiv,
    val listDivDecor : HTMLDivElement.() -> Unit = { cls.scrollVertical; cls.flexGrow1 },
    val ulDecor: HTMLUListElement.() -> Unit = {},
    val itemFactory: (T) -> Node
) {
    companion object {

        val standardEmptyDiv: HTMLDivElement.() -> Unit = {
            cls {
                flexCenter()
                flexGrow1
                p1
            }
            span {
                innerText = "The list is empty"
            }
        }

    }
}

fun <T: HasFBProps<*>> listUI(
    killables: Killables,
    config: ListUIConfig<T>
) {
    with(config) {
        val emptyDiv = document.column {
            emptyDivDecor()
        }

        query.fold(killables.killSet, Killable.empty) { old, q ->
            old.kill()

            val queryRoot = root.sub()
            queryRoot.setHourglass().apply(hourglassDecor)

            val ks = killables.killables()

            val list = ListenableMutableList<T>()

            val filtered = filter(list)

            val listDiv = document.column {
                listDivDecor()
                listGroup {
                    ulDecor()
                    listenableList(filtered, itemFactory)
                }
            }

            q.query.listen(
                ks,
                hasProps(
                    list,
                    collectionWrap,
                    create = create
                ).copy(
                    onFirst = {
                        filtered.isEmptyRx.forEach(ks.killSet) { empty ->
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

fun <T: HasFBProps<*>> showClosableList(
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

fun <T: HasFBProps<*>> T.keepAlive(
    killables: Killables,
    db: Firestore
) {
    val killListen = Killables()
    props.live.forEach(killables.killSet) { alive ->
        if (!alive) {
            killListen += props.docWrapOrFail.docRef(db).listen(this)
        }
    }

    // Kill order may be important
    killables += {
        killListen.kill()
    }
}

fun <T> Node.listNodes(
    list: ListenableList<T>,
    fn: (T, Killables) -> Node
): Killable {
    val ks = Killables()
    class Holder(
        val node: Node,
        killable: Killable
    ): Killable by killable
    val ns = list.map(ks) { t ->
        val nks = Killables()
        Holder(
            fn(t, nks),
            nks
        )
    }
    ks += listenableList(
        ns
    ) { it.node }
    return ks
}

