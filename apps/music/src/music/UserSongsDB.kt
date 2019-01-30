package music

import common.*
import commonlib.DocWrap
import commonlib.Private
import commonlib.private
import commonshr.SetMove
import firebase.QueryCache
import firebase.firestore.Firestore
import firebase.ids
import indexeddb.IDBDatabase
import indexeddb.get
import killable.Killables
import killable.addedTo
import musiclib.*
import org.w3c.files.File

class UserSongsDB(
    db: Firestore,
    uid: String,
    private val killables: Killables
) {
    val queryCache = QueryCache.hasProps(
        db,
        music.app.private.doc(uid).usersongs,
        { UserSong() },
        killables
    )

    suspend fun get(hash: String): UserSong {
        return get(hash) {
            state.cv = UserSongState.New
        }
    }

    suspend fun get(hash: String, fn: UserSong.() -> Unit = {}): UserSong {
        return queryCache.get(hash) {
            UserSong().apply(fn)
        }
    }

    private fun filtered(st: UserSongState) = queryCache.emitter.filtered(killables) { s ->
        s.state.initial() == Some(st)
    }

    val new = filtered(UserSongState.New)
    val like = filtered(UserSongState.Like)
    val dontLike = filtered(UserSongState.DontLike)

    private fun ids(e: Emitter<SetMove<UserSong>>) = lazy {
        val s = mutableSetOf<String>()
        killables += e.ids.feedTo(s)
        s
    }

    val dontLikeSet by ids(dontLike)
    val newSet by ids(new)

}

suspend fun like(
    id: String,
    userSongsDB: UserSongsDB,
    idb: IDBDatabase
) {
    val userSong = userSongsDB.get(id)

    if (userSong.state.iv != UserSongState.Like) {
        userSong.state.cv = UserSongState.Like

        @Suppress("DeferredResultUnused")
        userSong.props.save()

        val mp3 = idb.readMp3(id)

        if (mp3 != null) {


        }



    }

}