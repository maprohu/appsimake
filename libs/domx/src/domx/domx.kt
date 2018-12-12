package domx

import common.ListenableList
import common.insertAt
import common.removeAt
import org.w3c.dom.*
import org.w3c.dom.events.InputEvent
import org.w3c.dom.events.MouseEvent
import rx.RxVal
import rx.Var
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass


fun <T: Element> Node.tag(name: String, fn: T.() -> Unit = {}): T {
    val t = document.createElement(name).unsafeCast<T>()
    if (this !is Document) {
        this.appendChild(t)
    }
    return t.apply(fn)
}



val Element.classes
    get() = Classes(this)

class Classes(private val element: Element) {
    operator fun plusAssign(cls: String) {
        cls.trim().split(Regex("\\s")).forEach {
            element.addClass(it)
        }
    }

    operator fun minusAssign(cls: String) {
        cls.trim().split(Regex("\\s")).forEach {
            element.removeClass(it)
        }
    }
}

operator fun NamedNodeMap.set(key: String, value: String) {
    document
        .createAttribute(key)
        .apply {
            this.value = value
        }
        .also {
            setNamedItem(it)
        }
}

fun GlobalEventHandlers.clickEvent(fn: (MouseEvent) -> Unit) {
    onclick = {
        it.preventDefault()
        fn(it as MouseEvent)
    }
}

fun GlobalEventHandlers.inputEvent(fn: (InputEvent) -> Unit) {
    oninput = {
        it.preventDefault()
        fn(it as InputEvent)
    }
}

fun HTMLTextAreaElement.rxInput(rx: Var<String>) {
    inputEvent {
        rx.now = value
    }
}

fun HTMLInputElement.rxInput(rx: Var<String>) {
    inputEvent {
        rx.now = value
    }
}

fun HTMLButtonElement.rxEnabled(rx: RxVal<Boolean>) {
    rx.forEach { disabled = !it }
}

fun <T> Node.listenableList(
    list: ListenableList<T>,
    create: (T) -> Node
): () -> Unit {
    return list.addListener(
        object : ListenableList.Listener<T> {
            override fun added(index: Int, element: T) {
                insertAt(index, create(element))
            }

            override fun removed(index: Int) {
                removeAt(index)
            }

            override fun moved(from: Int, to: Int) {
                insertAt(to, removeAt(from))
            }
        }
    )
}


fun Node.div(fn: HTMLDivElement.() -> Unit = {}) : HTMLDivElement = tag("div", fn)
fun Node.nav(fn: HTMLElement.() -> Unit = {}) : HTMLElement = tag("nav", fn)
fun Node.span(fn: HTMLSpanElement.() -> Unit = {}) : HTMLSpanElement = tag("span", fn)
fun Node.styleTag(fn: HTMLStyleElement.() -> Unit = {}) : HTMLStyleElement = tag("style", fn)
fun Node.ul(fn: HTMLUListElement.() -> Unit = {}) : HTMLUListElement = tag("ul", fn)
fun Node.a(fn: HTMLAnchorElement.() -> Unit = {}) : HTMLAnchorElement = tag("a", fn)
fun Node.ol(fn: HTMLOListElement.() -> Unit = {}) : HTMLOListElement = tag("ol", fn)
fun Node.li(fn: HTMLLIElement.() -> Unit = {}) : HTMLLIElement = tag("li", fn)
fun Node.button(fn: HTMLButtonElement.() -> Unit = {}) : HTMLButtonElement = tag("button", fn)
fun Node.label(fn: HTMLLabelElement.() -> Unit = {}) : HTMLLabelElement = tag("label", fn)
fun Node.textarea(fn: HTMLTextAreaElement.() -> Unit = {}) : HTMLTextAreaElement = tag("textarea", fn)
fun Node.input(fn: HTMLInputElement.() -> Unit = {}) : HTMLInputElement = tag("input", fn)
