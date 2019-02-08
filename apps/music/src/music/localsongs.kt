package music

import common.Emitter
import common.feedTo
import common.obj
import common.toSetSource
import commonshr.SetAdded
import commonshr.SetMove
import commonshr.SetRemoved
import indexeddb.IDBDatabase
import indexeddb.await
import org.w3c.dom.MessageEvent
import org.w3c.files.Blob
import rx.RxIface
import rx.Var

private external interface LocalSongEvent {
    var id: String
    var type: LocalSongEventType
}
@Suppress("NESTED_CLASS_IN_EXTERNAL_INTERFACE")
private external interface LocalSongEventType {
    companion object
}
private inline val LocalSongEventType.Companion.added get() = "added".unsafeCast<LocalSongEventType>()
private inline val LocalSongEventType.Companion.removed get() = "removed".unsafeCast<LocalSongEventType>()

object LocalSongs {

    private var locals = Var(setOf<String>())
    private val e = Emitter<SetMove<String>>()
    val emitter = e.toSetSource { locals.now }

    val rxv: RxIface<Set<String>> = locals

    private fun emit(m: SetMove<String>) {
        val id = m.value
        when (m) {
            is SetAdded -> {
                if (id !in locals.now) {
                    locals.transform { it + id }
                    e.emit(m)
                }
            }
            is SetRemoved -> {
                if (id in locals.now) {
                    locals.transform { it - id }
                    e.emit(m)
                }
            }
        }
    }

    private val tabsChannel = org.w3c.dom.BroadcastChannel("appsimake-music-localSongs")

    init {
        tabsChannel.onmessage = { e ->
            val data = e.data.unsafeCast<LocalSongEvent>()

            emit(
                when (data.type) {
                    LocalSongEventType.added -> SetAdded(data.id)
                    LocalSongEventType.removed -> SetRemoved(data.id)
                    else -> throw Error("Unknown LocalSongEventType: ${data.type}")
                }
            )
        }
    }

    suspend fun init(idb: IDBDatabase) {
        locals.now = idb.readMp3Store().getAllKeys().await().toSet()
    }

    fun added(id: String) {
        tabsChannel.postMessage(
            obj<LocalSongEvent> {
                this.id = id
                this.type = LocalSongEventType.added
            }
        )
        emit(
            SetAdded(id)
        )
    }
    fun removed(id: String) {
        tabsChannel.postMessage(
            obj<LocalSongEvent> {
                this.id = id
                this.type = LocalSongEventType.removed
            }
        )
        emit(
            SetRemoved(id)
        )
    }

    suspend fun load(idb: IDBDatabase, id: String) : Blob? {
        val blob = idb.readMp3(id)
        if (blob == null) {
            emit(SetRemoved(id))
        }
        return blob

    }

}
