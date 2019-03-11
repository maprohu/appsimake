package commonui.widget

import common.listenAs
import commonshr.Action
import commonshr.Exec
import commonshr.HasKills
import commonshr.KillsApi
import commonui.HasKillsUix
import commonui.HasUix
import domx.on
import domx.onClick
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget



fun EventTarget.click(deps: HasKillsUix, action: Action) {
    onClick(deps) {
        deps.uix(action)
    }
}

fun BadgeAnchor.click(deps: HasKillsUix, action: Action) = node.click(deps, action)
fun Button.click(deps: HasKillsUix, action: Action) = node.click(deps, action)
fun DropdownMenuItem.click(deps: HasKillsUix, action: Action) = node.click(deps, action)
fun ListGroupButton.click(deps: HasKillsUix, action: Action) = node.click(deps, action)

