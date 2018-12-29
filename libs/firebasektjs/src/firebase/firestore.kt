@file:JsQualifier("firebase.firestore")
package firebase.firestore

import common.obj
import firebase.FirebaseError
import kotlin.js.Date
import kotlin.js.Promise
import kotlin.reflect.KProperty

external interface Settings {
    var timestampsInSnapshots : Boolean
}

// https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore
external class Firestore {

    fun settings(s: Settings)

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#doc
    fun doc(path: String): DocumentReference

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#collection
    fun collection(path: String) : CollectionReference

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#runTransaction
    fun <T> runTransaction(fn: (Transaction) -> Any) : Promise<T>


}

// https://firebase.google.com/docs/reference/js/firebase.firestore.Transaction
external interface Transaction {

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Transaction#get
    fun get(ref: DocumentReference) : Promise<DocumentSnapshot>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Transaction#delete
    fun delete(ref: DocumentReference) : Transaction

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Transaction#set
    fun set(ref: DocumentReference, data: dynamic, options: SetOptions = definedExternally) : Transaction

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Transaction#update
    fun update(ref: DocumentReference, vararg value: Any) : Transaction

}

// https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
external interface GetOptions {

    var source : String

}

// https://firebase.google.com/docs/reference/js/firebase.firestore.SetOptions?authuser=0
external interface SetOptions {
    var merge : Boolean
}



// https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0
external interface DocumentReference {

    val id: String

    fun collection(path: String) : CollectionReference

    fun get(options: GetOptions = definedExternally) : Promise<DocumentSnapshot>

    fun set(data: dynamic, options: SetOptions = definedExternally) : Promise<Unit>

    fun update(data: Any) : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0#delete
    fun delete() : Promise<Unit>

    fun onSnapshot(
            onNext: (DocumentSnapshot) -> Unit
    ) : () -> Unit


}

open external class Query {
    fun orderBy(
            fieldPath: String,
            directionStr: String = definedExternally // [asc, desc]
    ) : Query

    fun onSnapshot(
            onNext: (QuerySnapshot) -> Unit,
            onError: (FirebaseError) -> Unit
    ) : () -> Unit

    fun where(
        fieldPath: String,
        opStr: String,
        value: Any?
    ) : Query

    fun get(options: GetOptions = definedExternally) : Promise<QuerySnapshot>

}


// https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference?authuser=0
external class CollectionReference : Query {

    fun doc(path: String = definedExternally) : DocumentReference

    // https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference?authuser=0#add
    fun add(data: Any) : Promise<DocumentReference>


}

external interface DocumentData {

}

external interface DocumentSnapshot {

    fun <T> data(
            options: SnapshotOptions = definedExternally
    ) : T

    fun get(
            fieldPath: String,
            options: SnapshotOptions = definedExternally
    ) : Any

    val exists : Boolean

    val ref : DocumentReference

    val metadata: SnapshotMetadata


}

external interface SnapshotMetadata {
    val fromCache: Boolean
    val hasPendingWrites: Boolean
}

external interface SnapshotOptions {
    var serverTimestamps : String
}

external interface QueryDocumentSnapshot : DocumentSnapshot {
    val id: String




}

external interface DocumentChange {

    val doc: QueryDocumentSnapshot
    val newIndex : Int
    val oldIndex : Int
    val type: String


}

external interface QuerySnapshot {

    val docs : Array<QueryDocumentSnapshot>

    fun docChanges(
            options: SnapshotOptions = definedExternally
    ) : Array<DocumentChange>

}

external class FieldValue {
    companion object {
        fun serverTimestamp() : Timestamp

        fun <T> arrayUnion(vararg t: T) : Array<T>
        fun <T> arrayRemove(vararg t: T) : Array<T>
        fun <T> delete() : T
    }
}

// https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
external class Timestamp {
    var nanoseconds: Long
    var seconds: Long

    fun toDate() : Date
    fun toMillis() : Long

    companion object {
        fun fromDate(date: Date) : Timestamp
        fun fromMillis(millis: Long) : Timestamp
        fun now() : Timestamp
    }
}