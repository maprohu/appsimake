package commonui.widget

import common.removeFromParent
import common.replaceWith
import commonshr.Assign
import commonshr.OptAssign
import commonshr.remAssign
import commonui.insertAfter
import domx.cls
import kotlinx.coroutines.channels.SendChannel
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node

typealias Inbox = SendChannel<Any>

interface HasInbox {
    val inbox: Inbox
//    val Node.child get() = Parent(widget, inbox)
//    val Slot.child get() = Parent(this, inbox)
//    val Slot.insert get() = child.insert
//    val Slot.factory get() = child.factory
}
open class InboxWrap(
    override val inbox: Inbox
): HasInbox

interface Msg<T>
class Envelope<T>(val marker: Msg<T>, val msg: T)
fun <T> Msg<T>.wrap(msg: T) = Envelope(this, msg)
operator fun <T> Msg<T>.invoke(msg: T) = wrap(msg)

private const val SlotsAttribute = "appsimakeSlots"
typealias Slot = OptAssign<Node>
val Node.slots : Slots
    get() = asDynamic()[SlotsAttribute].unsafeCast<Slots?>()
        ?: Slots(this).also { asDynamic()[SlotsAttribute] = it }


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

class Slots(
    private val node: Node
) {
    operator fun invoke(fn: Slots.() -> Unit) = apply(fn)

    private val list = mutableListOf<SlotItem>()

    private inner class SlotItem(
        prev: Ref
    ) {
        var current: Node? = null
        val setter: Slot = { n ->
            val curr = current
            when {
                curr == n -> {}
                curr == null && n != null -> {
                    node.insertAfter(n, prevNode())
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

        val prevNode: () -> Node? = when (prev) {
            Ref.First -> ({ null })
            is Ref.NodeRef -> ({ prev.node })
            is Ref.SlotRef -> ({ prev.item.current ?: prev.item.prevNode() })
        }

        fun ref(): Ref {
            val lc = node.lastChild
            return when (lc) {
                null, prevNode() -> Ref.SlotRef(this)
                else -> Ref.NodeRef(lc)
            }
        }
    }

    private fun ref(): Ref {
        return if (list.isNotEmpty()) {
            list.last().ref()
        } else {
            Ref.of(node.lastChild)
        }
    }

    private sealed class Ref {
        object First: Ref()
        class NodeRef(val node: Node): Ref()
        class SlotRef(val item: SlotItem): Ref()

        companion object {
            fun of(node: Node?) = node?.let(::NodeRef) ?: First
        }
    }

    val slot: Slot
        get() = SlotItem(ref()).also { list += it }.setter

}

val Node.widget get() = slots.slot
val Node.hole get() = slots.slot.hole

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

class Hole(
    val prepare: HTMLElement.() -> Unit,
    val slot: Slot
) {
    fun with(pr: HTMLElement.() -> Unit) = Hole(
        prepare = {
            prepare()
            pr()
        },
        slot = slot
    )
    operator fun remAssign(node: HTMLElement?) { slot %= node }
}
val Slot.insert: Factory
    get() {
        return Factory() with {
            this@insert %= this
        }
    }

val Hole.factory get() = Factory() with prepare
val Hole.insert: Factory
    get() {
        return factory with {
            this@insert.slot %= this
        }
    }

fun Slot.toHole(prepare: HTMLElement.() -> Unit = {}) = Hole(
    prepare,
    this
)
val Slot.hole get() = toHole()
