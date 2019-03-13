package commonui.widget

import common.listenAs
import commonshr.*
import commonui.HasKillsUix
import commonui.HasUix
import domx.on
import domx.onClick
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget



fun EventTarget.click(deps: HasKillsUix, action: Trigger) {
    onClick(deps) {
        it.preventDefault()
        deps.uix(action)
    }
}

fun BadgeAnchor.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)
fun Button.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)
fun DropdownMenuItem.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)
fun ListGroupButton.click(deps: HasKillsUix, action: Trigger) = node.click(deps, action)

