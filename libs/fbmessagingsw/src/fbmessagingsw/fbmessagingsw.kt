package fbmessagingsw

import common.obj
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import org.w3c.notifications.NotificationOptions
import org.w3c.workers.*
import kotlin.js.Promise

val sw = js("self").unsafeCast<ServiceWorkerGlobalScope>()


val app by lazy {
    firebase.initializeApp(
        obj {
            messagingSenderId = "850641545175"
        }
    )
}

val messaging by lazy {
    app.messaging()
}

val appName by lazy {
    val scope = sw.registration.scope

    scope.substringBeforeLast('/').substringAfterLast('/')
}

var messageTitle : (dynamic) -> String = {
    "$appName: message arrived"
}

var messageHandler : (dynamic) -> Promise<Any?> = { msg ->
    sw.registration.showNotification(
        messageTitle(msg),
        NotificationOptions(
            data = obj<dynamic> {
                this.FCM_MSG = obj {
                    this.data = msg
                    this.notification = obj {
                        this.click_action = sw.registration.scope
                    }
                }
            }.unsafeCast<Any?>()
        )
    )
}

// https://github.com/firebase/firebase-js-sdk/blob/firebase%405.9.3/packages/messaging/src/controllers/sw-controller.ts
fun main() {

    console.log("Updating service worker...")

    messaging.setBackgroundMessageHandler {
        messageHandler(it)
    }

}

suspend fun clientList(): List<WindowClient> {
    val arr = sw.clients.matchAll(
        ClientQueryOptions(
            type = ClientType.WINDOW,
            includeUncontrolled = true
        )
    ).await() as Array<WindowClient>

    return arr.filter { it.url.startsWith(sw.registration.scope) }
}

suspend fun firstClient() = clientList().firstOrNull()

suspend fun focusOrOpenClient() =
    firstClient()?.focus()?.await() ?: sw.clients.openWindow(sw.registration.scope).await()!!
