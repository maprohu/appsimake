@file:JsQualifier("firebase")
package firebase

import firebase.app.App
import firebase.auth.Auth
import firebase.firestore.Firestore
import firebase.functions.Functions
import firebase.messaging.Messaging
import firebase.storage.Storage
import kotlin.js.Promise


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

// https://firebase.google.com/docs/reference/js/firebase.auth.IDTokenResult
external interface IdTokenResult {

    // https://firebase.google.com/docs/reference/js/firebase.auth.IDTokenResult#claims
    val claims: dynamic

    // https://firebase.google.com/docs/reference/js/firebase.auth.IDTokenResult#signinprovider
    val signInProvider: String

}

external fun auth(
        app: App = definedExternally
) : Auth

external fun firestore(
        app: App = definedExternally
) : Firestore

external fun functions(
    app: App = definedExternally
) : Functions

external fun storage(
    app: App = definedExternally
): Storage



