package fbmessagingsw

import org.w3c.workers.ServiceWorkerGlobalScope

val sw = js("self").unsafeCast<ServiceWorkerGlobalScope>()

fun main(args: Array<String>) {

    console.log("SW!")
    sw.addEventListener(
        "push",
        { e ->
            console.log(e)
        }
    )

}