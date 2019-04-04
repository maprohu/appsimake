package common

import commonshr.Trigger
import commonshr.once
import killable.Killables
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventTarget

fun EventTarget.listen(type: String, fn: (Event) -> Unit): Trigger {
    this.addEventListener(type, fn)
    return {
        this.removeEventListener(type, fn)
    }.once()
}

fun <T: Event> EventTarget.listenAs(type: String, fn: (T) -> Unit): Trigger {
    return listen(type) { e ->
        fn(e.unsafeCast<T>())
    }
}

fun EventTarget.listenOnce(type: String, fn: (Event) -> Unit) {
    val ks = Killables()

    ks += listen(
        type
    ) {
        ks.kill()
        fn(it)
    }
}

