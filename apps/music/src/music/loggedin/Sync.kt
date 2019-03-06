package music.loggedin

import common.obj
import commonshr.private
import commonshr.plusAssign
import commonshr.report
import commonui.globalStatus
import firebase.firestore.*
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import musiclib.*
import rx.RxMutableSet
import rx.Var

class Sync(
    val loggedIn: LoggedIn
) {
    val syncing = Var(false)

    fun sync() {
        syncing.now = true
    }

    private val syncQueries = with(loggedIn) {
        arrayOf(
            musicLib.app.private.doc(user.uid).usersongs.collectionRef(db),
            musicLib.app.storage.collectionRef(db),
            musicLib.app.songs.collectionRef(db)
        )
    }

    val pendingWrites = RxMutableSet<CollectionReference>()

    init {

        with (loggedIn) {
            syncQueries.forEach { q ->
                kills += q.onSnapshot(
                    obj {
                        includeMetadataChanges = true
                    },
                    { qs ->
                        if (qs.metadata.hasPendingWrites) {
                            pendingWrites += q
                        } else {
                            pendingWrites -= q
                        }
                    },
                    { report(it) }
                )

            }



            syncing.forEach { s ->
                if (s) {
                    launch {
                        try {
                            privileged {
                                globalStatus %= "Going online..."
                                db.enableNetwork().await()

                                try {
                                    globalStatus %= "Flushing data..."
                                    flushQueries(*syncQueries)
                                } finally {
                                    globalStatus %= "Going offline..."
                                    db.disableNetwork().await()
                                }
                            }
                            globalStatus %= "Syncing complete."

                        } catch (e: dynamic) {
                            boot.slots.toasts {
                                danger(
                                    "Synchronizing failed: ${e.message}"
                                )
                            }
                            globalStatus %= "Syncing failed: ${e.message}"
                        }
                        syncing.now = false
                    }
                }
            }
        }
    }
}