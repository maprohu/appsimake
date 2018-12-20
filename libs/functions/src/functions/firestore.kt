@file:JsModule("firebase-functions")
@file:JsQualifier("firestore")
package functions.firestore

import functions.CloudFunction
import functions.EventContext

external fun document(path: String) : DocumentBuilder

// https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentBuilder
external interface DocumentBuilder {

    fun onCreate(handler: (DocumentSnapshot, EventContext) -> Unit) : CloudFunction
}

// https://firebase.google.com/docs/reference/functions/functions.firestore.DocumentSnapshot
external interface DocumentSnapshot


