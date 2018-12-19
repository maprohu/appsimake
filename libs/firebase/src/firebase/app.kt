@file:JsQualifier("firebase.app")
package firebase.app

import firebase.AppOptions
import firebase.auth.Auth
import firebase.messaging.Messaging

external interface App {
    val options: AppOptions
    fun auth(): Auth
    fun messaging() : Messaging
}



