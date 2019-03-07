package commonui

import org.w3c.dom.Node

fun Node.insertAfter(what: Node, afterWhat: Node?) {
    insertBefore(
        what,
        if (afterWhat == null) firstChild
        else afterWhat.nextSibling
    )
}

//
//import bootstrap.*
//import common.insertAt
//import common.removeFromParent
//import commonshr.invoke
//import commonui.widget.Inbox
//import domx.*
//import fontawesome.chevronLeft
//import fontawesome.*
//import killable.KillSet
//import killable.Killables
//import killable.NoKill
//import org.w3c.dom.*
//import rx.*
//import kotlin.browser.document
//
//class ToolBar private constructor(val element: HTMLDivElement, killables: KillSet): NodesFactory(element, killables) {
//
//    constructor(node: Node, killables: KillSet): this(
//        node.row {
//            cls {
//                navTabs
//                flexFixedSize()
//                bgLight
//            }
//        },
//        killables
//    )
//
//    val left =
//        document.div {
//            cls {
//                dFlex
//                flexFixedSize()
//            }
//        }.opt()
//
//    fun leftButton(fn: HTMLButtonElement.() -> Unit): HTMLButtonElement {
//        return left.node.btnButton {
//            cls {
//                btnSecondary
//            }
//            fn()
//        }
//    }
//
//    fun backButton(fn: () -> Unit): HTMLButtonElement {
//        return leftButton {
//            cls {
//                m1
//            }
//            clickEvent {
//                fn()
//            }
//            faButtonSpan(Fa.chevronLeft)
//        }
//    }
//
//    val middle =
//        element.div {
//            cls {
//                dFlex
//                flexGrow1
//            }
//        }.opt()
//
//    fun middleTitle(fn: HTMLElement.() -> Unit): HTMLElement {
//        return middle {
//            flexAlignItemsCenter()
//        }.h5 {
//            cls {
//                m2
//            }
//            fn()
//        }
//    }
//
//    val spinner = element.div {
//        cls {
//            dFlex
//            flexRow
//            alignItemsCenter
//        }
//
//        div {
//            cls {
//                m1
//                spinnerBorder
//                spinnerBorderSm
//            }
//        }
//    }.opt()
//
//    val tabs = element.div {
//        cls {
//            dFlex
//            flexRow
//        }
//
//    }.opt()
//
//    val right =
//        element.div {
//            cls {
//                dFlex
//                flexFixedSize()
//            }
//        }.opt { middle.node }
//
//}
//
//open class NodesFactory(
//    private val parent: Node,
//    private val killables: KillSet
//) {
//    private var latest: NodeHolder<*>? = null
//
//    fun <T: Node> T.vis(rxv: RxIface<Boolean>, first: () -> Unit = {}): NodeHolder<T> {
//        return NodeHolder(
//            this,
//            parent,
//            latest,
//            Var(rxv),
//            first,
//            killables
//        ).also { latest = it }
//    }
//    fun <T: Node> T.vis(fn: () -> Boolean = { true }): NodeHolder<T> {
//        return vis(Rx(killables) { fn() })
//    }
//    fun <T: Node> T.opt(first: () -> Unit = {}): NodeHolder<T> {
//        val rxv = Var(false)
//        return vis(rxv) {
//            first()
//            rxv.now = true
//        }
//    }
//
//}
//


//
//
//class NodeHolder<T: Node>(
//    internal val wrapped: T,
//    private val parent: Node,
//    private val previous: NodeHolder<*>?,
//    val visibility: Var<RxIface<Boolean>>,
//    first: () -> Unit,
//    killables: KillSet
//) {
//    val node by lazy {
//        first()
//        wrapped
//    }
//
//    val visible = Rx(killables) { visibility()() }
//
//    operator fun invoke(fn: T.() -> Unit) = node.apply(fn)
//
//    companion object {
//        private val NullNode = lazyOf<Node?>(null)
//    }
//
//    private var lastVisible = NullNode
//
//    private val insertAfterProvider =
//        if (previous == null) {
//            { null }
//        } else {
//            { previous.lastVisible.value }
//        }
//    private fun insert() {
//        parent.insertAfter(wrapped, insertAfterProvider())
//    }
//
//    private val visibleInsertBefore = lazyOf(wrapped)
//    private val previousLastVisible =
//        if (previous == null) {
//            { NullNode }
//        } else {
//            { lazy { previous.lastVisible.value } }
//        }
//
//    init {
//        visible.forEach(NoKill) { v ->
//            lastVisible = if (v) {
//                insert()
//                visibleInsertBefore
//            } else {
//                wrapped.removeFromParent()
//                previousLastVisible()
//            }
//        }
//    }
//
//}
//
//fun Node.nodes(
//    killables: KillSet,
//    fn: NodesFactory.() -> Unit
//) {
//    NodesFactory(this, killables).apply(fn)
//}
//
//abstract external class HTMLDivElementTopbar: HTMLDivElement
//
//val Node.topbarP1 get() = topbar {
//    cls.p1
//}
//
//val Node.topbar get() = row {
//    cls {
//        navTabs
//        flexFixedSize()
//        bgLight
//    }
//
//}.unsafeCast<HTMLDivElementTopbar>()
//
////fun HTMLDivElementTopbar.backButton(inbox: Inbox) {
////    faButton(Fa.chevronLeft) {
////        cls {
////            btnSecondary
////            m1
////        }
////        clickEvent {
////            inbox += Back
////        }
////    }
////}
//
//fun Node.toolbar(killables: KillSet, fn: ToolBar.() -> Unit = {}) = ToolBar(this, killables).apply(fn)
//fun Node.topbar(killables: KillSet, fn: ToolBar.() -> Unit = {}) = toolbar(killables, fn).also { it.element.borderBottom() }
////fun Node.bottombar(fn: ToolBar.() -> Unit = {}) = toolbar(fn).also { it.element.borderTop() }
//
//class ScreenLayout(val element: Element, killables: KillSet) {
//    init {
//        element {
//            cls {
//                dFlex
//                flexColumn
//            }
//        }
//    }
//
//    val top by lazy {
//        document.topbar(killables).also { element.insertAt(0, it.element) }
//    }
//
//    fun top(fn: ToolBar.() -> Unit) = top.apply(fn)
//
//    val main by lazy {
//        element.div {
//            cls {
////                dFlex
//                flexGrow1
//            }
//        }
//    }
//
//
////    val bottom by lazy {
////        main
////        element.bottombar()
////    }
//
////    fun bottom(fn: ToolBar.() -> Unit) = bottom.apply(fn)
//
//
//}
//fun Element.screenLayout(killables: KillSet, fn: ScreenLayout.() -> Unit = {}) = ScreenLayout(this, killables).apply(fn)
//
//fun Node.faTab(ks: KillSet, faIcon: String, act: RxIface<Boolean>, fn: HTMLAnchorElement.() -> Unit) {
//    div {
//        cls {
//            mt1
//            navItem
//            dFlex
//        }
//        a {
//            cls {
//                navLink
//                px2
//                rxClass(ks, active, act)
//            }
//            span {
//                cls {
//                    fa.fw
//                }
//                classes += faIcon
//            }
//            href = "#"
//            fn()
//        }
//    }
//
//}
//
//
//

