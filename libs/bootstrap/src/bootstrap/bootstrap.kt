package bootstrap

import killable.Killable
import killable.Killables
import org.w3c.dom.*
import rx.*
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass
import common.*
import domx.*
import styles.overflowHidden


fun Node.topbar(
    block : HTMLDivElement.() -> Unit = {}
) {
    div {
        flexRow()
        classes += "border-bottom bg-light align-items-center pr-1"

        block()
    }
}

fun Node.breadcrumb(
    block : HTMLOListElement.() -> Unit = {}
): HTMLOListElement {
    return ol {
        flexGrow1()
        classes += "breadcrumb mb-0 bg-transparent"
        block()
    }
}

fun Node.dropdown(
    block : HTMLDivElement.() -> Unit = {}
): HTMLDivElement {
    return div {
        classes += "dropdown"
        button {
            type = "button"
            classes += "btn btn-light dropdown-toggle"
            attributes["data-toggle"] = "dropdown"
        }
        div {
            classes += "dropdown-menu dropdown-menu-right"
            block()
        }
    }
}




fun Node.listButton(
        fn: () -> Unit = {},
        content: HTMLAnchorElement.() -> Unit
): HTMLAnchorElement {
    return a {
        href = "#"
        classes += "list-group-item list-group-item-action"
        onclick = {
            it.preventDefault()
            fn()
        }
        content()
    }
}

fun Node.listGroup(
    content: HTMLUListElement.() -> Unit
): HTMLElement {
    return ul {
        classes += "list-group"
        content()
    }
}

fun Node.listGroupItem(
    content: HTMLLIElement.() -> Unit
): HTMLElement {
    return li {
        classes += "list-group-item"
        content()
    }
}


fun Node.commandButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return listButton(fn) {
        innerText = label
    }
}

fun Node.divCenter(block : HTMLDivElement.() -> Unit): HTMLDivElement {
    return div {
        fullSize()
        flexCenter()
        block()
    }
}

fun Element.flexCenter() {
    flex()
    classes += "align-items-center justify-content-center"
}

fun HTMLElement.rxDisplay(rxVal: RxVal<Boolean>): Killable {
    return rxVal.forEach {
        this.style.cssText = if (it) "" else "display: none !important;"
//        if (it) removeClass("d-none") else addClass("d-none")
    }
}

fun HTMLElement.rxText(rxVal: RxVal<String>): Killable {
    return rxVal.forEach {
        this.innerText = it
    }
}

fun HTMLElement.rxText(fn: () -> String): Killable {
    val rx = Rx(fn)
    rxText(rx)
    return rx
}

fun setupFullScreen() {
    document.body!!.apply {
        fullSize()

        parentElement!!.apply {
            fullSize()
            classes += overflowHidden
        }
    }
}

class Panel(private val root: org.w3c.dom.Node) {

    private var current = Content(wrapper())

    inner class Content(
        val tab : HTMLElement
    ) {
        init {
            root.appendChild(tab)
        }

        val killables = Killables()

        internal fun kill() {
            tab.removeFromParent()
            killables.kill()
        }
    }

    private fun wrapper() = document.div { fullSize() }

    fun new(wrapper : HTMLElement = wrapper()): Content {
        current.kill()
        current = Content(wrapper)
        return current
    }

}

fun Node.btn(fn: HTMLButtonElement.() -> Unit) {
    button {
        type = "button"
        classes += "btn"
        fn()
    }
}


fun Element.fullSize() {
    classes += "w-100 h-100"
}
fun Element.flex() {
    classes += "d-flex"
}
fun Element.flexColumn() {
    flex()
    classes += "flex-column"
}
fun Element.flexRow() {
    flex()
    classes += "flex-row"
}
fun Element.margin2() {
    classes += "m-2"
}
fun Element.padding2() {
    classes += "p-2"
}
fun Element.flexGrow1() {
    classes += "flex-grow-1"
}
fun Element.flexGrow0() {
    classes += "flex-grow-0"
}
fun Element.flexShrink0() {
    classes += "flex-shrink-0"
}
fun Element.bgLigth() {
    classes += "bg-light"
}
fun Element.flexFixedSize() {
    flexShrink0()
    flexGrow0()
}

fun Element.borderBottom() {
    classes += "border-bottom"
}
fun Element.btnPrimary() {
    classes += "btn-primary"
}
fun Element.btnSecondary() {
    classes += "btn-secondary"
}
fun Element.formGroup() {
    classes += "form-group"
}
fun Element.formControl() {
    classes += "form-control"
}




