@file:JsModule("firebase-functions")
@file:JsQualifier("https")
package functions.https

import admin.auth.DecodedIdToken
import express.Request
import express.Response
import functions.HttpsFunction

external fun onRequest(handler: (Request, Response) -> Unit): HttpsFunction

// https://firebase.google.com/docs/reference/functions/functions.https#.onCall
external fun <T> onCall(handler: (T, CallableContext) -> Any?): HttpsFunction

// https://firebase.google.com/docs/reference/functions/functions.https.html#.CallableContext
external interface CallableContext {
    val auth: CallableContextAuth
    val instanceIdToken: String
    val rawRequest: dynamic
}

external interface CallableContextAuth {
    val uid: String?
    val token: DecodedIdToken?
}

// https://firebase.google.com/docs/reference/functions/functions.https.HttpsError
external class HttpsError(
    code: String,
    message: String,
    details: dynamic
)