package testappsw0

import org.w3c.workers.ServiceWorkerGlobalScope

fun main(args: Array<String>) {
    val sw = js("self").unsafeCast<ServiceWorkerGlobalScope>()

//    sw.addEventListener("notificationclick", {
//        console.dir(it)
//    })
}