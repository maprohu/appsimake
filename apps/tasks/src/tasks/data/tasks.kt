package tasks.data

import commonshr.DocWrap
import commonshr.FsDoc
import commonshr.docWrap
import firebase.HasDb
import firebase.firestore.*
import taskslib.Task
import taskslib.notes

suspend fun DocWrap<Task>.deleteCollections(
    deps: HasDb
) {
    deps.batch {
        deleteCollections(this)
    }
}

suspend fun DocWrap<Task>.deleteCollections(
    batch: FsBatch
) {
    batch.delete(notes.collectionRef(batch))
}
