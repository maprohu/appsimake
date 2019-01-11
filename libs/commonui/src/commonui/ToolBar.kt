package commonui

import bootstrap.*
import common.insertAt
import domx.*
import fontawesome.chevronLeft
import fontawesome.fa
import fontawesome.fas
import org.w3c.dom.*
import styles.cls
import kotlin.browser.document

class ToolBar(node: Node) {

    val element = node.row {
        flexFixedSize()
        bgLight()
        padding1()
    }

    val left by lazy {
        document.div {
            flex()
            flexFixedSize()
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

