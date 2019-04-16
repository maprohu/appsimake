package commonui

import buildenv.serviceWorkerFileName
import commonshr.MessageUrlParameter
import commonui.widget.Body
import commonui.widget.BodyNode
import commonui.widget.Loading
import domx.on
import killable.HasNoKill
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.MessageEvent
import org.w3c.dom.url.URLSearchParams
import org.w3c.workers.ServiceWorkerRegistration
import kotlin.browser.window
import kotlin.js.Promise



object APP {

    val serviceWorkerMessages: ReceiveChannel<MessageEvent> by lazy {
        val ch = Channel<MessageEvent>(Channel.UNLIMITED)

        if (isServiceWorkerSupported) {
            window.navigator.serviceWorker.on<MessageEvent>(HasNoKill, "message") { e ->
                ch.offer(e)
            }
        }

        ch
    }

    private val registerServiceWorkerPromise by lazy {
        serviceWorkerMessages

        if (isServiceWorkerSupported) {
            globalStatus %= "Registering service worker..."
            window.navigator.serviceWorker.register(serviceWorkerFileName)
        } else {
            globalStatus %= "Service worker not supported."
            null
        }
    }


    fun startRegisteringServiceWorker(): Promise<ServiceWorkerRegistration>? {
        return registerServiceWorkerPromise
    }

    suspend fun registerServiceWorker(): ServiceWorkerRegistration? {
        return startRegisteringServiceWorker()?.await()
    }


}

inline fun loadApp(fn: Body.() -> BodyNode) = runReport {
    val loading = Loading()
    APP.startRegisteringServiceWorker()
    Body(loading.target).apply {
        hole %= fn()
    }
}