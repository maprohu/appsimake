@file:JsModule("firebase-functions")
package functions

import express.Request
import express.Response

external val https : Https

external interface Https {
    fun onRequest(handler: (Request, Response) -> Unit): HttpsFunction
}

external interface HttpsFunction