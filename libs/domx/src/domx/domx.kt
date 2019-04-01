package domx

import common.*
import commonshr.*
import killable.*
import org.w3c.dom.*
import org.w3c.dom.css.ElementCSSInlineStyle
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import org.w3c.dom.events.InputEvent
import org.w3c.dom.events.MouseEvent
import rx.Rx
import rx.RxVal
import rx.Var
import rx.forEach
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.appendText
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


inline val Element.classes
    get() = Classes(this)

class Classes(private val element: Element) {
    operator fun plusAssign(cls: String?) {
        cls?.let { c ->
            TODO("classname is an animated property in svg, library addClass fails!")
//            console.dir(element)
//            println(c)
            c.trim().split(Regex("\\s")).forEach {
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

//fun EventTarget.clickEvent(fn: (MouseEvent) -> Unit) {
//    addEventListener(
//        "click",
//        {
//            it.preventDefault()
//            fn(it as MouseEvent)
//        }
//    )
//}
//
//fun GlobalEventHandlers.longClick(fn: () -> Unit) {
//    var timer: Int? = null
//    fun cancel() {
//        timer?.let { t ->
//            window.clearTimeout(t)
//            timer = null
//        }
//    }
//    onmouseleave = {
//        it.preventDefault()
//        it.stopPropagation()
//        cancel()
//        Unit
//    }
//    onmousedown = {
//        it.preventDefault()
//        it.stopPropagation()
//        cancel()
//        timer = window.setTimeout(
//            {
//                timer = null
//                fn()
//            },
//            1000
//        )
//        Unit
//    }
//    onmouseup = {
//        it.preventDefault()
//        it.stopPropagation()
//        cancel()
//    }
//}
//
//fun GlobalEventHandlers.clickEventSeq(ks: KillSet, fn: (KillSet, MouseEvent) -> Unit)  {
//    val seq = ks.seq()
//    onclick = {
//        it.preventDefault()
//        fn(seq.killSet(), it)
//    }
//}
//
//fun GlobalEventHandlers.inputEvent(fn: (InputEvent) -> Unit) {
//    oninput = {
//        it.preventDefault()
//        fn(it)
//    }
//}
//
//fun GlobalEventHandlers.changeEvent(fn: (Event) -> Unit) {
//    onchange = {
//        it.preventDefault()
//        fn(it)
//    }
//}
//
//fun HTMLTextAreaElement.rxInput(rx: Var<String>) {
//    inputEvent {
//        rx.now = value
//    }
//}
//
//
//fun HTMLInputElement.rxInput(rx: Var<String>) {
//    inputEvent {
//        rx.now = value
//    }
//}
//
//fun HTMLTextAreaElement.listenInput(fn: (String) -> Unit) {
//    inputEvent {
//        fn(value)
//    }
//}
//fun HTMLInputElement.listenInput(fn: (String) -> Unit) {
//    inputEvent {
//        fn(value)
//    }
//}
//
//
//fun ElementCSSInlineStyle.rxVisible(deps: HasKills, rxv: RxVal<Boolean>) {
//    rxv.forEach(deps.kills) { style.visibility = if (it) "visible" else "collapse" }
//}
//
//fun ElementCSSInlineStyle.rxVisible(deps: HasKills, fn: KillsApi.() -> Boolean): Rx<Boolean> {
//    return Rx(deps.kills, fn).also { rxVisible(HasNoKill, it) }
//}
//
//
//
//val String.textNode
//    get() = document.createTextNode(this)
//
//operator fun Node.plus(string: String) {
//    appendChild(string.textNode)
//}

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

//class Attr : ReadWriteProperty<Element, String?> {
//    override fun getValue(thisRef: Element, property: KProperty<*>): String? {
//        return thisRef.getAttribute(property.name)
//    }
//
//    override fun setValue(thisRef: Element, property: KProperty<*>, value: String?) {
//        if (value == null) {
//            thisRef.removeAttribute(property.name)
//        } else {
//            thisRef.setAttribute(property.name, value)
//        }
//    }
//}

private var nextId = 0

val Element.ref
    get() = run {
        if (id.isNullOrBlank()) {
            id = "$tagName-${nextId++}"
        }

        "$id"
    }

//fun Node.checkbox(fn: HTMLInputElement.() -> Unit) = input {
//    type = "checkbox"
//    fn()
//}

//fun Element.pointerEventsNone() {
//    classes += styles.pointerEventsNone
//}

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

open class Cls(val element: (Element.() -> Unit) -> Unit = {}): InvokeApply {
    companion object : Cls()
}
val Element.cls
    get() = Cls { this.apply(it) }

fun css(name: String) = CssClass(name)
fun css() = CssClassProvider()
class TagDelegate<T : Element>(val name: String? = null) : ReadOnlyProperty<Node, T> {
    override fun getValue(thisRef: Node, property: KProperty<*>): T = thisRef.tag(name ?: property.name)
}

fun <T: Element> elem() = TagDelegate<T>()
fun <T: Element> elem(name: String) = TagDelegate<T>(name)

operator fun <T: Node> T.invoke(fn: T.() -> Unit): T {
    return apply(fn)
}

//private const val domxNodesAttributeName = "domxNodeExt"
//
//class NodeExt(
//    val owner: Node
//) {
//
//    inner class ChildRole(
//        val parent: NodeExt,
//        val previous: ChildRole?
//    ) {
//        val owner
//            get() = this@NodeExt.owner
//
//        val isDisplayed
//            get() = owner.isDisplayed
//    }
//
//    private var lastKnownChild: ChildRole? = null
//
//    fun updateChildren(): ChildRole? {
//        val lastKnownVisibleChildExt = lastKnownChild.previousChain().find { it.isDisplayed }
//        val firstUnknownChild = lastKnownVisibleChildExt?.owner?.nextSibling ?: owner.firstChild
//
//        firstUnknownChild.nextSeq().forEach {
//            lastKnownChild = it.nodeExt.makeChild(this, lastKnownChild)
//        }
//
//        return lastKnownChild
//    }
//
//    var childRole: ChildRole? = null
//    fun asChild() = childRole!!
//    fun makeChild(parent: NodeExt, previous: ChildRole?): ChildRole? {
//        require(childRole == null)
//        childRole = ChildRole(parent, previous)
//        return childRole
//    }
//
//}
//
//val Node.isDisplayed : Boolean
//    get() = parentNode != null
//
//fun NodeExt.ChildRole?.previousChain() = generateSequence(this) { it.previous }
//fun Node?.nextSeq() = generateSequence(this) { it.nextSibling }
//
//internal val Node.nodeExt
//    get() =
//        this.asDynamic()[domxNodesAttributeName].unsafeCast<NodeExt?>() ?:
//        NodeExt(this)
//            .also { this.asDynamic()[domxNodesAttributeName] = it }
//
//
//fun Node.rxDisplayed(ks: KillSet, fn: () -> Boolean) {
//    val rxv = Rx(ks) { fn() }
//    rxDisplayed(ks, rxv)
//}
//
//fun Node.rxDisplayed(ks: KillSet, rxv: RxVal<Boolean>) {
//    val parent = parentNode!!
//    val parentNodeExt = parent.nodeExt
//    parentNodeExt.updateChildren()
//    val childRole = nodeExt.asChild()
//    require(childRole.parent.owner == parent)
//    rxv.forEach(ks) {  v ->
//        if (v) {
//            if (!isDisplayed) {
//                val previousDisplayed = childRole.previousChain().drop(1).find { it.isDisplayed }
//                val nextDisplayed = if (previousDisplayed == null) {
//                    parent.firstChild
//                } else {
//                    previousDisplayed.owner.nextSibling
//                }
//                parent.insertBefore(
//                    this@rxDisplayed,
//                    nextDisplayed
//                )
//
//            }
//        } else {
//            removeFromParent()
//        }
//    }
//}

fun HTMLButtonElement.rxEnabled(deps: HasKills, rx: RxVal<Boolean>) {
    rx.forEach(deps) { disabled = !it }
}
fun HTMLButtonElement.rxEnabled(deps: HasKills, fn: KillsApi.() -> Boolean) {
    Rx(deps.kills) { fn() }.also { rxEnabled(HasNoKill, it) }
}

operator fun HTMLElement.remAssign(text: String) { innerText = text }
operator fun Element.plusAssign(text: String) { appendText(text) }

val Node.div by elem<HTMLDivElement>()
val Node.styleTag by elem<HTMLStyleElement>("style")
val Node.nav by elem<HTMLElement>()
val Node.video by elem<HTMLVideoElement>()
val Node.li by elem<HTMLLIElement>()
val Node.ol by elem<HTMLOListElement>()
val Node.ul by elem<HTMLUListElement>()
val Node.img by elem<HTMLImageElement>()
val Node.strong by elem<HTMLElement>()
val Node.pre by elem<HTMLDivElement>()
val Node.source by elem<HTMLSourceElement>()
val Node.audio by elem<HTMLAudioElement>()
val Node.span by elem<HTMLSpanElement>()
val Node.a by elem<HTMLAnchorElement>()
val Node.p by elem<HTMLDivElement>()
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
