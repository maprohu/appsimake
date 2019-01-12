package common

import killable.Killable
import killable.Killables
import org.w3c.dom.*
import kotlin.browser.document
import org.w3c.dom.events.Event
import rx.Rx
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






fun HTMLAnchorElement.attachEnabler(enabled: Rx<Boolean>) : Killable {
    return enabled.forEach { en ->
        if (en) {
            this.removeClass("disabled")
            this.style.cursor = "pointer"
        } else {
            this.addClass("disabled")
            this.style.cursor = "default"
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

interface ListenableList<out T> : List<T> {

    fun addListener(listener: Listener<T>) : Killable

    data class Listener<in T>(
        val added: (Int, T) -> Unit = { _, _ -> },
        val removed: (Int, T) -> Unit = { _, _ -> },
        val moved: (Int, Int) -> Unit = { _, _ ->}
    )

//    interface Listener<in T> {
//        fun added(index: Int, element: T)
//        fun removed(index: Int)
//        fun moved(from: Int, to: Int)
//
//        companion object {
//            fun <T> of(
//            ) : Listener<T> {
//                return object : Listener<T> {
//                    override fun added(index: Int, element: T) {
//                        added(index, element)
//                    }
//                    override fun removed(index: Int) {
//                        removed(index)
//                    }
//                    override fun moved(from: Int, to: Int) {
//                        moved(from, to)
//                    }
//                }
//            }
//        }
//    }
//
//    fun addListener(
//            added: (Int, T) -> Unit,
//            removed: (Int) -> Unit,
//            moved: (Int, Int) -> Unit
//    ): () -> Unit {
//        return addListener(
//                Listener.of(added, removed, moved)
//        )
//    }



}

class ListenableMutableList<T> : AbstractMutableList<T>(), ListenableList<T> {

    private val sizeVar = Var(0)

    val sizeRx : RxVal<Int>
        get() = sizeVar

    val isEmptyRx = Rx { sizeVar() == 0 }

    override fun addListener(listener: ListenableList.Listener<T>): Killable {
        listeners += listener

        return Killable.once {
            listeners -= listener
        }
    }

    private val delegate = mutableListOf<T>()

    private var listeners = listOf<ListenableList.Listener<T>>()

    override val size: Int
        get() = delegate.size


//    override fun add(element: T): Boolean {
//        add(delegate.size, element)
//        return true
//    }

    override fun add(index: Int, element: T) {
        delegate.add(index, element)
        sizeVar.now = size
        listeners.forEach { it.added(index, element) }
    }

    override fun removeAt(index: Int): T {
        val v = delegate.removeAt(index)
        sizeVar.now = size
        listeners.forEach { it.removed(index, v) }
        return v
    }

    override fun set(index: Int, element: T): T {
        val v = delegate.set(index, element)
        listeners.forEach {
            it.removed(index, v)
            it.added(index, element)
        }
        return v
    }

    override fun get(index: Int): T {
        return delegate[index]
    }

    fun move(from: Int, to: Int) {
        val v = delegate.removeAt(from)
        delegate.add(to, v)
        listeners.forEach { it.moved(from, to) }
    }


}


