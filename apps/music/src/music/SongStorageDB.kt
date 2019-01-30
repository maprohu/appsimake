package music

import common.Some
import common.filtered
import firebase.QueryCache
import firebase.firestore.Firestore
import killable.Killables
import musiclib.StoreState
import musiclib.music
import musiclib.storage

class SongStorageDB(
    db: Firestore,
    killables: Killables
) {
    val queryCache = QueryCache.hasProps(
        db,
        music.app.storage,
        { StoreState() },
        killables
    )

    suspend fun get(id: String, fn: StoreState.() -> Unit) = queryCache.get(id) {
        StoreState().apply(fn)
    }

    val uploaded by lazy {
        queryCache.emitter.filtered(killables) {
            it.uploaded.initial() == Some(true)
        }
    }

}

