package commonui

import bootstrap.*
import common.insertAt
import common.removeFromParent
import domx.*
import fontawesome.chevronLeft
import fontawesome.*
import killable.Killable
import killable.Killables
import org.w3c.dom.*
import rx.*
import kotlin.browser.document

class ToolBar private constructor(val element: HTMLDivElement, killables: Killables): NodesFactory(element, killables) {

    constructor(node: Node, killables: Killables): this(
        node.row {
            cls {
                navTabs
                flexFixedSize()
                bgLight
            }
        },
        killables
    )


    val left =
        document.div {
            cls {
                dFlex
                flexFixedSize()
            }
        }.opt()

    fun leftButton(fn: HTMLButtonElement.() -> Unit): HTMLButtonElement {
        return left.node.btnButton {
            cls {
                btnSecondary
            }
            fn()
        }
    }

    fun backButton(fn: () -> Unit): HTMLButtonElement {
        return leftButton {
            cls {
                m1
                fa.chevronLeft
                clickEvent {
                    fn()
                }
            }
        }
    }




    val middle =
        element.div {
            flex()
            flexGrow1()
        }.opt()

    fun middleTitle(fn: HTMLElement.() -> Unit): HTMLElement {
        return middle {
            flexAlignItemsCenter()
        }.h5 {
            cls {
                m2
            }
            fn()
        }
    }

    val spinner = element.div {
        div {
            cls {
                m1
                spinnerBorder
                spinnerBorderSm
            }
        }
    }.opt()

    val tabs = element.div {
        cls {
            dFlex
            flexRow
        }

    }.opt()

    val right =
        element.div {
            cls {
                dFlex
                flexFixedSize()
            }
        }.opt { middle.node }

}

open class NodesFactory(
    private val parent: Node,
    private val killables: Killables
) {
    private var latest: NodeHolder<*>? = null

    fun <T: Node> T.vis(rxv: RxIface<Boolean>, first: () -> Unit = {}): NodeHolder<T> {
        return NodeHolder(
            this,
            parent,
            latest,
            Var(rxv),
            first,
            killables
        ).also { latest = it }
    }
    fun <T: Node> T.vis(fn: () -> Boolean = { true }): NodeHolder<T> {
        return vis(Rx { fn() }.also { killables += it })
    }
    fun <T: Node> T.opt(first: () -> Unit = {}): NodeHolder<T> {
        val rxv = Var(false)
        return vis(rxv) {
            first()
            rxv.now = true
        }
    }

}

fun Node.insertAfter(what: Node, afterWhat: Node?) {
    insertBefore(
        what,
        if (afterWhat == null) firstChild
        else afterWhat.nextSibling
    )
}

class NodeHolder<T: Node>(
    internal val wrapped: T,
    private val parent: Node,
    private val previous: NodeHolder<*>?,
    val visibility: Var<RxIface<Boolean>>,
    first: () -> Unit,
    killables: Killables
) {
    val node by lazy {
        first()
        wrapped
    }

    val visible = Rx { visibility()() }.also { killables += it }

    operator fun invoke(fn: T.() -> Unit) = node.apply(fn)

    companion object {
        private val NullNode = lazyOf<Node?>(null)
    }

    private var lastVisible = NullNode

    private val insertAfterProvider =
        if (previous == null) {
            { null }
        } else {
            { previous.lastVisible.value }
        }
    private fun insert() {
        parent.insertAfter(wrapped, insertAfterProvider())
    }

    private val visibleInsertBefore = lazyOf(wrapped)
    private val previousLastVisible =
        if (previous == null) {
            { NullNode }
        } else {
            { lazy { previous.lastVisible.value } }
        }

    init {
        visible.forEach { v ->
            lastVisible = if (v) {
                insert()
                visibleInsertBefore
            } else {
                wrapped.removeFromParent()
                previousLastVisible()
            }
        }
    }

}

fun Node.nodes(
    killables: Killables,
    fn: NodesFactory.() -> Unit
) {
    NodesFactory(this, killables).apply(fn)
}


fun Node.toolbar(killables: Killables, fn: ToolBar.() -> Unit = {}) = ToolBar(this, killables).apply(fn)
fun Node.topbar(killables: Killables, fn: ToolBar.() -> Unit = {}) = toolbar(killables, fn).also { it.element.borderBottom() }
//fun Node.bottombar(fn: ToolBar.() -> Unit = {}) = toolbar(fn).also { it.element.borderTop() }

class ScreenLayout(val element: Element, killables: Killables) {
    init {
        element.apply {
            flex()
            flexColumn()
        }
    }

    val top by lazy {
        document.topbar(killables).also { element.insertAt(0, it.element) }
    }

    fun top(fn: ToolBar.() -> Unit) = top.apply(fn)

    val main by lazy {
        element.div {
            flex()
            flexGrow1()
        }
    }

    fun main(fn: HTMLDivElement.() -> Unit) = main.apply(fn)

//    val bottom by lazy {
//        main
//        element.bottombar()
//    }

//    fun bottom(fn: ToolBar.() -> Unit) = bottom.apply(fn)


}
fun Element.screenLayout(killables: Killables, fn: ScreenLayout.() -> Unit = {}) = ScreenLayout(this, killables).apply(fn)

fun Node.faTab(faIcon: String, act: RxIface<Boolean>, fn: HTMLAnchorElement.() -> Unit): Killable {
    val killables = Killables()
    div {
        cls {
            mt1
            navItem
            dFlex
        }
        a {
            cls {
                navLink
                px2
                killables += rxClass(active, act)
            }
            span {
                cls {
                    fa.fw
                }
                classes += faIcon
            }
            href = "#"
            fn()
        }
    }
    return killables

}

