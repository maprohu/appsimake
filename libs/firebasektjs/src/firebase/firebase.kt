@file:JsQualifier("firebase")
package firebase

import firebase.app.App
import firebase.auth.Auth
import firebase.firestore.Firestore
import firebase.functions.Functions
import firebase.messaging.Messaging
import firebase.storage.Storage
import kotlin.js.Promise

external interface AppOptions {
    var apiKey: String
    var authDomain: String
    var databaseURL: String
    var projectId: String
    var storageBucket: String
    var messagingSenderId: String


}

// https://firebase.google.com/docs/reference/js/firebase.UserInfo
external interface UserInfo {

    val displayName : String?
    val email: String?
    val uid : String
    val photoURL : String?

}

external interface User : UserInfo {

    // https://firebase.google.com/docs/reference/js/firebase.User#getIdTokenResult
    fun getIdTokenResult(forceRefresh: Boolean = definedExternally): Promise<IdTokenResult>

}

// https://firebase.google.com/docs/reference/js/firebase.auth.IdTokenResult
external interface IdTokenResult {

}

external fun initializeApp(
        options: AppOptions,
        name: String = definedExternally
) : App

external fun auth(
        app: App = definedExternally
) : Auth

external fun messaging() : Messaging

external fun firestore(
        app: App = definedExternally
) : Firestore

external fun functions(
    app: App = definedExternally
) : Functions

external fun storage(
    app: App = definedExternally
): Storage

external class FirebaseError


