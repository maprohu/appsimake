package commonui

import bootstrap.*
import commonshr.InvokeApply
import commonshr.invoke
import domx.*
import fontawesome.chevronLeft
import fontawesome.fa
import fontawesome.fw
import killable.remAssign
import org.w3c.dom.Element
import org.w3c.dom.Node
import kotlin.browser.document

class Factory(val parent: Parent, val after: ScreenWrap.() -> Unit = {}) {
    private val <T: ScreenWrap> T.applied get() = apply(after)
    private val <T: Element> T.applied get() = apply { ScreenNodeWrap(parent, this).applied }

    val screen get() = Screen(parent).applied
    val dropdown get() = Dropdown(parent).applied
    val topbar get() = Topbar(parent).applied
    val button get() = Button(parent).applied
    val div get() = document.div.applied
    fun button(msg: () -> Any, fn: Button.() -> Unit) = Button(parent, msg).apply(fn).applied
    fun button(msg: Any, fn: Button.() -> Unit) = button({msg}, fn)
}

fun ui(
    parent: Slot,
    inbox: HasInbox,
    fn: Factory.() -> ScreenWrap
) = fn(Factory(Parent(parent, inbox.inbox)))

interface HasInbox {
    val inbox: Inbox
    val Node.child get() = Parent(widget, inbox)
}

abstract class ScreenWrap(parent: Slot, inbox: Inbox): Parent(parent, inbox), InvokeApply, HasElement {
    constructor(parent: Parent): this(parent.parent, parent.inbox)
    constructor(parent: Slot, inbox: HasInbox): this(parent, inbox.inbox)

    val child get() = Parent(slot, inbox)
    fun child(sl: Slot) = Parent(sl, inbox)
    val Slot.factory get() = child(this).factory
}
fun <T: ScreenWrap> T.visible() = apply { parent %= node }

class ScreenNodeWrap(parent: Parent, override val node: Element) : ScreenWrap(parent)

open class Parent(val parent: Slot, inbox: Inbox): InboxWrap(inbox) {
    val factory get() = Factory(this) { visible() }
}

class Screen(sp: Parent): ScreenWrap(sp)  {
    override val node = document.column {
        cls.flexGrow1
    }

    private val slots = object {
        val top = slot
        val main = slot
        val bottom = slot
    }

    val main = slots.main.factory

    val topbar by lazy { slots.top.factory.topbar }

}

class Topbar(inbox: Parent): ScreenWrap(inbox) {
    override val node = document.row {
        cls {
            navTabs
            flexFixedSize()
            bgLight
        }
    }

    val alignItemsCenter by lazy {
        node.cls {
            alignItemsCenter
        }
    }


    private val slots = object {
        val left = slot
        val middle = slot
        val right = slot
    }

    val left = child(slots.left).factory

    val middle = document.div {
        cls.flexGrow1
    }.setTo(slots.middle)

    val right = child(slots.right)

    fun backTitle(msg: Any, label: String) {
        left.button(msg) {
            m1p2
            secondary
            fa.chevronLeft
        }
        middle {
            h5 {
                cls.m1
                innerText = label
            }
        }
    }
}

class Text(parent: Node): InvokeApply {
    val node = parent.span
    val cls = node.cls
    operator fun remAssign(v: String) { node %= v }
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
    val fa = icon.fa
    val text = Text(node).apply {
        node.cls.m1
    }
}
class DropdownMenu(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls.dropdownMenu
    }

    fun item(msg: Any, fn: DropdownMenuItem.() -> Unit = {}) = item { msg }.apply(fn)
    fun item(msg: () -> Any) = DropdownMenuItem(child, msg).visible()
    val divider get() = node.div { cls.dropdownDivider }
}
class Dropdown(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls.dropdown
    }

    val button = child.factory.button.visible().apply {
        node.dataToggleDropdown()
    }

    val menu = DropdownMenu(child).visible()
}
class Button(sp: Parent, msg: (() -> Any)? = null): ScreenWrap(sp) {
    override val node = document.button {
        cls {
            btn
        }
        msg?.let {
            clickEvent {
                inbox += msg()
            }
        }
    }

    private val slots = object {
        val icon = slot
        val text = slot
    }

    val p2 by lazy {
        cls.p2
    }
    val m1 by lazy {
        cls.m1
    }
    val m1p2 by lazy {
        m1
        p2
    }
    val primary by lazy {
        cls.btnPrimary
    }
    val secondary by lazy {
        cls.btnSecondary
    }

    val icon by lazy {
        document.span.setTo(slots.icon)
    }

    val fa by lazy {
        icon.cls.fa {
            fw
        }
    }

    val text by lazy {
        document.span.setTo(slots.text)
    }

}

