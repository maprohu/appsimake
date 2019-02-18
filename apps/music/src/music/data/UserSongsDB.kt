package music

import common.*
import commonfb.*
import commonlib.CollectionWrap
import commonlib.private
import commonshr.process
import commonshr.toMoves
import firebase.firestore.Firestore
import firebase.firestore.RxSetWithLookup
import firebase.firestore.toRxSetWithLookup
import firebase.firestore.toSetSource
import firebaseshr.ids
import killable.KillSet
import killable.addedTo
import musiclib.*
import rx.*

typealias GetUserSongState = (String) -> RxIface<UserSongState>
typealias SetUserSongState = (String, UserSongState) -> Unit
fun SetUserSongState.like(id: String) = this(id, UserSongState.Like)
fun SetUserSongState.dontLike(id: String) = this(id, UserSongState.DontLike)

class UserSongs(
    val get: GetUserSongState,
    val set: SetUserSongState
) {
    fun like(id: String) = set.like(id)
    fun dontLike(id: String) = set.dontLike(id)
}

suspend fun userSongs(
    uks: KillSet,
    uid: String,
    db: Firestore = FB.db
): UserSongs {
    val cw = musicLib.app.private.doc(uid).usersongs

    val map = mutableMapOf<String, UserSong>()

    fun item(id: String)= map.getOrPut(id) {
        UserSong().apply {
            props.persisted(cw.doc(id))
            listenToSnapshots(uks, db)
        }
    }

    return UserSongs(
        get = { id ->
            item(id).state.initial.map(uks) { it.getOrDefault(UserSongState.New) }
        },
        set = { id, state ->
            item(id).apply {
                this.state.cv = state
                save(db)
                props.clearDirty()
            }
        }
    )
}


