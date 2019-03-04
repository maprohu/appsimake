package commonui.widget

import commonshr.Action
import commonshr.Exec
import domx.clickEvent
import domx.rxEnabled
import killable.HasKillSet
import killable.KillSet
import org.w3c.dom.HTMLAnchorElement
import org.w3c.dom.events.EventTarget

interface HasUIX {
    val uix: Exec

    fun EventTarget.click(action: Action) {
        clickEvent {
            uix(action)
        }
    }

    fun DropdownMenuItem.click(action: Action) = node.click(action)
    fun Button.click(action: Action) = node.click(action)
    fun ListGroupButton.click(action: Action) = node.click(action)


}

interface HasKillSetAndUIX: HasUIX, HasKillSet

operator fun HasUIX.plus(ks: HasKillSet) = object : HasKillSetAndUIX {
    override val uix = this@plus.uix
    override val kills = ks.kills
}
