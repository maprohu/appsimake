package commonui

import bootstrap.setupFullScreen
import buildenv.serviceWorkerFileName
import common.*
import domx.base64
import domx.source
import domx.video
import killable.KillableValue
import killable.Killables
import killable.NoKill
import kotlinx.coroutines.*
import org.w3c.dom.events.Event
import org.w3c.notifications.Notification
import org.w3c.notifications.NotificationOptions
import org.w3c.workers.ServiceWorkerRegistration
import rx.Rx
import rx.RxVal
import rx.Var
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Promise

object APP {

    val isServiceWorkerSupported by lazy {
        window.navigator.serviceWorker as? Any != null
    }

    val isFcmSupported by lazy {
        isServiceWorkerSupported
    }

    private val registerServiceWorkerPromise by lazy {
        window.navigator.serviceWorker.register(serviceWorkerFileName)
    }

    fun startRegisteringServiceWorker() {
        registerServiceWorkerPromise
    }

    suspend fun registerServiceWorker(): ServiceWorkerRegistration? {
        return if (isServiceWorkerSupported) {
            registerServiceWorkerPromise.await()
        } else {
            null
        }
    }
}

class AppCtx(
    val title: String
) {

    val killables = Killables()



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
