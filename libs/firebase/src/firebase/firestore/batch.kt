package firebase.firestore

import firebase.HasDb
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.await
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch

const val MaxBatchSize = 500

class FsBatch(
    override val db: Firestore,
    val batchSize: Int = MaxBatchSize
): HasDb {
    var counter = 0

    var batch: WriteBatch? = null

    val currentBatch get() = batch.let { b ->
        b ?: db.batch().also {
            counter = 0
            batch = it
        }
    }

    private fun increase() {
        counter += 1
        if (counter == batchSize) commit()
    }

    fun set(ref: DocumentReference, data: dynamic) {
        currentBatch.set(ref, data)
        increase()
    }
    fun set(ref: DocumentReference, data: dynamic, options: SetOptions) {
        currentBatch.set(ref, data, options)
        increase()
    }

    fun delete(ref: DocumentReference) {
        currentBatch.delete(ref)
        increase()
    }

    fun commit() {
        batch?.let { b ->
            b.commit()
            batch = null
        }
    }
}

inline fun HasDb.batch(batchSize: Int = MaxBatchSize, fn: FsBatch.() -> Unit) = db.batch(batchSize, fn)
inline fun Firestore.batch(batchSize: Int = MaxBatchSize, fn: FsBatch.() -> Unit) {
    FsBatch(this, batchSize).apply {
        console.dir(this)
        fn()
        commit()
    }
}

suspend fun DocumentReference.waitUntilDeleted() {
    val cd = CompletableDeferred<Unit>()

    val cancelSnapshots = onSnapshotNext {ds ->
        if (!ds.exists) cd.complete(Unit)
    }

    cd.await()

    cancelSnapshots()
}


suspend fun FsBatch.delete(query: Query, deleteCollections: suspend (QueryDocumentSnapshot) -> Unit = {}) {
    val ql = query.limit(batchSize)
    suspend fun QueryDocumentSnapshot.deleteCollectionsAndSelf() {
        deleteCollections(this)
        delete(ref)
    }
    while (true) {
        ql.get().await().also { qs ->
            if (qs.size == batchSize) {
                coroutineScope {
                    qs.docs.forEach { qds ->
                        qds.deleteCollectionsAndSelf()
                        launch { qds.ref.waitUntilDeleted() }
                    }
                    commit()
                }
            } else {
                qs.docs.forEach { it.deleteCollectionsAndSelf() }
                return
            }
        }
    }
}

