package music

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
}

