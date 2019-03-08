package firebase.firestore

import firebase.HasDb
import kotlinx.coroutines.await

const val MaxBatchSize = 500

class FsBatch(
    val db: Firestore,
    val batchSize: Int = MaxBatchSize
) {
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



suspend fun FsBatch.delete(query: Query, deleteCollections: suspend (QueryDocumentSnapshot) -> Unit = {}) {
    var count = 0
    val ql = query.limit(batchSize)
    do {
        ql.get().await().also { count = it.size }.docs.forEach { qds ->
            deleteCollections(qds)
            delete(qds.ref)
        }
    } while (count > 0)
}

