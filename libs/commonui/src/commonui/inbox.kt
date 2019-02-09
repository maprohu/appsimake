package commonui

import bootstrap.*
import domx.*
import fontawesome.fa
import fontawesome.fw
import killable.remAssign
import org.w3c.dom.Node
import kotlin.browser.document

interface InvokeApply
operator fun <T: InvokeApply> T.invoke(fn: T.() -> Unit) = apply(fn)

interface HasInbox {
    val inbox: Inbox

    val Node.screen get() = Screen(child).visible()

    val Node.child get() = Parent(widget, inbox)
}

abstract class ScreenWrap(val parent: Slot, inbox: Inbox): InboxWrap(inbox), InvokeApply, HasNode {
    constructor(parent: Parent): this(parent.parent, parent.inbox)
    constructor(parent: Slot, inbox: HasInbox): this(parent, inbox.inbox)


    val child get() = Parent(slot, inbox)
    fun child(sl: Slot) = Parent(sl, inbox)

    val Node.dropdown get() = Dropdown(child).visible()
}
fun <T: ScreenWrap> T.visible() = apply { parent %= node }

class Parent(val parent: Slot, val inbox: Inbox)

class Screen(sp: Parent): ScreenWrap(sp)  {
    override val node = document.column {
        cls.flexGrow1
    }

    private val slots = object {
        val top = slot
        val main = slot
        val bottom = slot
    }

    val main = slots.main

    val top by lazy { Topbar(child(slots.top)).visible() }
}

class Topbar(inbox: Parent): ScreenWrap(inbox) {
    override val node = document.row {
        cls {
            navTabs
            flexFixedSize()
            bgLight
        }
    }

    private val slots = object {
        val left = slot
        val middle = slot
        val right = slot
    }

    val left = slots.left

    val middle = document.div {
        cls.flexGrow1
    }.setTo(slots.middle)

    val right = slots.right
}

class Text(parent: Node): InvokeApply {
    val node = parent.span
    val cls = node.cls
}
class Icon(parent: Node): InvokeApply {
    val node = parent.span
    val fa = node.cls.fa
}
class DropdownMenuItem(sp: Parent, msg: () -> Any): ScreenWrap(sp) {
    override val node = document.a {
        href = "#"
        cls {
            dropdownItem
            p1
        }
        clickEvent {
            inbox += msg()
        }
    }
    val icon = Icon(node).apply {
        node.cls.m1
        fa.fw
    }
    val text = Text(node).apply {
        node.cls.m1
    }
}
class DropdownMenu(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls.dropdownMenu
    }

    fun item(msg: Any) = item { msg }
    fun item(msg: () -> Any) = DropdownMenuItem(child, msg).visible()
    val divider get() = node.div { cls.dropdownDivider }
}
class Dropdown(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls.dropdown
    }

    val button = node.button {
        cls {
            btn
        }
        dataToggleDropdown()
    }

    val menu = DropdownMenu(child).visible()
}

