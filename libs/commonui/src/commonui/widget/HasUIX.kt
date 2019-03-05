package commonui.widget

import commonshr.Action
import commonshr.Exec
import commonshr.HasKills
import domx.clickEvent
import commonshr.KillsApi
import commonui.HasUix
import org.w3c.dom.events.EventTarget



fun EventTarget.click(deps: HasUix, action: Action) {
    clickEvent {
        deps.uix(action)
    }
}

fun Button.click(deps: HasUix, action: Action) = node.click(deps, action)
fun DropdownMenuItem.click(deps: HasUix, action: Action) = node.click(deps, action)
fun ListGroupButton.click(deps: HasUix, action: Action) = node.click(deps, action)

