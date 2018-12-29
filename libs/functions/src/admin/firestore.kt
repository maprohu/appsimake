package firebaseadmin.firestore

import kotlin.js.Promise

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Firestore
external interface Firestore {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Firestore#doc
    fun doc(path: String) : DocumentReference

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Firestore#collection
    fun collection(path: String): CollectionReference

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/Firestore#settings
    fun settings(s: FirestoreSettings)
}

external interface FirestoreSettings {
    var timestampsInSnapshots : Boolean

}

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentReference
external interface DocumentReference {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentReference#get
    fun get(): Promise<DocumentSnapshot>
}

external interface Query {

}
external interface CollectionReference : Query {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/CollectionReference#get
    fun get() : Promise<QuerySnapshot>

}


// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/QuerySnapshot
external interface QuerySnapshot {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/QuerySnapshot#forEach
    fun forEach(fn: (QueryDocumentSnapshot) -> Unit)
}

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentSnapshot
external interface DocumentSnapshot {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentSnapshot#id
    val id : String

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/DocumentSnapshot#data
    fun data() : dynamic

}

// https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/QueryDocumentSnapshot
external interface QueryDocumentSnapshot : DocumentSnapshot {

    // https://cloud.google.com/nodejs/docs/reference/firestore/0.19.x/QueryDocumentSnapshot#data
    override fun data() : dynamic

}