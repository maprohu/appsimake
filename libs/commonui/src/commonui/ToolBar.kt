package commonui

import bootstrap.*
import common.insertAt
import domx.div
import domx.span
import org.w3c.dom.*
import kotlin.browser.document

class ToolBar(node: Node, fn: ToolBar.() -> Unit = {}) {

    val element = node.row {
        flexFixedSize()
        bgLight()
        padding1()
    }

    val left by lazy {
        document.div {
            flex()
            flexFixedSize()
            margin1()
        }.also { element.insertAt(0, it ) }
    }

    fun left(fn: HTMLDivElement.() -> Unit) = left.apply(fn)

    fun leftButton(fn: HTMLButtonElement.() -> Unit) {
        return left.btnButton {
            btnSecondary()
            fn()
        }
    }



    val middle by lazy {
        element.div {
            flex()
            flexGrow1()
            margin1()
        }
    }

    fun middle(fn: HTMLDivElement.() -> Unit) = middle.apply(fn)

    fun middleTitle(fn: HTMLSpanElement.() -> Unit): HTMLSpanElement {
        return middle {
            flexAlignItemsCenter()
        }.span {
            style.fontSize = "1.25rem"
            fn()
        }
    }


    val right by lazy {
        middle
        element.div {
            flex()
            flexFixedSize()
            margin1()
        }
    }

    fun right(fn: HTMLDivElement.() -> Unit) = right.apply(fn)

    init {
        fn(this)
    }

}

fun Node.toolbar(fn: ToolBar.() -> Unit = {}) = ToolBar(this, fn)
fun Node.topbar(fn: ToolBar.() -> Unit = {}) = toolbar(fn).also { it.element.borderBottom() }
fun Node.bottombar(fn: ToolBar.() -> Unit = {}) = toolbar(fn).also { it.element.borderTop() }

class ScreenLayout(val element: Element, fn: ScreenLayout.() -> Unit = {}) {
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


    init {
        fn(this)
    }
}
fun Element.screenLayout(fn: ScreenLayout.() -> Unit = {}) = ScreenLayout(this, fn)

