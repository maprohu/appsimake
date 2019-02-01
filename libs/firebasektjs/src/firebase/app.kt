@file:JsQualifier("firebase.app")
package firebase.app

import firebase.AppOptions
import firebase.auth.Auth
import firebase.functions.Functions
import firebase.messaging.Messaging
import firebase.storage.Storage

// https://firebase.google.com/docs/reference/js/firebase.app.App
external interface App {
    val options: AppOptions
    // https://firebase.google.com/docs/reference/js/firebase.app.App#auth
    fun auth(): Auth
    fun messaging() : Messaging
    fun functions() : Functions
    fun storage(): Storage
}



