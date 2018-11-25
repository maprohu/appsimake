package common

import kotlinx.html.ButtonType
import kotlinx.html.DIV
import kotlinx.html.OL
import kotlinx.html.TagConsumer
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.*
import kotlin.browser.document
import org.w3c.dom.events.Event
import rx.Killable
import rx.Rx
import styles.add
import kotlin.dom.addClass
import kotlin.dom.removeClass


fun Element.insertAt(position: Int, element: Node) {
    val length = this.children.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.children.item(position))
    }
}

fun Element.removeAt(position: Int): Node {
    return removeChild(children.item(position)!!)
}

fun Element.replaceAt(position: Int, element: Element) {
    replaceChild(children.item(position)!!, element)
}

fun Node.removeFromParent() {
    parentElement!!.removeChild(this)
}


fun <T> obj() = js("{}") as T

open class Listeners {

    protected var listeners = listOf<() -> Unit>()

    open fun add(listener: () -> Unit) : () -> Unit {
        listeners += listener

        return {
            listeners -= listener
        }
    }

    open fun fire() {
        listeners.forEach { it() }
    }

}

class Killables : Listeners(), Killable {
    private var killed = false

    override fun kill() {
        fire()
    }

    override fun fire() {
        super.fire()
        listeners = listOf()
        killed = true
    }

    override fun add(listener: () -> Unit): () -> Unit {
        if (killed) {
            listener()
            return {}
        } else {
            return super.add(listener)
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

    private fun wrapper() = document.create.div("w-100 h-100")

    fun new(wrapper : HTMLElement = wrapper()): Content {
        current.kill()
        current = Content(wrapper)
        return current
    }

}

fun TagConsumer<HTMLElement>.topbar(
        block : DIV.() -> Unit = {}
) {
    div("border-bottom d-flex flex-row bg-light align-items-center pr-1") {
        block()
    }
}

fun TagConsumer<HTMLElement>.insert(
        node: Node
) {
    span().apply {
        parentElement!!.appendChild(node)
        removeFromParent()
    }
}


fun TagConsumer<HTMLElement>.breadcrumb(
        block : OL.() -> Unit = {}
): HTMLOListElement {
    return ol("breadcrumb mb-0 flex-grow-1 bg-transparent") {
        block()
    } as HTMLOListElement
}

fun TagConsumer<HTMLElement>.dropdown(
        block : DIV.() -> Unit = {}
): HTMLDivElement {
    return div(classes = "dropdown") {
        button(type = ButtonType.button, classes = "btn btn-light dropdown-toggle") {
            attributes["data-toggle"] = "dropdown"
        }
        div(classes = "dropdown-menu dropdown-menu-right") {
            block()
        }
    }
}

fun TagConsumer<HTMLElement>.menuitem(
        label: String,
        click: (Event) -> Unit
): HTMLAnchorElement {
    return a(classes = "dropdown-item", href = "#") {
        +label
        onClickFunction = click
    }
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

    fun addListener(listener: Listener<T>) : () -> Unit

    interface Listener<in T> {
        fun added(index: Int, element: T)
        fun removed(index: Int)
        fun moved(from: Int, to: Int)

        companion object {
            fun <T> of(
                    added: (Int, T) -> Unit,
                    removed: (Int) -> Unit,
                    moved: (Int, Int) -> Unit
            ) : Listener<T> {
                return object : Listener<T> {
                    override fun added(index: Int, element: T) {
                        added(index, element)
                    }
                    override fun removed(index: Int) {
                        removed(index)
                    }
                    override fun moved(from: Int, to: Int) {
                        moved(from, to)
                    }
                }
            }
        }
    }

    fun addListener(
            added: (Int, T) -> Unit,
            removed: (Int) -> Unit,
            moved: (Int, Int) -> Unit
    ): () -> Unit {
        return addListener(
                Listener.of(added, removed, moved)
        )
    }



}

class ListenableMutableList<T> : AbstractMutableList<T>(), ListenableList<T> {

    override fun addListener(listener: ListenableList.Listener<T>): () -> Unit {
        listeners += listener

        return { listeners -= listener }
    }

    private val delegate = mutableListOf<T>()

    private var listeners = listOf<ListenableList.Listener<T>>()

    override val size: Int
        get() = delegate.size

    override fun add(index: Int, element: T) {
        delegate.add(index, element)
        listeners.forEach { it.added(index, element) }
    }

    override fun removeAt(index: Int): T {
        val v = delegate.removeAt(index)
        listeners.forEach { it.removed(index) }
        return v
    }

    override fun set(index: Int, element: T): T {
        val v = delegate.set(index, element)
        listeners.forEach {
            it.removed(index)
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