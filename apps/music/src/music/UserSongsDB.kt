package music

import commonlib.DocWrap
import commonlib.Private
import commonlib.private
import firebase.QueryCache
import firebase.firestore.Firestore
import killable.Killables
import musiclib.UserSong
import musiclib.music
import musiclib.usersongs

class UserSongsDB(
    private val db: Firestore,
    uid: String,
    killables: Killables
) {
    val queryCache = QueryCache.hasProps(
        db,
        music.app.private.doc(uid).usersongs,
        { UserSong() },
        killables
    )

    suspend fun get(hash: String, fn: UserSong.() -> Unit = {}): UserSong {
        return queryCache.get(hash) {
            UserSong().apply(fn)
        }
    }


}