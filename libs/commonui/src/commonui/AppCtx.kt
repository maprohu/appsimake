package commonui

import bootstrap.setupFullScreen
import buildenv.serviceWorkerFileName
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
        val hidden = "hidden"
        val visibilitychange = "visibilitychange"

        fun isVisible() : Boolean {
            val hiddenValue = document.asDynamic()[hidden]
            return hiddenValue == null || hiddenValue == false
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

    val root = RootPanel(document.body!!)

    init {
        setupFullScreen()
        hourglass()
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

}
