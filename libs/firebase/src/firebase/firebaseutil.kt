package firebase

import common.obj
import firebase.firestore.FieldValue
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
