package commonui.widget

import commonshr.*
import domx.*
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import rx.Rx
import rx.Var
import rx.rx
import kotlin.browser.document

//data class FactoryAfter(
////    val hasVisibility: HasVisibility.() -> Unit = {},
//    val element: HTMLElement.() -> Unit = {}
//) {
////    fun visible() = copy(
////        hasVisibility = {
////            hasVisibility()
////            show()
////        }
////    )
//    fun with(fn: HTMLElement.() -> Unit) = copy(
//        element = {
//            element()
//            fn()
//        }
//    )
//
////    val screenFn: ScreenWrap.() -> Unit = {
////        screenWrap()
////        hasVisibility()
////    }
//
//}

data class FactoryAfter(
    val element: HTMLElement?.() -> Unit = {},
    val wrap: ScreenWrap.() -> Unit = {}
) {
    fun withElement(fn: HTMLElement?.() -> Unit) = copy(
        element = {
            element()
            fn()
        }
    )
    fun withWrap(fn: ScreenWrap.() -> Unit) = copy(
        wrap = {
            wrap()
            fn()
        }
    )
}

val factory  = Factory()
class Factory(
    private val after: FactoryAfter = FactoryAfter()
): InvokeApply {
    infix fun with(fn: HTMLElement?.() -> Unit) = Factory(
        after.withElement(fn)
    )
    infix fun withElement(fn: HTMLElement.() -> Unit) = Factory(
        after.withElement {
            after.element(this)
            if (this != null) fn()
        }
    )
    infix fun withWrap(fn: ScreenWrap.() -> Unit) = Factory(
        after.withWrap(fn)
    )

    val <T: HTMLElement> T.wrapped get() = HTMLElementWrap(this)

    val <T: ScreenWrap> T.applied get() = apply {
        node.apply(after.element)
        apply(after.wrap)
    }

    val <T: HTMLElement> T.applied get() = apply { wrapped.applied }

    inner class Wraps {
        val div get() = document.div.applied
        fun div(fn: HTMLDivElement.() -> Unit) = document.div.apply(fn).wrapped.applied
        val span get() = document.span.wrapped.applied
    }
    val wraps = Wraps()

    val screen get() = Screen().applied
    val icon get() = Icon().applied
    val dropdown get() = Dropdown().applied
    val dropdownMenu get() = DropdownMenu().applied
    val topbar get() = Topbar().applied
    val button get() = Button().applied
    val buttonGroup get() = ButtonGroup().applied
    val scrollPane get() = ScrollPane().applied
    val grid get() = Grid().applied
    val hourglass get() = Hourglass().applied
    val stack get() = Stack().applied
    val toasts get() = Toasts().applied
    val badge get() = Badge().applied
    val badgeAnchor get() = BadgeAnchor().applied
    val status get() = Status().applied
    val input get() = Input().applied
    val textArea get() = TextArea().applied
    val select get() = Select().applied
    val formGroup get() = FormGroup().applied
    val form get() = Form().applied
    val inputGroup get() = InputGroup().applied
    val listGroup get() = ListGroup().applied
    val listGroupButton get() = ListGroupButton().applied
    val nestedListButton get() = NestedListButton().applied


}

//interface Widgets {
//    val <T: ScreenWrap> T.applied: T
//
//    val screen get() = Screen().applied
//    val dropdown get() = Dropdown().applied
//    val dropdownMenu get() = DropdownMenu().applied
//    val topbar get() = Topbar().applied
//    val button get() = Button().applied
//    val buttonGroup get() = ButtonGroup().applied
//    val scrollPane get() = ScrollPane().applied
//    val grid get() = Grid().applied
//    val hourglass get() = Hourglass().applied
//    val stack get() = Stack().applied
//    val toasts get() = Toasts().applied
//    val badge get() = Badge().applied
//    val status get() = Status().applied
//    val input get() = Input().applied
//    val textArea get() = TextArea().applied
//    val select get() = Select().applied
//    val formGroup get() = FormGroup().applied
//    val form get() = Form().applied
//    val inputGroup get() = InputGroup().applied
//    val listGroup get() = ListGroup().applied
//    val listGroupButton get() = ListGroupButton().applied
//    val nestedListButton get() = NestedListButton().applied
//
//}


//interface HasVisibility {
//    fun show()
//    fun hide()
//}
//fun <T: HasVisibility> T.visible() = apply { show() }
//fun <T: HasVisibility> T.hidden() = apply { hide() }

//class Empty(val parent: Slot): HasHTMLElement {
//    override fun show() {
//        parent %= null
//    }
//
//    override fun hide() {
//        parent %= null
//    }
//}

//fun ui(vararg items: HasVisibility) = object : HasVisibility {
//    override fun show() {
//        items.forEach { it.show() }
//    }
//
//    override fun hide() {
//        items.forEach { it.hide() }
//    }
//}
//
//
//fun ui(fn: (AddRemove<HasVisibility>) -> Unit): HasVisibility {
//    val items = mutableListOf<HasVisibility>()
//
//    fn {
//        items += it
//        { items -= it }
//    }
//
//    return ui(*items.toTypedArray())
//}

//fun ui(
//    parent: Slot,
//    inbox: HasInbox,
//    fn: Factory.() -> HasVisibility
//): HasVisibility = fn(Factory(Parent(parent, inbox.inbox)))


//abstract class ScreenNodeWrap(parent: Slot, inbox: Inbox): Parent(parent, inbox), InvokeApply, HasNode, HasVisibility {
//    constructor(parent: Parent): this(parent.parent, parent.inbox)
//    override fun show() {
//        parent %= node
//    }
//
//    override fun hide() {
//        parent %= null
//    }
//}

//abstract class ScreenWrap(parent: Slot, inbox: Inbox): ScreenNodeWrap(parent, inbox), HasHTMLElement {
//    constructor(parent: Parent): this(parent.parent, parent.inbox)
//    constructor(parent: Slot, inbox: HasInbox): this(parent, inbox.inbox)
//
//    val child get() = Parent(slot, inbox)
//
//}
//fun <T: ScreenWrap> T.visible() = apply { parent %= node }
//fun <T: ScreenWrap> T.hidden() = apply { parent %= null }

class HTMLElementWrap<T: HTMLElement>(override val node: T) : ScreenWrap()

//open class Parent(val parent: Slot, inbox: Inbox): InboxWrap(inbox) {
//    val factory get() = Factory(this)
//    val insert get() = factory.visible
//}

class SlotVar(
    var node: Node? = null
) {
    val slot: Slot = { node = it }
}

//fun HasInbox.createNode(fn: Factory.() -> ScreenWrap): Node? {
//    val sv = SlotVar()
//
//    sv.slot.insert.fn().visible()
//
//    return sv.node
//}

abstract class ScreenWrap: HasHTMLElement, InvokeApply {
    val target = Var<Slot?>(null)

    val <T: HasHTMLElement> T.append: T get() = apply { this@ScreenWrap.node.widget %= this@apply.node }
}

fun ScreenWrap.visible(deps: HasKills, fn: KillsApi.() -> Boolean) {
    rx(deps) {
        target()?.let { slot ->
            slot.rx(this) { if (fn()) node else null }
        }
    }
}

fun <T: ScreenWrap> T.setTo(slot: Slot): T = apply {
    slot %= node
    target %= slot
}
