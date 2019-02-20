package commonui

import common.named
import killable.NoKill
import org.w3c.dom.events.Event
import rx.Rx
import rx.RxIface
import rx.Var
import kotlin.browser.document
import kotlin.browser.window

val browserVisible: RxIface<Boolean> by lazy {
    val hidden by named { it }
    val visible by named { it }
    val visibilitychange by named { it }
    val visibilityState by named { it }

    fun isVisible() : Boolean {
        val dd = document.asDynamic()
        return dd[hidden] == false || dd[visibilityState] == visible
    }

    val rxv = Var(isVisible())

    val callback : (Event) -> Unit = { rxv.now = isVisible() }

    document.addEventListener(
        visibilitychange,
        callback
    )

//    killables += {
//        document.removeEventListener(visibilitychange, callback)
//    }

    rxv
}

val windowHasFocus: RxIface<Boolean> by lazy {
    val rxv = Var(document.hasFocus())

    val target = window
    val focusEvent = "focus"
    val blurEvent = "blur"
    val focusCallback : (Event) -> Unit = { rxv.now = true }
    val blurCallback : (Event) -> Unit = { rxv.now = false }

    target.addEventListener(
        focusEvent,
        focusCallback
    )
    target.addEventListener(
        blurEvent,
        blurCallback
    )

//    killables += {
//        target.removeEventListener(focusEvent, focusCallback)
//        target.removeEventListener(blurEvent, blurCallback)
//    }

    rxv
}

val windowActive by lazy {
    Rx(NoKill) { browserVisible() && windowHasFocus() }
}
