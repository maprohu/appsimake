package music

import common.None
import common.Optional
import common.Some
import commonlib.Actor
import commonlib.LoopT
import commonlib.commonlib.RandomChooser
import commonshr.SetAdded
import firebaseshr.ids
import indexeddb.IDBDatabase
import indexeddb.getAllKeys
import killable.Killable
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.CompletableDeferred
import music.data.SongInfoSource
import musiclib.Mp3File
import musiclib.UserSong
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import org.w3c.files.File

class Playable(
    val id: String,
    val blob: Blob
) {

    val PlayOrPause = object {}
    val Beginning = object{}
    val End = object{}
    val Forward = object{}
    val Backward = object{}
    val Like = object{}
    val DontLike = object{}

}

//class DefaultSongSource(
//    val idb: IDBDatabase,
//    val userSongsDB: UserSongsDB,
//    val tagDB: TagDB,
//    killables: Killables
//): Actor<DefaultSongSource.Event>(killables), SongSource {
//
//    interface Loop: LoopT<Event>
//
//    init {
//        root = StartLoop()
//
//
//        killables += userSongsDB.new.add { m ->
//            if (m is SetAdded) {
//                post(
//                    Event.New(m.value.props.idOrFail)
//                )
//            }
//        }
//
//        killables += LocalSongs.emitter.add { m ->
//            if (m is SetAdded) {
//                post(
//                    Event.New(m.value)
//                )
//            }
//        }
//
//    }
//
//    sealed class Event {
//        class Request(val cd: CompletableDeferred<Playable>): Event()
//        class New(val id: String): Event()
//    }
//
//    private var last: String? = null
//    private val played = mutableSetOf<String>()
//    suspend fun attempt(): PlayableSource? {
//        return attemptOnce() ?: run {
//            played.clear()
//            last?.let { l -> played += l }
//            attemptOnce()
//        }
//    }
//    suspend fun attemptOnce(): PlayableSource? {
//        val maybe = (userSongsDB.newSet - played).toMutableSet()
//
//        while (maybe.isNotEmpty()) {
//            val id = maybe.random()
//            maybe -= id
//            played += id
//
//            val source = PlayableSource.load(id, idb, tagDB, userSongsDB)
//
//            if (source != null) {
//                last = id
//                return  source
//            }
//        }
//
//        return null
//    }
//
//    inner class WaitingLoop(cd: CompletableDeferred<Playable>): Loop {
//
//        private val cds = mutableListOf(cd)
//
//        override suspend fun process(e: Event) {
//            when (e) {
//                is Event.Request -> {
//                    cds += e.cd
//                }
//                is Event.New -> {
//                    val a = attempt()
//                    if (a != null) {
//                        cds.forEach { cd ->
//                            cd.complete(a.toPlayable())
//                        }
//                        root = StartLoop()
//                    }
//                }
//            }
//        }
//    }
//
//    inner class StartLoop: Loop {
//        override suspend fun process(e: Event) {
//            when (e) {
//                is Event.Request -> {
//                    val a = attempt()
//                    if (a == null) {
//                        root = WaitingLoop(e.cd)
//                    } else {
//                        e.cd.complete(a.toPlayable())
//                    }
//                }
//                else -> {}
//            }
//        }
//    }
//
//
//    override suspend fun request(): Playable {
//        val cd = CompletableDeferred<Playable>()
//        channel.send(Event.Request(cd))
//
////        val keys = idb.getAllKeys<String>(Mp3Store)
////        if (keys.isNotEmpty()) {
////            Playable.load(
////                keys.random(),
////                idb,
////                tagDB
////            )?.let {
////                cd.complete(it)
////            }
////        }
//
//        return cd.await()
//    }
//}

//fun localSongSource(
//    idb: IDBDatabase,
//    tagDB: TagDB
//) = RandomChooser(
//    listOf(
//        LocalSongs.emitter
//    )
//) { id, ks ->
//    val l = PlayableSource.load(
//        id,
//        idb,
//        tagDB
//    )
//
//    if (l == null) {
//        None
//    } else {
//        Some(l.toPlayable().addedTo(ks))
//    }
//}
//
//fun randomSongSource(
//    idb: IDBDatabase,
//    tagDB: TagDB,
//    userSongsDB: UserSongsDB
//) = RandomChooser(
//    listOf(
//        userSongsDB.new.ids,
//        userSongsDB.like.ids
//    )
//) { id, ks ->
//    val l = PlayableSource.load(
//        id,
//        idb,
//        tagDB
//    )
//
//    if (l == null) {
//        None
//    } else {
//        Some(l.toPlayable().addedTo(ks))
//    }
//}

