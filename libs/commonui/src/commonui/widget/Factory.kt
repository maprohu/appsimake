package commonui.widget

import commonshr.AddRemove
import commonshr.InvokeApply
import commonshr.remAssign
import domx.*
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document

data class FactoryAfter(
    val hasVisibility: HasVisibility.() -> Unit = {},
    val screenWrap: ScreenWrap.() -> Unit = {}
) {
    fun visible() = copy(
        hasVisibility = {
            hasVisibility()
            show()
        }
    )
    fun element(fn: HTMLElement.() -> Unit) = copy(
        screenWrap = {
            screenWrap()
            node.fn()
        }
    )

    val screenFn: ScreenWrap.() -> Unit = {
        screenWrap()
        hasVisibility()
    }

}

class Factory(val parent: Parent, private val after: FactoryAfter = FactoryAfter()) {
    infix fun with(fn: FactoryAfter.() -> FactoryAfter) = Factory(
        parent,
        fn(after)
    )
    val visible get() = with { visible() }
    fun withElement(fn: HTMLElement.() -> Unit) = with { element(fn) }

    val <T: HTMLElement> T.wrapped get() = ScreenNodeWrap(parent, this)

    private val <T: HasVisibility> T.applied get() = apply(after.hasVisibility)
    private val <T: ScreenWrap> T.applied get() = apply(after.screenFn)
    private val <T: HTMLElement> T.applied get() = apply { wrapped.applied }

    inner class Wraps {
        val div get() = document.div.applied
        fun div(fn: HTMLDivElement.() -> Unit) = document.div.apply(fn).wrapped.applied
    }
    val wraps = Wraps()

    val screen get() = Screen(parent).applied
    val dropdown get() = Dropdown(parent).applied
    val topbar get() = Topbar(parent).applied
    val button get() = Button(parent).applied
    fun button(msg: () -> Any, fn: Button.() -> Unit) = Button(parent, msg).apply(fn).applied
    fun button(msg: Any, fn: Button.() -> Unit) = button({msg}, fn)
    val hourglass get() = Hourglass(parent).applied
    val stack get() = Stack(parent).applied
    val empty get() = Empty(parent.parent).applied
    val toasts get() = Toasts(parent).applied

}

interface HasVisibility {
    fun show()
    fun hide()
}
fun <T: HasVisibility> T.visible() = apply { show() }
fun <T: HasVisibility> T.hidden() = apply { hide() }

class Empty(val parent: Slot): HasVisibility {
    override fun show() {
        parent %= null
    }

    override fun hide() {
        parent %= null
    }
}

fun ui(vararg items: HasVisibility) = object : HasVisibility {
    override fun show() {
        items.forEach { it.show() }
    }

    override fun hide() {
        items.forEach { it.hide() }
    }
}


fun ui(fn: (AddRemove<HasVisibility>) -> Unit): HasVisibility {
    val items = mutableListOf<HasVisibility>()

    fn {
        items += it
        { items -= it }
    }

    return ui(*items.toTypedArray())
}

fun ui(
    parent: Slot,
    inbox: HasInbox,
    fn: Factory.() -> HasVisibility
): HasVisibility = fn(Factory(Parent(parent, inbox.inbox)))


abstract class ScreenWrap(parent: Slot, inbox: Inbox): Parent(parent, inbox), InvokeApply, HasHTMLElement, HasVisibility {
    constructor(parent: Parent): this(parent.parent, parent.inbox)
    constructor(parent: Slot, inbox: HasInbox): this(parent, inbox.inbox)

    val child get() = Parent(slot, inbox)

    override fun show() {
        parent %= node
    }

    override fun hide() {
        parent %= null
    }
}
fun <T: ScreenWrap> T.visible() = apply { parent %= node }
fun <T: ScreenWrap> T.hidden() = apply { parent %= null }

class ScreenNodeWrap<T: HTMLElement>(parent: Parent, override val node: T) : ScreenWrap(parent)

open class Parent(val parent: Slot, inbox: Inbox): InboxWrap(inbox) {
    val factory get() = Factory(this)
    val insert get() = factory.visible
}

