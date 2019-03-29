package commonui.widget

import common.insertAfter
import common.removeFromParent
import common.replaceWith
import commonshr.*
import domx.cls
//import killable.KillSet
//import killable.wrap
import kotlinx.coroutines.channels.SendChannel
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import rx.Rx
import rx.RxIface
import rx.rxClass


//interface Msg<T>
//class Envelope<T>(val marker: Msg<T>, val msg: T)
//fun <T> Msg<T>.wrap(msg: T) = Envelope(this, msg)
//operator fun <T> Msg<T>.invoke(msg: T) = wrap(msg)

private const val SlotsAttribute = "appsimakeSlots"
typealias Slot = OptAssign<Node>
val Node.slotholes : SlotHoles
    get() = asDynamic()[SlotsAttribute].unsafeCast<Slots?>()
        ?: Slots(
            SlotsOwner.NodeRef(this),
            PrevRef.of(lastChild)
        ).also { asDynamic()[SlotsAttribute] = it }

//fun Slot.rx(deps: HasKills, fn: () -> Node?) {
//    Rx(deps.kills) { fn() }.forEach(deps.kills) { this@rx %= it }
//}

val Node.append : Slot
    get() {
        var n: Node? = null

        return {
            if (it == null) {
                n?.removeFromParent()
                n = null
            } else {
                this.appendChild(it)
                n = it
            }
        }
    }

internal sealed class SlotsOwner(val node: Node) {
    abstract fun lastRef(slots: Slots): PrevRef
    class NodeRef(node: Node): SlotsOwner(node) {
        override fun lastRef(slots: Slots): PrevRef {
            val lc = node.lastChild
            return when (lc) {
                null, slots.lastNode -> slots.list.lastOrNull()
                else -> null
            } ?: PrevRef.of(lc)
        }
    }

    class SlotsRef(val slots: Slots): SlotsOwner(slots.owner.node) {
        override fun lastRef(slots: Slots): PrevRef = slots.list.lastOrNull() ?: slots.prev
    }
}

interface SlotHoles: InvokeApply {
    val slot: Slot
    val slots: SlotHoles
}

//val SlotHoles.insert get() = slot.insert

internal abstract class PrevRef {
    abstract val lastNode: Node?

    object First: PrevRef() {
        override val lastNode = null
    }
    class NodeRef(override val lastNode: Node): PrevRef()

    companion object {
        fun of(node: Node?) = node?.let(::NodeRef) ?: First
    }
}

internal abstract class SlotsElement: PrevRef() {
    abstract val prev: PrevRef
    val prevNode get() = prev.lastNode
}
internal class Slots(
    internal val owner: SlotsOwner,
    override val prev: PrevRef
): SlotsElement(), SlotHoles {

    val lastRef get() = owner.lastRef(this)

    internal val list = mutableListOf<SlotsElement>()

    override val lastNode: Node?
        get() = (list.lastOrNull() ?: prev).lastNode

    internal class SlotItem(
        val slots: Slots,
        override val prev: PrevRef
    ): SlotsElement() {
        var current: Node? = null
        val setter: Slot = { n ->
            val curr = current
            when {
                curr == n -> {}
                curr == null && n != null -> {
                    slots.owner.node.insertAfter(n, prevNode)
                }
                curr != null && n == null -> {
                    curr.removeFromParent()
                }
                curr != null && n != null -> {
                    curr.replaceWith(n)
                }
                else -> {}
            }
            current = n
        }

        override val lastNode: Node? get() = current ?: prev.lastNode

    }

    override val slot: Slot
        get() = SlotItem(this, lastRef).also { list += it }.setter

    override val slots: SlotHoles
        get() = Slots(SlotsOwner.SlotsRef(this), lastRef).also { list += it }

}

val Node.widget get() = slotholes.slot
val Node.hole get() = slotholes.slot.hole
val Node.slots get() = slotholes.slots

val Node.insert: Factory
    get() {
        return Factory() with {
            this?.let { this@insert.appendChild(this) }
        }
    }

fun Node.widget(ps: Widget) { ps.slot %= widget }

class Widget internal constructor(
    val node: Slot,
    val slot: Assign<Slot>
) {
    operator fun remAssign(n: Node?) { node %= n }
    operator fun remAssign(n: HasNode) { node %= n.node }
}

fun widget(initial: Node? = null): Widget {
    var slot : Slot? = null
    var current: Node? = initial

    return Widget(
        node = { n ->
            val s = slot
            if (s == null) {
                current = n
            } else {
                s(n)
            }
        },
        slot = { s ->
            require(slot == null) { "Widget already initialized!" }
            slot = s
            s(current)
            current = null
        }
    )

}

interface HasNode {
    val node: Node
    val slot get() = node.widget
    val hole get() = node.hole
    val insert get() = slot.insert
}
open class NodeWrap(
    override val node: Node
): HasNode

interface HasElement: HasNode {
    override val node: Element
    val cls get() = node.cls
}

interface HasHTMLElement: HasElement {
    override val node: HTMLElement
}
fun <T: HasNode> T.appendTo(parent: Node) = apply {
    parent.appendChild(node)
}
fun <T: HasNode> T.setTo(parent: Slot) = apply {
    parent %= node
}
fun <T: Node> T.setTo(parent: Slot) = apply {
    parent %= this
}

class HoleT<T>(
    val prepare: T.() -> Unit,
    val assign: OptAssign<T>
) {
    fun with(pr: T.() -> Unit) = HoleT<T>(
        prepare = {
            prepare()
            pr()
        },
        assign = assign
    )
    operator fun remAssign(node: T?) { assign %= node }
    val prepareOrNull: T?.() -> Unit = {
        this?.apply(prepare)
    }
}
typealias Hole = HoleT<HTMLElement>
//class Hole(
//    val prepare: HTMLElement.() -> Unit,
//    val slot: Slot
//) {
//    fun with(pr: HTMLElement.() -> Unit) = Hole(
//        prepare = {
//            prepare()
//            pr()
//        },
//        slot = slot
//    )
//    operator fun remAssign(node: HTMLElement?) { slot %= node }
//    val prepareOrNull: HTMLElement?.() -> Unit = {
//        this?.apply(prepare)
//    }
//}
val Slot.insert: Factory
    get() {
        return Factory() with {
            this@insert %= this
        } withWrap {
            target.now = this@insert
        }
    }

val Hole.factory get() = Factory() withElement prepare
val Hole.insert: Factory
    get() {
        return factory with {
            this@insert.assign %= this
        }
    }

fun Slot.toHole(prepare: HTMLElement.() -> Unit = {}) = Hole(
    prepare,
    this
)
val Slot.hole get() = toHole()


fun Slot.visibility(deps: HasKills, fn: KillsApi.() -> Boolean) = Factory() with {
    val element = this
    Rx(deps.kills) { fn() }.forEach(deps.kills) { v ->
        this@visibility %= if (v) element else null
    }
}

fun HasElement.rxClass(
    deps: HasKills,
    style: String,
    fn: KillsApi.() -> Boolean
) = node.rxClass(deps, style, fn)

fun HasElement.rxClass(
    deps: HasKills,
    style: String,
    fn: RxIface<Boolean>
) = node.rxClass(deps, style, fn)
