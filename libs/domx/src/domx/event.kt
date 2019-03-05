package domx

import commonshr.HasKills
import commonshr.Trigger
import commonshr.plusAssign
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget


fun <T: Event> EventTarget.on(deps: HasKills, event: String, action: (T) -> Unit ) {
    val listener = { e: Event ->
        action(e.unsafeCast<T>())
    }

    addEventListener(event, listener)

    deps.kills += {
        removeEventListener(event, listener)
    }
}
