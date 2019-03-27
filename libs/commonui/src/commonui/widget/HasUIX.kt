package commonui.widget

import commonshr.*
import commonui.HasKillsUix
import domx.onClick
import org.w3c.dom.events.EventTarget
import kotlin.browser.window


fun EventTarget.click(deps: HasKillsUix, action: Trigger) {
    onClick(deps) {
        it.preventDefault()
        window.setTimeout(
            { deps.uix(action) },
            0
        )
    }
}

fun BadgeAnchor.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)
fun Button.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)
fun DropdownMenuItem.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)
fun ListGroupButton.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)

