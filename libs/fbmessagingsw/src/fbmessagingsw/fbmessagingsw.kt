package fbmessagingsw

import common.obj
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import org.w3c.notifications.NotificationOptions
import org.w3c.workers.ServiceWorkerGlobalScope
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

val appName = run {
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

fun main() {

    console.log("Updating service worker...")

//    messaging.setBackgroundMessageHandler {
//        messageHandler(it)
//    }

}