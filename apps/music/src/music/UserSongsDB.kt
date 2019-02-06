package music

import common.*
import commonfb.FB
import commonlib.private
import firebase.firestore.Firestore
import firebase.firestore.toSetSource
import firebaseshr.ids
import indexeddb.IDBDatabase
import killable.KillSet
import killable.Killables
import musiclib.*

class UserSongsDB(
    val source: SetSourceWithKey<UserSong, String>,
    private val killables: KillSet
) {
    companion object {
        suspend fun of(
            uks: KillSet,
            uid: String,
            db: Firestore = FB.db
        ): UserSongsDB {
            return UserSongsDB(
                    music.app.private.doc(uid).usersongs.toSetSource(uks, db) { UserSong() },
                    uks
            )
        }

    }

    suspend fun get(hash: String): UserSong {
        return get(hash) {
            state.cv = UserSongState.New
        }
    }

    suspend fun get(hash: String, fn: UserSong.() -> Unit = {}): UserSong {
        return source.getOrPut(hash) { it.fn() }
    }

    private fun filtered(st: UserSongState) = source.filtered(killables) { s ->
        s.state.initial() == Some(st)
    }

    val new = filtered(UserSongState.New)
    val like = filtered(UserSongState.Like)
    val dontLike = filtered(UserSongState.DontLike)

    val dontLikeSet = dontLike.ids
    val newSet = new.ids

}

