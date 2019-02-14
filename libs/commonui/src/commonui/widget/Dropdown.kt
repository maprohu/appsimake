package commonui.widget

import bootstrap.*
import commonshr.Trigger
import commonshr.invoke
import commonshr.plusAssign
import commonshr.remAssign
import domx.*
import fontawesome.*
import kotlin.browser.document

class DropdownMenuItem(): ScreenWrap {
    override val node = document.a {
        href = "#"
        cls {
            dropdownItem
            p1
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
class DropdownMenu(): ScreenWrap {
    override val node = document.div {
        cls.dropdownMenu
    }

    val item get() = DropdownMenuItem().append
    val divider get() = node.div { cls.dropdownDivider }

}
class Dropdown(): ScreenWrap {
    override val node = document.div {
        cls.dropdown
    }

    val button = hole.insert.button {
        node.dataToggleDropdown()
    }

    val menu = DropdownMenu().append
}
