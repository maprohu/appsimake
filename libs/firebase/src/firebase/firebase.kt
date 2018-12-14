@file:JsQualifier("firebase")
package firebase

import firebase.app.App
import firebase.auth.Auth
import firebase.firestore.Firestore
import firebase.messaging.Messaging

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

external class FirebaseError


external interface Thenable<out T> {

//    fun <S> then(
//            onResolve: (T) -> S,
//            onReject: (Any) -> Any = definedExternally
//    ) : Thenable<S>

}

//external interface Promise<out T> : Thenable<T> {
//
//    fun <S> then(
//            onResolve: (T) -> Any?
//    ) : Promise<S>
//
//    fun <S> then(
//            onResolve: (T) -> Any?,
//            onReject: (Any) -> Any?
//    ) : Promise<S>
//
//    fun <S> catch(error: (Error) -> Any?) : Promise<S>
//
//}