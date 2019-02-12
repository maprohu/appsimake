package music.data

import common.CircularList
import commonshr.*
import killable.*
import music.GetUserSongState
import music.common.LocalSongs
import music.Playable
import musiclib.UserSongState
import rx.*

typealias SongSource = RxIface<(suspend () -> Playable?)?>
typealias SongIncludeRx = (String) -> RxIface<Boolean>

fun songSource(
    ks: KillSet,
    includeSong: RxIface<SongIncludeRx>,
    localSongsDB: LocalSongs
): SongSource {
    val songRing = CircularList<String>()
    val localSongs = localSongsDB.set

    val included = Var(RxMutableSet<String>())

    val incSeq = ks.seq()
    Rx {
        val inc = includeSong()
        val incset = RxMutableSet<String>()
        val iks = Killables()
        localSongs.process(iks.killSet) { id, idks ->
            inc(id).forEach { i ->
                if (i) {
                    incset += id
                } else {
                    incset -= id
                }
            }.addedTo(idks)
            idks += { incset -= id }
        }
        incset to iks.toTrigger()
    }.addedTo(ks).forEach { (inc, kill) ->
        included.now = inc
        incSeq %= kill
    }

    localSongsDB.set.process(ks) { id, lks ->
        songRing.insertItem(id)
        lks += { songRing.remove(id) }
    }

    songRing.moveHead()

    suspend fun next(): Playable? {
        while (included.now.isNotEmpty()) {
            val id = songRing.next

            if (id in included.now) {
                val blob = localSongsDB.load(id)

                if (blob != null) {
                    return Playable(id, blob)
                }
            }
        }
        return null
    }

    val nextFn: suspend () -> Playable? = {
        next()
    }

    return Rx {
        if (included().isEmptyRx()) {
            null
        } else {
            nextFn
        }
    }.addedTo(ks)

}

private fun getInclude(ks: KillSet, states: GetUserSongState, state: UserSongState): SongIncludeRx {
    val map = mutableMapOf<String, RxIface<Boolean>>()

    return { id ->
        map.getOrPut(id) {
            Rx {
                states(id)() == state
            }.addedTo(ks)
        }
    }
}

fun songInclude(
    ks: KillSet,
    localSongs: LocalSongs,
    userSongs: RxIface<GetUserSongState?>
): RxIface<SongIncludeRx> {

    val kseq = ks.seq()
    return Rx {
        val uks = kseq.killSet()
        val songState = userSongs()

        if (songState == null) {
            { Var(true) }
        } else {
            val hasNew = localSongs.set.any { id ->
                songState(id)() == UserSongState.New
            }

            fun getIncludeState(state: UserSongState) =
                getInclude(uks, songState, state)

            if (hasNew) {
                getIncludeState(UserSongState.New)
            } else {
                getIncludeState(UserSongState.Like)
            }

        }
    }.addedTo(ks)
}

