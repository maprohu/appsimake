package fbmessagingsw

import common.obj
import commonshr.Lib
import commonshr.identity
import firebaseshr.LibMessageWithData
import firebaseshr.MessageInterface
import firebaseshr.decodeMessageData
import kotlinx.coroutines.*
import org.w3c.notifications.NotificationEvent
import org.w3c.notifications.NotificationOptions
import org.w3c.workers.*

//val sw = js("self").unsafeCast<ServiceWorkerGlobalScope>()

external val self : ServiceWorkerGlobalScope

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

external interface FcmMessage {
    val data: MessageInterface
}

// https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData
external interface PushMessageData {
    fun json(): dynamic
}

// https://developer.mozilla.org/en-US/docs/Web/API/PushEvent
external class PushEvent: ExtendableEvent {
    val data: PushMessageData
}

suspend fun clientList(): List<WindowClient> {
    val arr = self.clients.matchAll(
        ClientQueryOptions(
            type = ClientType.WINDOW,
            includeUncontrolled = true
        )
    ).await() as Array<WindowClient>

    return arr.filter { it.url.startsWith(self.registration.scope) }
}

suspend fun firstClient() = clientList().firstOrNull()

suspend fun focusOrOpenClient() =
    firstClient()?.focus()?.await() ?: self.clients.openWindow(self.registration.scope).await()!!


fun <D> initMessaging(
    lib: Lib,
    decode: (dynamic) -> D = identity(),
    foreground: suspend WindowClient.(D) -> Unit = {},
    click: suspend (NotificationEvent) -> Unit = {},
    background: suspend NotificationBuilder.(D) -> Unit
) {
    self.addEventListener(
        "push",
        { e ->
            e as PushEvent
            val msgData = e.data.json().unsafeCast<FcmMessage>().data

            if (msgData.appsimakeApp == lib.name) {
                e.stopImmediatePropagation()

                e.waitUntil(
                    GlobalScope.async {
                        val clients = clientList()

                        val focusedClient = clients.find { it.focused }

                        val data = decode(decodeMessageData(msgData).data)

                        if (focusedClient != null) {
                            focusedClient.foreground(data)
                        } else {
                            NotificationBuilder(lib).apply {
                                background(data)
                            }.show()
                        }
                    }.asPromise()
                )
            }
        }
    )

    self.addEventListener(
        "notificationclick",
        { e ->
            e as NotificationEvent
            e.waitUntil(
                GlobalScope.async {
                    click(e)
                }.asPromise()
            )
        }
    )

    messaging

}

class NotificationBuilder(lib: Lib) {

    var title: String = lib.name

    val options = NotificationOptions(
        tag = lib.name,
        renotify = true
    )

    suspend fun show() {
        self.registration.showNotification(
            title,
            options
        ).await()
    }

}













//val appName by lazy {
//    val scope = self.registration.scope
//
//    scope.substringBeforeLast('/').substringAfterLast('/')
//}
//var messageTitle : (dynamic) -> String = {
//    "$appName: message arrived"
//}
//
//var messageHandler : (dynamic) -> Promise<Any?> = { msg ->
//    sw.registration.showNotification(
//        messageTitle(msg),
//        NotificationOptions(
//            data = obj<dynamic> {
//                this.FCM_MSG = obj {
//                    this.data = msg
//                    this.notification = obj {
//                        this.click_action = sw.registration.scope
//                    }
//                }
//            }.unsafeCast<Any?>()
//        )
//    )
//}

// https://github.com/firebase/firebase-js-sdk/blob/firebase%405.9.3/packages/messaging/src/controllers/sw-controller.ts
//fun main() {
//
//    console.log("Updating service worker...")
//
//    messaging.setBackgroundMessageHandler {
//        messageHandler(it)
//    }
//
//}

