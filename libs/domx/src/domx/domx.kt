package domx

import common.ListenableList
import common.insertAt
import common.removeAt
import common.removeFromParent
import killable.Killable
import killable.KillableSeq
import org.w3c.dom.*
import org.w3c.dom.css.ElementCSSInlineStyle
import org.w3c.dom.events.Event
import org.w3c.dom.events.InputEvent
import org.w3c.dom.events.MouseEvent
import rx.Rx
import rx.RxVal
import rx.Var
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass
import kotlin.properties.ReadOnlyProperty
import kotlin.properties.ReadWriteProperty
import kotlin.reflect.KProperty


fun <T: Element> Node.tagCreated(created: Element, fn: T.() -> Unit = {}): T {
    val t = created.unsafeCast<T>()
    if (this !is Document) {
        this.appendChild(t)
    }
    return t.apply(fn)
}

fun <T: Element> Node.tag(name: String, fn: T.() -> Unit = {}): T {
    return tagCreated(document.createElement(name), fn)
}

fun <T: Element> Node.tagNS(ns: String, name: String, fn: T.() -> Unit = {}): T {
    return tagCreated(document.createElementNS(ns, name), fn)
}


val Element.classes
    get() = Classes(this)

class Classes(private val element: Element) {
    operator fun plusAssign(cls: String?) {
        cls?.let {
            c -> c.trim().split(Regex("\\s")).forEach {
                element.addClass(it)
            }
        }
    }

    operator fun minusAssign(cls: String?) {
        cls?.let {
            c -> c.trim().split(Regex("\\s")).forEach {
                element.removeClass(it)
            }
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

fun GlobalEventHandlers.clickEventSeq(fn: (MouseEvent) -> Killable): KillableSeq {
    val seq = KillableSeq()
    onclick = {
        it.preventDefault()
        seq += fn(it as MouseEvent)
        Unit
    }
    return seq
}

fun GlobalEventHandlers.inputEvent(fn: (InputEvent) -> Unit) {
    oninput = {
        it.preventDefault()
        fn(it as InputEvent)
    }
}

fun GlobalEventHandlers.changeEvent(fn: (Event) -> Unit) {
    onchange = {
        it.preventDefault()
        fn(it)
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

fun HTMLTextAreaElement.listenInput(fn: (String) -> Unit) {
    inputEvent {
        fn(value)
    }
}
fun HTMLInputElement.listenInput(fn: (String) -> Unit) {
    inputEvent {
        fn(value)
    }
}

fun HTMLButtonElement.rxEnabled(rx: RxVal<Boolean>) {
    rx.forEach { disabled = !it }
}

fun ElementCSSInlineStyle.rxVisible(rxv: RxVal<Boolean>): Killable {
    return rxv.forEach { style.visibility = if (it) "visible" else "collapse" }
}

fun ElementCSSInlineStyle.rxVisible(fn: () -> Boolean): Rx<Boolean> {
    return Rx(fn).also { rxVisible(it) }
}


fun <T> Node.listenableList(
    list: ListenableList<T>,
    create: (T) -> Node
): Killable {
    return list.addListener(
        ListenableList.Listener(
            { index, element -> insertAt(index, create(element)) },
            { index, _ -> removeAt(index) },
            { from, to -> insertAt (to, removeAt(from)) }
        )
    )
}

val String.textNode
    get() = document.createTextNode(this)

operator fun Node.plus(string: String) {
    appendChild(string.textNode)
}

class Attrs(val element: Element) {
    operator fun set(key: String, value: String) {
        element.setAttribute(key, value)
    }
    operator fun get(key: String): String? {
        return element.getAttribute(key)
    }
}

val Element.attr
    get() = Attrs(this)

class Attr : ReadWriteProperty<Element, String?> {
    override fun getValue(thisRef: Element, property: KProperty<*>): String? {
        return thisRef.getAttribute(property.name)
    }

    override fun setValue(thisRef: Element, property: KProperty<*>, value: String?) {
        if (value == null) {
            thisRef.removeAttribute(property.name)
        } else {
            thisRef.setAttribute(property.name, value)
        }
    }
}

private var nextId = 0

val Element.ref
    get() = run {
        if (id.isNullOrBlank()) {
            id = "$tagName-${nextId++}"
        }

        "$id"
    }

fun Node.checkbox(fn: HTMLInputElement.() -> Unit) = input {
    type = "checkbox"
    fn()
}

fun Element.pointerEventsNone() {
    classes += styles.pointerEventsNone
}

fun HTMLSourceElement.base64(mime: String, data:String) {
    src = "data:$mime;base64,$data"
    type = mime
}

fun HTMLAudioElement.replay() {
    pause()
    currentTime = 0.0
    play()
}

class CssClass(val name: String) : ReadOnlyProperty<Cls, String> {
    override fun getValue(thisRef: Cls, property: KProperty<*>) : String {
        thisRef.element { classes += name }
        return name
    }
}
fun String.toCss() =
    this
        .replace("[A-Z]".toRegex()) { "-${it.value.toLowerCase()}" }
        .replace("\\d+".toRegex()) { "-${it.value}" }

class CssClassProvider {
    operator fun provideDelegate(
        thisRef: Nothing?,
        prop: KProperty<*>
    ) = CssClass(prop.name.toCss())
}

open class Cls(val element: (Element.() -> Unit) -> Unit = {}) {
    operator fun invoke(fn: Cls.() -> Unit) = this.apply(fn)
    companion object : Cls()
}
val Element.cls
    get() = Cls { this.apply(it) }

fun css(name: String) = CssClass(name)
fun css() = CssClassProvider()
class TagDelegate<T : Element> : ReadOnlyProperty<Node, T> {
    override fun getValue(thisRef: Node, property: KProperty<*>): T = thisRef.tag(property.name)
}

fun <T: Element> elem() = TagDelegate<T>()

operator fun <T: Node> T.invoke(fn: T.() -> Unit): T {
    return apply(fn)
}

private const val domxNodesAttributeName = "domxNodeExt"

class NodeExt(
    val owner: Node
) {

    inner class ChildRole(
        val parent: NodeExt,
        val previous: ChildRole?
    ) {
        val owner
            get() = this@NodeExt.owner

        val isDisplayed
            get() = owner.isDisplayed
    }

    private var lastKnownChild: ChildRole? = null

    fun updateChildren(): ChildRole? {
        val lastKnownVisibleChildExt = lastKnownChild.previousChain().find { it.isDisplayed }
        val firstUnknownChild = lastKnownVisibleChildExt?.owner ?: owner.firstChild

        firstUnknownChild.nextSeq().forEach {
            lastKnownChild = it.nodeExt.makeChild(this, lastKnownChild)
        }

        return lastKnownChild
    }

    var childRole: ChildRole? = null
    fun asChild() = childRole!!
    fun makeChild(parent: NodeExt, previous: ChildRole?): ChildRole? {
        require(childRole == null)
        childRole = ChildRole(parent, previous)
        return childRole
    }

}

val Node.isDisplayed : Boolean
    get() = parentNode != null

fun NodeExt.ChildRole?.previousChain() = generateSequence(this) { it.previous }
fun Node?.nextSeq() = generateSequence(this) { it.nextSibling }

internal val Node.nodeExt
    get() =
        this.asDynamic()[domxNodesAttributeName].unsafeCast<NodeExt?>() ?:
        NodeExt(this)
            .also { this.asDynamic()[domxNodesAttributeName] = it }

fun Node.rxDisplayed(rxv: RxVal<Boolean>): Killable {
    val parent = parentNode!!
    val parentNodeExt = parent.nodeExt
    parentNodeExt.updateChildren()!!
    val childRole = nodeExt.asChild()
    require(childRole.parent.owner == parent)
    return rxv.forEach {  v ->
        if (v) {
            if (!isDisplayed) {
                val previousDisplayed = childRole.previousChain().drop(1).find { it.isDisplayed }
                val nextDisplayed = if (previousDisplayed == null) {
                    parent.firstChild
                } else {
                    previousDisplayed.owner.nextSibling
                }
                parent.insertBefore(
                    this,
                    nextDisplayed
                )

            }
        } else {
            removeFromParent()
        }
    }
}

fun Node.nav(fn: HTMLElement.() -> Unit = {}) : HTMLElement = tag("nav", fn)
//fun Node.span(fn: HTMLSpanElement.() -> Unit = {}) : HTMLSpanElement = tag("span", fn)
fun Node.styleTag(fn: HTMLStyleElement.() -> Unit = {}) : HTMLStyleElement = tag("style", fn)
fun Node.ul(fn: HTMLUListElement.() -> Unit = {}) : HTMLUListElement = tag("ul", fn)
//fun Node.a(fn: HTMLAnchorElement.() -> Unit = {}) : HTMLAnchorElement = tag("a", fn)
fun Node.ol(fn: HTMLOListElement.() -> Unit = {}) : HTMLOListElement = tag("ol", fn)
fun Node.li(fn: HTMLLIElement.() -> Unit = {}) : HTMLLIElement = tag("li", fn)
fun Node.video(fn: HTMLVideoElement.() -> Unit = {})  = tag("video", fn)
val Node.div by elem<HTMLDivElement>()
val Node.source by elem<HTMLSourceElement>()
val Node.audio by elem<HTMLAudioElement>()
val Node.span by elem<HTMLSpanElement>()
val Node.a by elem<HTMLAnchorElement>()
val Node.button by elem<HTMLButtonElement>()
val Node.h1 by elem<HTMLHeadingElement>()
val Node.h2 by elem<HTMLHeadingElement>()
val Node.h3 by elem<HTMLHeadingElement>()
val Node.h4 by elem<HTMLHeadingElement>()
val Node.h5 by elem<HTMLHeadingElement>()
val Node.h6 by elem<HTMLHeadingElement>()
val Node.dl by elem<HTMLDListElement>()
val Node.dt by elem<HTMLElement>()
val Node.dd by elem<HTMLElement>()
val Node.input by elem<HTMLInputElement>()
val Node.form by elem<HTMLFormElement>()
val Node.label by elem<HTMLLabelElement>()
val Node.textarea by elem<HTMLTextAreaElement>()
val Node.select by elem<HTMLSelectElement>()
val Node.option by elem<HTMLOptionElement>()
