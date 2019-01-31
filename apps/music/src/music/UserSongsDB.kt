package music

import common.*
import firebaseshr.ids
import killable.Killables
import musiclib.*

class UserSongsDB(
    val source: SetSourceWithKey<UserSong, String>,
    private val killables: Killables
) {

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

