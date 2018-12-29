package fbmessagingsw

import common.obj
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import org.w3c.workers.ServiceWorkerGlobalScope

val sw = js("self").unsafeCast<ServiceWorkerGlobalScope>()

fun main(args: Array<String>) {

    console.log("Updating service worker...")

    val app = firebase.initializeApp(
        obj {
            messagingSenderId = "850641545175"
        }
    )

    app.messaging()

//    val messaging = app.messaging()
//    messaging.setBackgroundMessageHandler { msg ->
//        sw.registration.showNotification(
//            "hello"
//        )
//    }

}