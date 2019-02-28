package common

import commonshr.*
import killable.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import rx.Rx
import rx.RxIface
import rx.RxVal
import rx.Var
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.removeClass



val onResize by lazy {
    val listeners = Listeners()

    window.onresize = {
        listeners.fire()
    }

    listeners
}

fun Window.resizeEvent(fn: () -> Unit) : () -> Unit {
    window.setTimeout(fn, 0)
    fn()
    return onResize.add(fn)
}

fun Element.insertAt(position: Int, element: Node) {
    val length = this.children.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.children.item(position))
    }
}

fun Node.insertAt(position: Int, element: Node) {
    val length = this.childNodes.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.childNodes.item(position))
    }
}

fun Element.removeAt(position: Int): Node {
    return removeChild(children.item(position)!!)
}

fun Node.removeAt(position: Int): Node {
    return removeChild(childNodes.item(position)!!)
}

fun Element.replaceAt(position: Int, element: Element) {
    replaceChild(children.item(position)!!, element)
}

fun Node.removeFromParent() {
    parentElement?.removeChild(this)
}

fun Node.replaceWith(node: Node) {
    parentNode!!.apply {
        insertBefore(node, this@replaceWith)
        removeChild(this@replaceWith)
    }
}






fun HTMLAnchorElement.attachEnabler(ks: KillSet, enabled: Rx<Boolean>) {
    enabled.forEach(ks) { en ->
        if (en) {
            removeClass("disabled")
            style.cursor = "pointer"
        } else {
            addClass("disabled")
            style.cursor = "default"
        }
    }
}



fun <T> linkedIterable(first: T?, next: (T) -> T?) : Iterable<T> {
    return object : Iterable<T> {
        override fun iterator(): Iterator<T> {
            return object : Iterator<T> {
                var current = first

                override fun next(): T {
                    val tmp = current
                    if (tmp == null) {
                        throw NoSuchElementException()
                    } else {
                        current = next(tmp)
                        return tmp
                    }
                }

                override fun hasNext(): Boolean {
                    return current != null
                }
            }
        }
    }
}


fun EventTarget.listen(type: String, fn: (Event) -> Unit): Trigger {
    this.addEventListener(type, fn)
    return {
        this.removeEventListener(type, fn)
    }.once()
}

fun <T: Event> EventTarget.listenAs(type: String, fn: (T) -> Unit): Trigger {
    return listen(type) { e ->
        fn(e.unsafeCast<T>())
    }
}

fun WindowOrWorkerGlobalScope.onInterval(timeout: Int, fn: () -> Unit): Trigger {
    val handle = setInterval(fn, timeout)
    return {
        clearInterval(handle)
    }.once()
}


