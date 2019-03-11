package domx

import commonshr.HasKills
import commonshr.Trigger
import commonshr.plusAssign
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget
import org.w3c.dom.events.InputEvent
import org.w3c.dom.events.MouseEvent


fun <T: Event> EventTarget.on(deps: HasKills, event: String, action: (T) -> Unit ) {
    val listener = { e: Event ->
        action(e.unsafeCast<T>())
    }

    addEventListener(event, listener)

    deps.kills += {
        removeEventListener(event, listener)
    }
}

fun EventTarget.onClick(deps: HasKills, action: (MouseEvent) -> Unit ) = on(deps, "click", action)
fun EventTarget.onInput(deps: HasKills, action: (InputEvent) -> Unit ) = on(deps, "input", action)
fun EventTarget.onChange(deps: HasKills, action: (Event) -> Unit ) = on(deps, "change", action)
