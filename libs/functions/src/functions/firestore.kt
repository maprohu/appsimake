@file:JsModule("firebase-functions")
@file:JsQualifier("firestore")
package functions.firestore

import firebaseadmin.firestore.DocumentReference
import functions.CloudFunction
import functions.EventContext

external fun document(path: String) : DocumentBuilder

// https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentBuilder
external interface DocumentBuilder {

    // https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentBuilder#onCreate
    fun onCreate(handler: (DocumentSnapshot, EventContext) -> Any?) : CloudFunction

}

// https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentSnapshot
external interface DocumentSnapshot {
    // https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentSnapshot#data
    fun data() : dynamic

    // https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentSnapshot#ref
    val ref : DocumentReference
}


