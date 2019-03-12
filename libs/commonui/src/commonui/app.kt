package commonui

import buildenv.serviceWorkerFileName
import commonui.widget.Body
import commonui.widget.BodyNode
import commonui.widget.Loading
import kotlinx.coroutines.*
import org.w3c.workers.ServiceWorkerRegistration
import kotlin.browser.window
import kotlin.js.Promise



object APP {

    private val registerServiceWorkerPromise by lazy {
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