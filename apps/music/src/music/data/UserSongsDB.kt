package music

import common.*
import commonfb.FB
import commonfb.merge
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
import rx.Rx
import rx.RxIface
import rx.Var
import rx.process

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
    val source = cw.toRxSetWithLookup(uks, db) { UserSong() }

    val map = mutableMapOf<String, Var<UserSongState>>()

    fun rxv(id: String)= map.getOrPut(id) { Var(UserSongState.New) }

    source.set.process(uks) { item, ks ->
        val rxv = rxv(item.props.idOrFail)
        item.state.initial.forEach(ks) { st ->
            rxv.now = st.getOrDefault(UserSongState.New)
        }
    }

    return UserSongs(
        get = { rxv(it) },
        set = { id, state ->
            rxv(id).now = state

            UserSong().apply {
                props.persisted(cw.doc(id))
                this.state.cv = state
                merge(db)
            }
        }
    )
}


