package commonui

import bootstrap.setupFullScreen
import buildenv.serviceWorkerFileName
import common.*
import domx.base64
import domx.source
import domx.video
import killable.KillableValue
import killable.Killables
import kotlinx.coroutines.*
import org.w3c.dom.events.Event
import org.w3c.notifications.Notification
import org.w3c.notifications.NotificationOptions
import rx.Rx
import rx.RxVal
import rx.Var
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Promise

class AppCtx(
    val title: String
) {

    val killables = Killables()

    val visible by lazy<RxVal<Boolean>> {
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

        killables += {
            document.removeEventListener(visibilitychange, callback)
        }

        rxv
    }

    val hasFocus by lazy<RxVal<Boolean>> {
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

        killables += {
            target.removeEventListener(focusEvent, focusCallback)
            target.removeEventListener(blurEvent, blurCallback)
        }

        rxv
    }

    val windowActive by lazy {
        Rx { visible() && hasFocus() }
    }

    val root by lazy {
        RootPanel(document.body!!).also { it.setHourglass() }
    }

    init {
        setupFullScreen()
    }

    fun hourglass() {
        root.setHourglass()
    }

    val isServiceWorkerSupported by lazy {
        window.navigator.serviceWorker as? Any != null
    }

    val isFcmSupported by lazy {
        isServiceWorkerSupported
    }

    val serviceWorker by lazy {
        window.navigator.serviceWorker.register(serviceWorkerFileName)
    }

    fun registerServiceWorker() {
        if (isServiceWorkerSupported) {
            serviceWorker
        }
    }

    private val keepAwakeVideo by lazy {
        document.video {
            loop = true
            source.base64("video/webm", "GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA")
            source.base64("video/mp4", "AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9")
        }
    }

    private var keepAwakeCounter = 0

    fun keepAwake() : () -> Unit {
        if (keepAwakeCounter == 0) {
            keepAwakeVideo.play()
        }
        keepAwakeCounter++
        return {
            keepAwakeCounter--
            if (keepAwakeCounter==0) {
                keepAwakeVideo.pause()
            }
        }
    }

    val networkType by lazy {
        val rxv = Var(NetworkType.unknown)
        val connection = window.navigator.connection
        fun update() {
            rxv.now = connection.type
        }
        val listener : (Event) -> Unit = {
            update()
        }
        connection.addEventListener("change", listener)
        killables += { connection.removeEventListener("change", listener) }
        GlobalScope.launch {
            update()
        }
        rxv
    }

    val networkEffectiveType by lazy {
        val connection = window.navigator.connection
        val rxv = Var(connection.effectiveType)
        fun update() {
            rxv.now = connection.effectiveType
        }
        val listener : (Event) -> Unit = {
            update()
        }
        connection.addEventListener("change", listener)
        killables += { connection.removeEventListener("change", listener) }
        GlobalScope.launch {
            update()
        }
        rxv
    }
}
