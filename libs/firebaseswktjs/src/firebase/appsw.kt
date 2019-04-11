@file:JsQualifier("firebase.app")
package firebase.app

import firebase.AppOptions
import firebase.messaging.Messaging

// https://firebase.google.com/docs/reference/js/firebase.app.App
external interface AppSw {
    val options: AppOptions

    // https://firebase.google.com/docs/reference/js/firebase.app.App#auth
    fun messaging() : Messaging
}



