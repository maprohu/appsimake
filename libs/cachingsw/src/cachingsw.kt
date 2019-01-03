package cachingsw

import buildenv.resourcesPropertyName
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import org.w3c.dom.url.URL
import org.w3c.fetch.Response
import org.w3c.workers.FetchEvent
import org.w3c.workers.InstallEvent
import org.w3c.workers.ServiceWorkerGlobalScope

val sw = js("self").unsafeCast<ServiceWorkerGlobalScope>()

fun main(args: Array<String>) {

    sw.addEventListener(
        "install",
        { event ->
            event as InstallEvent

            event.waitUntil(
                GlobalScope.async {
                    val cache = sw.caches.open("appsimake-cache").await()
                    val files = sw.asDynamic()[resourcesPropertyName].unsafeCast<Array<String>>()

                    cache.addAll(files).await()
                    cache.add(sw.registration.scope).await()
                }.asPromise()
            )
        }
    )

    sw.addEventListener(
        "fetch",
        { event ->
            event as FetchEvent

            event.respondWith(
                GlobalScope.async {
                    val response = sw.caches.match(event.request).await() as Response?

                    if (response != null) {
                        response
                    } else {
                        if (URL(event.request.url).origin == URL(sw.registration.scope).origin) {
                            console.log(event.request.url)
                        }
                        sw.fetch(event.request).await()
                    }
                }.asPromise()
            )
        }
    )

}