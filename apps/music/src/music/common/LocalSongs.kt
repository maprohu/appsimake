package music.common

import common.obj
import commonshr.SetAdded
import commonshr.SetMove
import commonshr.SetRemoved
import commonshr.plusAssign
import commonui.widget.JobKillsImpl
import commonui.widget.JobScope
import indexeddb.*
import kotlinx.coroutines.CompletableDeferred
import music.Mp3Store
import org.w3c.files.Blob
import rx.RxMutableSet
import rx.RxSet

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

class LocalSongs(parent: JobScope, val idb: IDBDatabase, initial: Set<String>): JobKillsImpl(parent) {

    companion object {
        suspend operator fun invoke(parent: JobScope, idb: IDBDatabase): LocalSongs {
            return LocalSongs(
                parent,
                idb,
                idb.readMp3Store().getAllKeys().await().toSet()
            )
        }
    }

    private val mutableSet = RxMutableSet(initial.toMutableSet())
    val set : RxSet<String> = mutableSet

    private fun emit(m: SetMove<String>) {
        m.applyTo(mutableSet)
    }

    private val tabsChannel = org.w3c.dom.BroadcastChannel("appsimake-music-localSongs").also {
        kills += { it.close() }
    }

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

    suspend fun load(id: String) : Blob? {
        val blob = idb.readMp3(id)
        if (blob == null) {
            emit(SetRemoved(id))
        }
        return blob

    }

    suspend fun addMp3(id: String, blob: Blob) {
        idb.writeMp3Store().put(blob, id).await()
        added(id)
    }
    suspend fun removeMp3(id: String) {
        idb.writeMp3Store().delete(id).await()
        removed(id)
    }
    suspend fun clearMp3s() {
        val cd = CompletableDeferred<Unit>()
        val st = idb.writeMp3Store()
        st.getAllKeys().then { keys ->
            st.clear().then {
                keys.forEach { id ->
                    removed(id)
                }
                cd.complete(Unit)
            }
        }
        cd.await()
    }

}

fun IDBDatabase.readMp3Store() = transaction(Mp3Store).objectStore<String, Blob>(Mp3Store)
fun IDBDatabase.writeMp3Store() = transaction(Mp3Store, TransactionMode.readwrite).objectStore<String, Blob>(Mp3Store)
suspend fun IDBDatabase.readMp3(hash: String) = readMp3Store().get(hash).await()
suspend fun IDBDatabase.existsMp3(hash: String) = exists(Mp3Store, hash)
