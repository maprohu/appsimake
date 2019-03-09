package commonfb

//import bootstrap.*
//import rx.*
//import commonshr.CollectionWrap
//import commonshr.Trigger
//import commonshr.invoke
//import commonshr.plusAssign
//import commonui.RootPanel
//import commonui.showClosable
//import domx.*
//import firebase.DbDeps
//import firebase.firestore.*
//import firebase.firestore.ListenConfig.Companion.hasProps
//import firebaseshr.HasFBProps
//import killable.*
//import org.w3c.dom.HTMLDivElement
//import org.w3c.dom.HTMLUListElement
//import org.w3c.dom.Node
//import rx.RxIface
//import styles.scrollVertical
//import kotlin.browser.document
//
//fun <T> stringListClick(
//    ks: KillSet,
//    itemText: (T) -> String,
//    onClick: (T) -> Unit
//) : (T) -> Node = { item ->
//    document.listAction {
//        rxText(ks) { itemText(item) }
//        clickEvent {
//            onClick(item)
//        }
//    }
//}
//
//
//data class ListUIConfig<T: HasFBProps<*>>(
//    val root: RootPanel,
//    val query: RxIface<QueryWrap<T>>,
//    val collectionWrap: CollectionWrap<T>,
//    val create: () -> T,
//    val filter: (RxList<T>) -> RxList<T> = { it },
//    val hourglassDecor: HTMLDivElement.() -> Unit = { cls.m2 },
//    val emptyDivDecor : HTMLDivElement.() -> Unit = standardEmptyDiv,
//    val listDivDecor : HTMLDivElement.() -> Unit = { cls.scrollVertical; cls.flexGrow1 },
//    val ulDecor: HTMLUListElement.() -> Unit = {},
//    val itemFactory: (T) -> Node
//) {
//    companion object {
//
//        val standardEmptyDiv: HTMLDivElement.() -> Unit = {
//            cls {
//                flexCenter()
//                flexGrow1
//                p1
//            }
//            span {
//                innerText = "The list is empty"
//            }
//        }
//
//    }
//}
//
//fun <T: HasFBProps<*>> listUI(
//    killables: KillSet,
//    config: ListUIConfig<T>
//) {
//    with(config) {
//        val emptyDiv = document.column {
//            emptyDivDecor()
//        }
//
//        query.fold(killables, Noop) { old, q ->
//            old()
//
//            val queryRoot = root.sub()
//            queryRoot.setHourglass().apply(hourglassDecor)
//
//            val ks = killables.killables()
//
//            val list = RxMutableList<T>()
//
//            val filtered = filter(list)
//
//            val listDiv = document.column {
//                listDivDecor()
//                listGroup {
//                    ulDecor()
//                    listenableList(ks.killSet, filtered, itemFactory)
//                }
//            }
//
//            q.query.listen(
//                ks,
//                hasProps(
//                    list,
//                    collectionWrap,
//                    create = create
//                ).copy(
//                    onFirst = {
//                        filtered.isEmptyRx.forEach(ks.killSet) { empty ->
//                            queryRoot.setRoot(
//                                if (empty) emptyDiv else listDiv
//                            )
//                        }
//                    }
//                )
//            )
//
//            ks.kill
//        }
//
//    }
//}
//
//fun <T: HasFBProps<*>> showClosableList(
//    killables: KillSet,
//    redisplay: () -> Unit,
//    page: (KillSet, T, close: () -> Unit) -> Unit,
//    config: (show: (T) -> Unit) -> ListUIConfig<T>
//) {
//    val viewSeq = killables.seq()
//
//    val onClick: (T) -> Unit = { dit ->
//
//        val viewKills = viewSeq.killables()
//
//        fun close() {
//            redisplay()
//            viewKills.kill()
//        }
//
//        showClosable(
//            viewKills.killSet,
//            { ks, close -> page(ks, dit, close) },
//            ::close
//        )
//        viewKills += dit.props.onDeleted.add {
//            close()
//        }
//    }
//
//    listUI(killables, config(onClick))
//}
//
//fun <T: HasFBProps<*>> T.listenToSnapshots(
//    killables: KillSet,
//    db: Firestore,
//    onFirst: Trigger = {}
//) {
//    killables += props.docWrapOrFail.docRef(DbDeps(db)).listen(this, onFirst)
//}
//
//fun <T: HasFBProps<*>> T.keepAlive(
//    killables: KillSet,
//    db: Firestore
//) {
//    val killListen = Killables()
//    props.live.forEach(killables) { alive ->
//        if (!alive) {
//            killListen += props.docWrapOrFail.docRef(DbDeps(db)).listen(this@keepAlive)
//        }
//    }
//
//    // Kill order may be important
//    killables += {
//        killListen.kill()
//    }
//}
//
//fun <T> Node.listNodes(
//    ks: KillSet,
//    list: RxList<T>,
//    fn: (T, KillSet) -> Node
//) {
//    val ns = list.map(ks) { t ->
//        val nks = Killables()
//        KillableValue(
//            fn(t, nks.killSet),
//            nks.kill
//        )
//    }
//    listenableList(
//        ks,
//        ns
//    ) { kv -> kv.value }
//}

