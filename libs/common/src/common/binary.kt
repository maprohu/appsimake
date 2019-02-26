package common

import kotlinx.coroutines.await
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Uint8Array
import kotlin.browser.window
import kotlin.js.Promise

suspend fun ArrayBuffer.hash(): String {
    val hashBuffer = window
        .asDynamic()
        .crypto
        .subtle
        .digest("SHA-256", this)
        .unsafeCast<Promise<ArrayBuffer>>()
        .await()

    val uint8 = Uint8Array(hashBuffer)

    return js("String").fromCharCode.apply(null, uint8).unsafeCast<String>().escape

//    return Uint8Array(hashBuffer)
//        .asList()
//        .joinToString("") { (it + 256).toString(16).substring(1) }
}

val String.escape get() = window.btoa(this).replace('/', '-')
