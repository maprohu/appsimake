@file:JsQualifier("firebase.app")
package firebase.app

import firebase.AppOptions
import firebase.auth.Auth
import firebase.functions.Functions
import firebase.messaging.Messaging
import firebase.storage.Storage

external interface App {
    val options: AppOptions
    fun auth(): Auth
    fun messaging() : Messaging
    fun functions() : Functions
    fun storage(): Storage
}



