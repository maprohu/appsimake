@file:JsQualifier("firebase.messaging")
package firebase.messaging

import kotlin.js.Promise

// https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging
external interface Messaging {

    fun usePublicVapidKey(key: String)

    fun requestPermission() : Promise<Unit>

    fun getToken() : Promise<String>?

    fun onTokenRefresh(fn: () -> Unit) : () -> Unit

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#onMessage
    fun onMessage(fn: (dynamic) -> Unit) : () -> Unit

    // https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#setBackgroundMessageHandler
    fun setBackgroundMessageHandler(fn: (dynamic) -> Promise<Any?>)
}
