package music.common

import common.*
import commonshr.plusAssign
import commonui.widget.JobKillsImpl
import commonui.widget.JobScope
import indexeddb.*
import kotlinx.coroutines.await
import music.Mp3Store
import music.Playable
import org.w3c.files.Blob
import rx.RxMutableSet
import rx.RxSet
import kotlin.browser.window

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

interface LocalSongStorage {
    val name: String
    suspend fun usageInfo(): UsageAndQuota?

    suspend fun readMp3(id: String): Blob?
    suspend fun writeMp3(id: String, blob: Blob)
    suspend fun deleteMp3(id: String)
    suspend fun listMp3s(): Set<String>
}

class IDBLocalSongStorage(val idb: IDBDatabase): LocalSongStorage {
    override val name = "IndexedDB"

    override suspend fun usageInfo(): UsageAndQuota? {
        return if (isStorageManagerSupported) {
            window.navigator.storage.estimate().await().let { e ->
                UsageAndQuota(
                    usage = e.usage,
                    quota = e.quota
                )
            }
        } else {
            null
        }
    }

    override suspend fun readMp3(id: String): Blob? = idb.readMp3(id)
    override suspend fun writeMp3(id: String, blob: Blob) = idb.writeMp3Store().put(blob, id).await()
    override suspend fun deleteMp3(id: String) = idb.writeMp3Store().delete(id).await()
    override suspend fun listMp3s(): Set<String> = idb.readMp3Store().getAllKeys().await().toSet()
}

class FileSystemLocalSongStorage(val dir: FileSystemDirectoryEntry): LocalSongStorage {
    override val name = "FileSystem"

    override suspend fun usageInfo(): UsageAndQuota? {
        return window.navigator.withQuota.webkitPersistentStorage.queryUsageAndQuota()
    }

    companion object {
        suspend fun create(fs: FileSystem): FileSystemLocalSongStorage {
            return FileSystemLocalSongStorage(fs.root.getDirectory("mp3s"))
        }
    }

    override suspend fun readMp3(id: String): Blob? {
        return try {
            dir.getFile(id, obj { create = false } )
        } catch (d: dynamic) {
            return null
        }.file()
    }

    override suspend fun writeMp3(id: String, blob: Blob) {
        dir.writeFile(id, blob)
    }

    override suspend fun deleteMp3(id: String) {
        dir.getFile(id, obj { create = false } ).remove()
    }

    override suspend fun listMp3s(): Set<String> {
        return dir.createReader().readEntries().filter { it.isFile }.map { it.name }.toSet()
    }

}

class LocalSongs(parent: JobScope, val storage: LocalSongStorage, initial: Set<String>): JobKillsImpl(parent) {

    companion object {
        suspend operator fun invoke(parent: JobScope, str: LocalSongStorage): LocalSongs {
            return LocalSongs(
                parent,
                str,
                str.listMp3s()
            )
        }
    }

    private val mutableSet = RxMutableSet(initial.toMutableSet())
    val set : RxSet<String> = mutableSet

    private val tabsChannel = org.w3c.dom.BroadcastChannel("appsimake-music-localSongs").also {
        kills += { it.close() }
    }

    init {
        tabsChannel.onmessage = { e ->
            val data = e.data.unsafeCast<LocalSongEvent>()

            when (data.type) {
                LocalSongEventType.added -> mutableSet += data.id
                LocalSongEventType.removed -> mutableSet -= data.id
                else -> throw Error("Unknown LocalSongEventType: ${data.type}")
            }
        }
    }


    fun added(id: String) {
        tabsChannel.postMessage(
            obj<LocalSongEvent> {
                this.id = id
                this.type = LocalSongEventType.added
            }
        )
        mutableSet += id
    }
    fun removed(id: String) {
        tabsChannel.postMessage(
            obj<LocalSongEvent> {
                this.id = id
                this.type = LocalSongEventType.removed
            }
        )
        mutableSet -= id
    }

    suspend fun load(id: String) : Blob? {
        val blob = storage.readMp3(id)
        if (blob == null) {
            mutableSet -= id
        }
        return blob

    }

    suspend fun addMp3(playable: Playable) {
        addMp3(playable.id, playable.blob)
    }
    suspend fun addMp3(id: String, blob: Blob) {
        storage.writeMp3(id, blob)
        added(id)
    }
    suspend fun removeMp3(id: String) {
        storage.deleteMp3(id)
        removed(id)
    }
//    suspend fun clearMp3s() {
//        val cd = CompletableDeferred<Unit>()
//        val st = idb.writeMp3Store()
//        st.getAllKeys().then { keys ->
//            st.clear().then {
//                keys.forEach { id ->
//                    removed(id)
//                }
//                cd.complete(Unit)
//            }
//        }
//        cd.await()
//    }

}

fun IDBDatabase.readMp3Store() = transaction(Mp3Store).objectStore<String, Blob>(Mp3Store)
fun IDBDatabase.writeMp3Store() = transaction(Mp3Store, TransactionMode.readwrite).objectStore<String, Blob>(Mp3Store)
suspend fun IDBDatabase.readMp3(hash: String) = readMp3Store().get(hash).await()
suspend fun IDBDatabase.existsMp3(hash: String) = exists(Mp3Store, hash)
