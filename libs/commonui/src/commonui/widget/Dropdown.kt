package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.HasKillsUix
import commonui.HasUix
import domx.*
import fontawesome.*
import kotlin.browser.document

class DropdownMenuItem(): ScreenWrap() {
    override val node = document.button {
        cls {
            dropdownItem
            p1
        }
    }
    val icon = insert.icon {
        node.cls.m1
        fw
    }

    val fa = icon.fa
    val text = Text(node).apply {
        node.cls.m1
    }

}
class DropdownMenu(): ScreenWrap() {
    override val node = document.div {
        cls.dropdownMenu
    }

    val right by lazy {
        cls.dropdownMenuRight
    }

    val item get() = DropdownMenuItem().append
    val divider get() = node.div { cls.dropdownDivider }

    fun signOut(deps: HasKillsUix, action: Trigger) = item {
        text %= "Sign Out"
        fa.signOutAlt
        click(deps, action)
    }

    fun signIn(deps: HasKillsUix, action: Trigger) = item {
        text %= "Sign in"
        fa.signInAlt
        click(deps, action)
    }

}
class Dropdown(): ScreenWrap() {
    override val node = document.div {
        cls.dropdown
    }

    val button = hole.insert.button {
        node.dataToggleDropdown()
    }

    val bars by lazy {
        button {
            m1p2
            secondary
            fa.bars
        }
    }

    val right by lazy {
        menu.right
    }

    val menu = DropdownMenu().append


}
