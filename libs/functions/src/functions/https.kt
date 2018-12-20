@file:JsModule("firebase-functions")
@file:JsQualifier("https")
package functions.https

import express.Request
import express.Response
import functions.HttpsFunction

external fun onRequest(handler: (Request, Response) -> Unit): HttpsFunction

// https://firebase.google.com/docs/reference/functions/functions.https#.onCall
external fun <T> onCall(handler: (T, CallableContext) -> Any?): HttpsFunction

external interface CallableContext

// https://firebase.google.com/docs/reference/functions/functions.https.HttpsError
external class HttpsError(
    code: String,
    message: String,
    details: dynamic
)