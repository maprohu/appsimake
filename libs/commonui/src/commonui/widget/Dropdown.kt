package commonui.widget

import bootstrap.*
import commonshr.invoke
import domx.*
import fontawesome.*
import kotlin.browser.document

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

    val button = child.insert.button.visible().apply {
        node.dataToggleDropdown()
    }

    val menu = DropdownMenu(child).visible()
}
