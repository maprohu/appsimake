package music

import common.None
import common.Optional
import common.Some
import commonlib.Actor
import commonlib.LoopT
import commonlib.commonlib.RandomChooser
import commonshr.SetAdded
import firebase.ids
import indexeddb.IDBDatabase
import indexeddb.getAllKeys
import killable.Killable
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.CompletableDeferred
import musiclib.Mp3File
import musiclib.UserSong
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import org.w3c.files.File

interface SongSource {
    suspend fun request(): Playable
}

class PlayableSource(
    val tag: Mp3File,
    val userSong: UserSong,
    val file: Blob
) {
    fun toPlayable(): Playable {
        val url = URL.createObjectURL(file)
        return Playable(
            tag = tag,
            userSong = userSong,
            url = url,
            killable = Killable.once {
                URL.revokeObjectURL(url)
            }
        )
    }

    companion object {
        suspend fun load(
            id: String,
            idb: IDBDatabase,
            tagDB: TagDB,
            userSongsDB: UserSongsDB
        ): PlayableSource? {
            val mp3 = idb.readMp3(id)

            return mp3?.let { f ->
                PlayableSource(
                    tag = tagDB.get(id, f),
                    userSong = userSongsDB.get(id),
                    file = f
                )
            }
        }

    }

}
class Playable(
    val tag: Mp3File,
    val userSong: UserSong,
    val url: String,
    killable: Killable
): Killable by killable {
//    companion object {
//        suspend fun load(
//            id: String,
//            idb: IDBDatabase,
//            tagDB: TagDB
//        ): Playable? {
//            val mp3 = idb.readMp3(id)
//
//            return mp3?.let { f ->
//                val url = URL.createObjectURL(f)
//                Playable(
//                    tag = tagDB.get(id, f),
//                    url = url,
//                    killable = Killable.once {
//                        URL.revokeObjectURL(url)
//                    }
//                )
//            }
//        }
//
//    }
}

class DefaultSongSource(
    val idb: IDBDatabase,
    val userSongsDB: UserSongsDB,
    val tagDB: TagDB,
    killables: Killables
): Actor<DefaultSongSource.Event>(killables), SongSource {

    interface Loop: LoopT<Event>

    init {
        root = StartLoop()


        killables += userSongsDB.new.add { m ->
            if (m is SetAdded) {
                post(
                    Event.New(m.value.props.idOrFail)
                )
            }
        }

        killables += LocalSongs.emitter.add { m ->
            if (m is SetAdded) {
                post(
                    Event.New(m.value)
                )
            }
        }

    }

    sealed class Event {
        class Request(val cd: CompletableDeferred<Playable>): Event()
        class New(val id: String): Event()
    }

    private var last: String? = null
    private val played = mutableSetOf<String>()
    suspend fun attempt(): PlayableSource? {
        return attemptOnce() ?: run {
            played.clear()
            last?.let { l -> played += l }
            attemptOnce()
        }
    }
    suspend fun attemptOnce(): PlayableSource? {
        val maybe = (userSongsDB.newSet - played).toMutableSet()

        while (maybe.isNotEmpty()) {
            val id = maybe.random()
            maybe -= id
            played += id

            val source = PlayableSource.load(id, idb, tagDB, userSongsDB)

            if (source != null) {
                last = id
                return  source
            }
        }

        return null
    }

    inner class WaitingLoop(cd: CompletableDeferred<Playable>): Loop {

        private val cds = mutableListOf(cd)

        override suspend fun process(e: Event) {
            when (e) {
                is Event.Request -> {
                    cds += e.cd
                }
                is Event.New -> {
                    val a = attempt()
                    if (a != null) {
                        cds.forEach { cd ->
                            cd.complete(a.toPlayable())
                        }
                        root = StartLoop()
                    }
                }
            }
        }
    }

    inner class StartLoop: Loop {
        override suspend fun process(e: Event) {
            when (e) {
                is Event.Request -> {
                    val a = attempt()
                    if (a == null) {
                        root = WaitingLoop(e.cd)
                    } else {
                        e.cd.complete(a.toPlayable())
                    }
                }
                else -> {}
            }
        }
    }


    override suspend fun request(): Playable {
        val cd = CompletableDeferred<Playable>()
        channel.send(Event.Request(cd))

//        val keys = idb.getAllKeys<String>(Mp3Store)
//        if (keys.isNotEmpty()) {
//            Playable.load(
//                keys.random(),
//                idb,
//                tagDB
//            )?.let {
//                cd.complete(it)
//            }
//        }

        return cd.await()
    }
}

fun randomSongSource(
    idb: IDBDatabase,
    tagDB: TagDB,
    userSongsDB: UserSongsDB
) = RandomChooser(
    listOf(
        userSongsDB.new.ids,
        userSongsDB.like.ids
    )
) { id, ks ->
    val l = PlayableSource.load(
        id,
        idb,
        tagDB,
        userSongsDB
    )

    if (l == null) {
        None
    } else {
        Some(l.toPlayable().addedTo(ks))
    }
}

