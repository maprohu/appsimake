package tasks.data

import commonshr.FsDoc
import commonshr.docWrap
import firebase.HasDb
import firebase.firestore.*
import taskslib.Task
import taskslib.notes

suspend fun FsDoc<Task>.deleteCollections(
    deps: HasDb
) {
    deps.batch {
        deleteCollections(this)
    }
}

suspend fun FsDoc<Task>.deleteCollections(
    batch: FsBatch
) {
    batch.delete(docWrap.notes.collectionRef(batch))
}
