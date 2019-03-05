package commonui

import common.named
import commonshr.plusAssign
import domx.base64
import domx.source
import domx.video
import commonshr.KillsApi
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

private val keepAwakeVideo by lazy {
    document.video {
        loop = true
        source.base64("video/webm", "GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA")
        source.base64("video/mp4", "AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9")
    }
}

private var keepAwakeCounter = 0

fun KillsApi.keepScreenAwake() {
    if (keepAwakeCounter == 0) {
        keepAwakeVideo.play()
    }
    keepAwakeCounter++
    kills += {
        keepAwakeCounter--
        if (keepAwakeCounter==0) {
            keepAwakeVideo.pause()
        }
    }
}
