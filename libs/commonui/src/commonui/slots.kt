package commonui

import common.removeFromParent
import common.replaceWith
import killable.Assign
import killable.remAssign
import org.w3c.dom.Node

private const val SlotsAttribute = "appsimakeSlots"
val Node.slots : Slots
    get() = asDynamic()[SlotsAttribute].unsafeCast<Slots?>()
        ?: Slots(this).also { asDynamic()[SlotsAttribute] = it }

typealias OptAssign<T> = Assign<T?>
typealias Slot = OptAssign<Node>

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

    fun slot(ps: PageSlot) {
        ps.node(slot)
    }

}

val Node.widget
    get() = slots.slot

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


