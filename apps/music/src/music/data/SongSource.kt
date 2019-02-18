package music.data

import common.CircularList
import commonshr.*
import killable.*
import music.GetUserSongState
import music.common.LocalSongs
import music.Playable
import musiclib.UserSongState
import rx.*
import rx.RxCalc.Companion.KillLast

typealias SongSource = RxIface<(suspend () -> Playable?)?>
typealias SongIncludeRx = (String) -> RxIface<Boolean>

fun HasKillSet.songSource(
    includeSong: RxIface<SongIncludeRx>,
    localSongsDB: LocalSongs
): SongSource {
    val songRing = CircularList<String>()
    val localSongs = localSongsDB.set

    class Wrap(
        val set: RxMutableSet<String>
    )
    val included = Var(Wrap(RxMutableSet()))


//    val kseq = kills.seq()
    includeSong.forEach(KillLast) { inc ->
        val incset = RxMutableSet<String>()

        localSongs.process { id ->
            inc(id).forEach { i ->
                if (i) {
                    incset += id
                } else {
                    incset -= id
                }
            }
            kills += { incset -= id }
        }

//        console.dir(incset)
        included.now = Wrap(incset)

//        kseq %= this.kill

    }

    localSongsDB.set.process { id ->
        songRing.insertItem(id)
        kills += { songRing.remove(id) }
    }

    songRing.moveHead()

    suspend fun next(): Playable? {
        while (included.now.set.isNotEmpty()) {
            val id = songRing.next

            if (id in included.now.set) {
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

    return rx {
        if (included().set.isEmptyRx()) {
            null
        } else {
            nextFn
        }
    }

}

private fun HasKillSet.getInclude(states: GetUserSongState, state: UserSongState): SongIncludeRx {
    val map = mutableMapOf<String, RxIface<Boolean>>()

    return { id ->
        map.getOrPut(id) {
            rx {
                states(id)() == state
            }
        }
    }
}

private sealed class IncludeState {
    object NoSongs: IncludeState()
    data class WithSongs(
        val songState: GetUserSongState,
        val new: SongIncludeRx,
        val like: SongIncludeRx
    ): IncludeState()
}
fun HasKillSet.songInclude(
    localSongs: LocalSongs,
    userSongs: RxIface<GetUserSongState?>
): RxIface<SongIncludeRx> {

    return rx {
        val songState = userSongs()

        if (songState == null) {
            IncludeState.NoSongs
        } else {
            fun getIncludeState(state: UserSongState) =
                getInclude(songState, state)

            val new = getIncludeState(UserSongState.New)
            val like = getIncludeState(UserSongState.Like)
            IncludeState.WithSongs(songState, new, like)
        }
    }.map { st ->
        when (st) {
            IncludeState.NoSongs -> {
                { Var(true) }
            }
            is IncludeState.WithSongs -> with(st) {
                val hasNew = localSongs.set.iterableRx().any { id ->
                    songState(id)() == UserSongState.New
                }

                if (hasNew) new else like
            }
        }
    }

}

