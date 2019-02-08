package music.data

import common.None
import common.Optional
import common.CircularList
import common.Some
import commonshr.SetAdded
import commonshr.SetMove
import commonshr.SetRemoved
import indexeddb.IDBDatabase
import killable.*
import music.LocalSongs
import music.Playable
import music.UserSongsDB
import musiclib.UserSong
import musiclib.UserSongState
import rx.Rx
import rx.RxIface
import rx.Var

interface PlayableProvider {
    suspend operator fun invoke(): Playable?
}
typealias SongSource = RxIface<PlayableProvider?>


fun loggedInSongSourceInclude(
    ks: KillSet,
    userSongsDB: UserSongsDB
): RxIface<Set<String>> {
    data class Songs(
        val new: Set<String> = emptySet(),
        val like: Set<String> = emptySet()
    ) {
        fun like(fn: (Set<String>) -> Set<String>) = copy(like = fn(like))
        fun new(fn: (Set<String>) -> Set<String>) = copy(new = fn(new))
        fun modify(state: Optional<UserSongState>, fn: (Set<String>) -> Set<String>) = when (state) {
            None, Some(UserSongState.New) -> new(fn)
            Some(UserSongState.Like) -> like(fn)
            else -> this
        }
        fun add(state: Optional<UserSongState>, id: String) = modify(state) { it + id }
        fun remove(state: Optional<UserSongState>, id: String) = modify(state) { it - id }
    }
    val songs = Var(Songs())
    val kills = mutableMapOf<UserSong, Trigger>()

    fun process(m: SetMove<UserSong>) {
        val v = m.value
        val id = v.props.idOrFail
        when (m) {
            is SetAdded -> {
                val uks = ks.killables()
                kills[v] = uks.toTrigger()
                v.state.initial.now.let { st ->
                    songs.transform { it.add(st, id) }
                }
                v.state.initial.onChange { old, new ->
                    songs.transform {
                        it.remove(old, id).add(new, id)
                    }
                }.addedTo(uks)
            }
            is SetRemoved -> {
                kills.getValue(v)()
                v.state.initial.now.let { st ->
                    songs.transform { it.remove(st, id) }
                }
            }
        }
    }

    userSongsDB.source.listen(ks) { process(it) }.forEach { process(SetAdded(it)) }


    return Rx {
        val s = songs()
        val local = LocalSongs.rxv()

        if (s.new.intersect(local).isNotEmpty()) {
            s.new
        } else {
            s.like
        }
    }.addedTo(ks)
}

fun songSource(
    ks: KillSet,
    includeSongs: RxIface<Set<String>>,
    idb: IDBDatabase
): SongSource {
    val songRing = CircularList<String>()
    val localSongs = LocalSongs.rxv
    fun process(m: SetMove<String>) {
        val v = m.value
        when (m) {
            is SetAdded -> {
                songRing.insertItem(v)
            }
            is SetRemoved -> {
                songRing.remove(v)
            }
        }
    }
    LocalSongs.emitter.listen(ks) { m ->
        process(m)
    }.forEach {
        process(SetAdded(it))
    }

    songRing.moveHead()

    val available = Rx {
        includeSongs() intersect localSongs()
    }.addedTo(ks)

    suspend fun next(): Playable? {
        while (available.now.isNotEmpty()) {
            val id = songRing.next

            if (id in includeSongs.now) {
                val blob = LocalSongs.load(idb, id)

                if (blob != null) {
                    return Playable(id, blob)
                }
            }
        }
        return null
    }

    return Rx {
        val av = available()

        if (av.isEmpty()) {
            null
        } else {
            object : PlayableProvider {
                override suspend fun invoke(): Playable? {
                    return next()
                }
            }
        }
    }.addedTo(ks)

}

//fun songIdSource(
//    kills: KillSet,
//    exclude: RxIface<Set<String>>
//    vararg sources: SetSource<String>
//): ReceiveChannel<String> {
//    val randoms = sources.map { s ->
//        RandomSource(kills, s, exclude)
//    }
//
//    val first = Rx {
//        randoms.find { it.available() }
//    }
//}
//
//fun loggedInSongSource(
//    userSongsDB: UserSongsDB
//) {
//    val likes = Var()
//
//}



//class SongSource(
//    val channel: ReceiveChannel<String>,
//    val set: Assign<List<SetSource<String>>>
//) {
//    companion object {
//        operator fun invoke(ks: KillSet): SongSource {
//            val exclude = mutableSetOf<String>()
//
//            val channel = Channel<String>(Channel.RENDEZVOUS)
//
//            val kseq = ks.seq()
//
//            return SongSource(channel) { chs ->
//                val cks = kseq.killSet()
//
//                val src = songIdSource(cks, exclude, *chs.toTypedArray())
//
//                GlobalScope.launch {
//                    for (id in src) {
//                        exclude.clear()
//                        exclude += id
//                        channel.send(id)
//                    }
//                }.addedTo(cks)
//            }
//
//        }
//    }
//}
//

