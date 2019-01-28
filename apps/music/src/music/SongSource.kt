package music

import commonlib.Actor
import commonshr.SetAdded
import indexeddb.IDBDatabase
import indexeddb.getAllKeys
import killable.Killable
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import musiclib.Mp3File
import org.w3c.dom.url.URL
import org.w3c.files.File

interface SongSource {
    suspend fun request(): Playable
}

class PlayableSource(
    val tag: Mp3File,
    val file: File
) {
    fun toPlayable(): Playable {
        val url = URL.createObjectURL(file)
        return Playable(
            tag = tag,
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
            tagDB: TagDB
        ): PlayableSource? {
            val mp3 = idb.readMp3(id)

            return mp3?.let { f ->
                PlayableSource(
                    tag = tagDB.get(id, f),
                    file = f
                )
            }
        }

    }

}
class Playable(
    val tag: Mp3File,
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

    override val start: Loop
        get() = startLoop()

    init {
        killables += userSongsDB.new.add { m ->
            if (m is SetAdded) {
                post(
                    Event.New(m.value.props.idOrFail)
                )
            }
        }
    }

    sealed class Event {
        class Request(val cd: CompletableDeferred<Playable>): Event()
        class New(val id: String): Event()


    }

    var last: String = ""

    val played = mutableSetOf<String>()
    suspend fun attempt(): PlayableSource? {
        return attemptOnce() ?: run {
            played.clear()
            attemptOnce()
        }
    }
    suspend fun attemptOnce(): PlayableSource? {
        val maybe = (userSongsDB.newSet - played - last).toMutableSet()

        while (maybe.isNotEmpty()) {
            val id = maybe.random()
            maybe -= id
            played += id

            val source = PlayableSource.load(id, idb, tagDB)

            if (source != null) {
                last = id
                return  source
            }
        }

        return null
    }

    data class WaitingState(
        val cds: List<CompletableDeferred<Playable>>
    )

    fun waitingLoop(waiting: WaitingState): Loop = loop { e ->
        when (e) {
            is Event.Request -> {
                Change(waitingLoop(waiting.copy(cds = waiting.cds + e.cd)))
            }
            is Event.New -> {
                val a = attempt()
                if (a == null) {
                    Same
                } else {
                    waiting.cds.forEach { cd ->
                        cd.complete(a.toPlayable())
                    }
                    Change(startLoop())
                }
            }
        }
        Same
    }

    fun startLoop() = loop { e ->
        when (e) {
            is Event.Request -> {
                val a = attempt()
                if (a == null) {
                    Change(waitingLoop(WaitingState(listOf(e.cd))))
                } else {
                    e.cd.complete(a.toPlayable())
                    Same
                }
            }
            else -> Same
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
