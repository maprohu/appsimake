// @file:JsModule("firebase-functions")
package firebasefunctions

import firebasefunctions.config.Config

// https://firebase.google.com/docs/reference/functions/functions
val functions by lazy { js("require('firebase-functions')").unsafeCast<FunctionsModule>() }

// https://firebase.google.com/docs/reference/functions/functions.EventContext
external interface EventContext {
    val params: dynamic
}

external interface HttpsFunction

external interface CloudFunction

external interface FunctionsModule {
    // https://firebase.google.com/docs/reference/functions/functions.config#config
    fun config(): Config
}
