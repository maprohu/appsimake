package music

import common.*
import commonfb.FB
import commonlib.private
import firebase.firestore.Firestore
import firebase.firestore.toSetSource
import firebaseshr.ids
import killable.KillSet
import musiclib.*
import rx.Rx

class UserSongsDB(
    val source: SetSourceWithKey<UserSong, String>,
    private val killables: KillSet
) {

    companion object {
        suspend operator fun invoke(
            uks: KillSet,
            uid: String,
            db: Firestore = FB.db
        ): UserSongsDB {
            return UserSongsDB(
                    musicLib.app.private.doc(uid).usersongs.toSetSource(uks, db) { UserSong() },
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
    val likeSet = like.ids

}


