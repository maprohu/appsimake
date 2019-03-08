package tasks.data

import commonshr.FsDoc
import commonshr.docWrap
import firebase.HasDb
import firebase.firestore.batch
import firebase.firestore.collectionRef
import firebase.firestore.delete
import firebase.firestore.docRef
import taskslib.Task
import taskslib.notes

suspend fun FsDoc<Task>.deleteRecursive(
    deps: HasDb
) {
    val task = this.docWrap
    deps.batch {
        delete(task.notes.collectionRef(deps))
        delete(task.docRef(deps))
    }

}