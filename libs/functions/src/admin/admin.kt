//@file:JsModule("firebase-admin")

package firebaseadmin

import firebaseadmin.app.App
import firebaseadmin.app.AppOptions
import firebaseadmin.auth.Auth
import firebaseadmin.firestore.FieldValueStatic
import firebaseadmin.firestore.Firestore
import firebaseadmin.firestore.TimestampStatic
import firebaseadmin.messaging.Messaging


// https://firebase.google.com/docs/reference/admin/node/admin
val admin by lazy { js("require('firebase-admin')").unsafeCast<AdminModule>() }

external interface AdminModule {

    // https://firebase.google.com/docs/reference/admin/node/admin.auth
    fun auth(app: App = definedExternally) : Auth

    // https://firebase.google.com/docs/reference/admin/node/admin.messaging#messaging
    fun messaging(app: App = definedExternally) : Messaging

    // https://firebase.google.com/docs/reference/admin/node/admin.firestore
    fun firestore(app: App = definedExternally) : Firestore

    // https://firebase.google.com/docs/reference/admin/node/admin#.initializeApp
    fun initializeApp(
        options: AppOptions = definedExternally,
        name: String = definedExternally
    ): App

    val FieldValue : FieldValueStatic

    val Timestamp: TimestampStatic

}


