@file:JsQualifier("firebase.firestore")
package firebase.firestore

import common.obj
import firebase.FirebaseError
import kotlin.js.Date
import kotlin.js.Promise
import kotlin.reflect.KProperty

external interface Settings {
//    var timestampsInSnapshots : Boolean
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

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#enablePersistence
    fun enablePersistence(settings: PersistenceSettings = definedExternally): Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#disableNetwork
    fun disableNetwork(): Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore?authuser=0#batch
    fun batch(): WriteBatch

}


external interface PersistenceSettings {

    var experimentalTabSynchronization: Boolean

}

// https://firebase.google.com/docs/reference/js/firebase.firestore.WriteBatch?authuser=0
external interface WriteBatch {

    // https://firebase.google.com/docs/reference/js/firebase.firestore.WriteBatch?authuser=0#set
    fun set(ref: DocumentReference, data: dynamic, options: SetOptions = definedExternally): WriteBatch

    // https://firebase.google.com/docs/reference/js/firebase.firestore.WriteBatch?authuser=0#delete
    fun delete(ref: DocumentReference): WriteBatch

    // https://firebase.google.com/docs/reference/js/firebase.firestore.WriteBatch?authuser=0#commit
    fun commit(): Promise<Unit>

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
    fun update(ref: DocumentReference, vararg value: dynamic) : Transaction

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

    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0#set
    fun set(data: dynamic, options: SetOptions = definedExternally) : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0#update
    fun update(data: Any) : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0#delete
    fun delete() : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0#onSnapshot
    fun onSnapshot(
            onNext: (DocumentSnapshot) -> Unit
    ) : () -> Unit


}

// https://firebase.google.com/docs/reference/js/firebase.firestore.Query?authuser=0
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
        value: dynamic
    ) : Query

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Query#limit
    fun limit(count: Int): Query

    // https://firebase.google.com/docs/reference/js/firebase.firestore.Query?authuser=0#get
    fun get(options: GetOptions = definedExternally) : Promise<QuerySnapshot>

}


// https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference?authuser=0
external class CollectionReference : Query {

    fun doc(path: String = definedExternally) : DocumentReference

    // https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference?authuser=0#add
    fun add(data: dynamic) : Promise<DocumentReference>


}

external interface DocumentData {

}

// https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot?authuser=0
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

// https://firebase.google.com/docs/reference/js/firebase.firestore.QueryDocumentSnapshot?authuser=0
external interface QueryDocumentSnapshot : DocumentSnapshot {
    val id: String




}

// https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange?authuser=0
external interface DocumentChange {

    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange?authuser=0#doc
    val doc: QueryDocumentSnapshot
    val newIndex : Int
    val oldIndex : Int
    val type: DocumentChangeType


}


@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
external interface DocumentChangeType {
    companion object
}



// https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot?authuser=0
external interface QuerySnapshot {

    val docs : Array<QueryDocumentSnapshot>

    val size : Int

    fun docChanges(
            options: SnapshotOptions = definedExternally
    ) : Array<DocumentChange>

}

// https://firebase.google.com/docs/reference/js/firebase.firestore.FieldValue
external class FieldValue {
    companion object {
        fun serverTimestamp() : Timestamp

        // https://firebase.google.com/docs/reference/js/firebase.firestore.FieldValue#.arrayUnion
        fun <T> arrayUnion(vararg t: T) : Array<T>
        // https://firebase.google.com/docs/reference/js/firebase.firestore.FieldValue#.arrayRemove
        fun <T> arrayRemove(vararg t: T) : Array<T>
        fun <T> delete() : T
    }
}

// https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
external class Timestamp : firebaseshr.firestore.Timestamp {

    override var nanoseconds: Long
    override var seconds: Long

    override fun toDate() : Date
    override fun toMillis() : Long

    companion object {
        fun fromDate(date: Date) : Timestamp
        fun fromMillis(millis: Long) : Timestamp
        fun now() : Timestamp
    }
}