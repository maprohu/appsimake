@file:JsQualifier("firebase.app")
package firebase.app

import firebase.AppOptions
import firebase.auth.Auth
import firebase.firestore.Firestore
import firebase.functions.Functions
import firebase.messaging.Messaging
import firebase.storage.Storage

// https://firebase.google.com/docs/reference/js/firebase.app.App
external interface App: AppSw {
    // https://firebase.google.com/docs/reference/js/firebase.app.App#auth
    fun auth(): Auth
    fun functions() : Functions
    fun storage(): Storage
    fun firestore(): Firestore
}





