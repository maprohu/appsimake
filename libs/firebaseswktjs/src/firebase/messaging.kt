@file:JsQualifier("firebase.messaging")
package firebase.messaging

import org.w3c.workers.ServiceWorkerRegistration
import kotlin.js.Promise

// https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging
external interface Messaging {

    fun usePublicVapidKey(key: String)

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#requestPermission
    fun requestPermission() : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#getToken
    fun getToken() : Promise<String>?

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#onTokenRefresh
    fun onTokenRefresh(
        next: () -> Unit,
        error: (dynamic) -> Unit = definedExternally,
        completed: () -> Unit = definedExternally
    ) : () -> Unit

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#onMessage
    fun onMessage(fn: (dynamic) -> Unit) : () -> Unit

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#setBackgroundMessageHandler
    fun setBackgroundMessageHandler(fn: (dynamic) -> Promise<Any?>)

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#useServiceWorker
    fun useServiceWorker(registration: ServiceWorkerRegistration)
}
