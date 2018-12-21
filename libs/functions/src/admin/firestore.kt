package firebaseadmin.firestore

import kotlin.js.Promise

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Firestore
external interface Firestore {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Firestore#doc
    fun doc(path: String) : DocumentReference

}

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentReference
external interface DocumentReference {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentReference#get
    fun get(): Promise<DocumentSnapshot>
}

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentSnapshot
external interface DocumentSnapshot {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentSnapshot#data
    fun data() : dynamic

}