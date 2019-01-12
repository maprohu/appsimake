package commonui

import bootstrap.*
import common.insertAt
import domx.*
import fontawesome.chevronLeft
import fontawesome.*
import fontawesome.fas
import killable.Killable
import killable.Killables
import org.w3c.dom.*
import rx.RxIface
import rx.rxClass
import kotlin.browser.document

class ToolBar(node: Node) {

    val element = node.row {
        cls {
            navTabs
            flexFixedSize()
            bgLight
//            p1
        }
    }

    val left by lazy {
        document.div {
            cls {
                dFlex
                flexFixedSize()
            }
        }.also { element.insertAt(0, it ) }
    }

    fun left(fn: HTMLDivElement.() -> Unit) = left.apply(fn)

    fun leftButton(fn: HTMLButtonElement.() -> Unit): HTMLButtonElement {
        return left.btnButton {
            cls {
                btnSecondary
            }
            fn()
        }
    }

    fun backButton(fn: () -> Unit): HTMLButtonElement {
        return leftButton {
            cls {
                fa.chevronLeft
                clickEvent {
                    fn()
                }
            }
        }
    }




    val middle by lazy {
        element.div {
            flex()
            flexGrow1()
        }
    }

    fun middle(fn: HTMLDivElement.() -> Unit) = middle.apply(fn)

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

    val right by lazy {
        middle
        element.div {
            cls {
                dFlex
                flexFixedSize()
            }
        }
    }

    fun right(fn: HTMLDivElement.() -> Unit) = right.apply(fn)

}

fun Node.toolbar(fn: ToolBar.() -> Unit = {}) = ToolBar(this).apply(fn)
fun Node.topbar(fn: ToolBar.() -> Unit = {}) = toolbar(fn).also { it.element.borderBottom() }
fun Node.bottombar(fn: ToolBar.() -> Unit = {}) = toolbar(fn).also { it.element.borderTop() }

class ScreenLayout(val element: Element) {
    init {
        element.apply {
            flex()
            flexColumn()
        }
    }

    val top by lazy {
        document.topbar().also { element.insertAt(0, it.element) }
    }

    fun top(fn: ToolBar.() -> Unit) = top.apply(fn)

    val main by lazy {
        element.div {
            flex()
            flexGrow1()
        }
    }

    fun main(fn: HTMLDivElement.() -> Unit) = main.apply(fn)

    val bottom by lazy {
        main
        element.bottombar()
    }

    fun bottom(fn: ToolBar.() -> Unit) = bottom.apply(fn)


}
fun Element.screenLayout(fn: ScreenLayout.() -> Unit = {}) = ScreenLayout(this).apply(fn)

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

