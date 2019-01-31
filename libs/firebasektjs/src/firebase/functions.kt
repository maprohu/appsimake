@file:JsQualifier("firebase.functions")
package firebase.functions

import kotlin.js.Promise

// https://firebase.google.com/docs/reference/js/firebase.functions.Functions
external interface Functions {

    fun httpsCallable(name: String) : (dynamic) -> Promise<HttpsCallableResult>

}

external interface HttpsCallableResult {
    val data: dynamic
}


