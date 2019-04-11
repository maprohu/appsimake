@file:JsQualifier("firebase")
package firebase

import firebase.app.AppSw
import kotlin.js.Promise

external interface AppOptions {
    var apiKey: String
    var authDomain: String
    var databaseURL: String
    var projectId: String
    var storageBucket: String
    var messagingSenderId: String
}


external fun initializeApp(
        options: AppOptions,
        name: String = definedExternally
) : AppSw

external class FirebaseError


