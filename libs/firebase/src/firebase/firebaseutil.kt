package firebase

import common.obj
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonlib.HasPath
import firebase.firestore.FieldValue
import firebase.firestore.Firestore
import firebase.firestore.collectionRef
import firebaseshr.PropOps
import firebaseshr.initBinder
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlinx.coroutines.launch

fun AppOptions() : AppOptions = obj()

const val MaxBatchSize = 500

fun initBinder(
    db: Firestore
) {
    initBinder(
        PropOps(
            delete = { FieldValue.delete() },
            serverTimestamp = { FieldValue.serverTimestamp() },
            deleteCollection = { cw ->
                // TODO if delete does not happen (because we're offline) try to do it in web sync
                GlobalScope.async {
                    suspend fun step(): Boolean {
                        val qs = cw
                            .collectionRef(db)
                            .limit(MaxBatchSize)
                            .get()
                            .await()

                        val batch = db.batch()
                        for (doc in qs.docs) {
                            batch.delete(doc.ref)
                        }
                        batch.commit().await()

                        return qs.size == MaxBatchSize
                    }

                    while (step()) {}
                }
            }
        )

    )
}
