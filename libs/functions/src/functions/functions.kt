@file:JsModule("firebase-functions")
package functions

// https://firebase.google.com/docs/reference/functions/functions.EventContext
external interface EventContext {
    val params: dynamic
}

external interface HttpsFunction

external interface CloudFunction