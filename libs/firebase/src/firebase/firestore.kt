@file:JsQualifier("firebase.firestore")
package firebase.firestore

import firebase.FirebaseError
import firebase.Promise

external interface Settings {
    var timestampsInSnapshots : Boolean
}

external class Firestore {

    fun settings(s: Settings)

    fun collection(path: String) : CollectionReference


}

// https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
external interface GetOptions {

    var source : String

}

// https://firebase.google.com/docs/reference/js/firebase.firestore.SetOptions?authuser=0
external interface SetOptions {
}


// https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference?authuser=0
external interface DocumentReference {

    val id: String

    fun collection(path: String) : CollectionReference

    fun get(options: GetOptions = definedExternally) : Promise<DocumentSnapshot>

    fun set(data: Any, options: SetOptions = definedExternally) : Promise<Unit>

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

    fun docChanges(
            options: SnapshotOptions = definedExternally
    ) : Array<DocumentChange>

}

