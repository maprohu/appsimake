package firebase

import common.obj
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonlib.HasPath
import firebase.firestore.FieldValue
import firebase.firestore.Firestore
import firebaseshr.PropOps
import firebaseshr.initBinder

fun AppOptions() : AppOptions = obj()

fun main(args: Array<String>) {
    initBinder(
        PropOps(
            delete = { FieldValue.delete() },
            serverTimestamp = { FieldValue.serverTimestamp() }
        )
    )
}

