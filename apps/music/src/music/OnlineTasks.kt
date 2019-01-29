package music

import common.feedTo
import common.filtered
import commonlib.Actor
import commonlib.LoopT
import commonshr.SetAdded
import firebase.ids
import firebase.storage.Reference
import firebase.storage.UploadTask
import indexeddb.IDBDatabase
import indexeddb.exists
import indexeddb.put
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.files.Blob
import org.w3c.xhr.BLOB
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import rx.Var


class OnlineTasks(
    private val storageRef: Reference,
    private val idb: IDBDatabase,
    userSongsDB: UserSongsDB,
    private val songStorageDB: SongStorageDB,
    killables: Killables
): Actor<OnlineTasks.Event>(killables) {
    interface Loop: LoopT<Event>

    sealed class Event {
        object GoOnline: Event()
        object GoOffline: Event()
        class Upload(val id: String): Event()
        class Download(val id: String): Event()
        class Uploaded(val id: String): Event()
        class Downloaded(val id: String): Event()
    }

    val onlineStatus = Var(false)

    val storage = mutableSetOf<String>()
    val uploaded = mutableSetOf<String>()

    class Later {
        val downloads = mutableListOf<String>()
    }
    interface NetworkStateLoop: Loop {
        suspend fun processNext() {}
    }
    inner class Transfers: Loop {
        val later = Later()
        val uploads = mutableListOf<String>()
        val downloads = mutableListOf<String>()

        var networkState : NetworkStateLoop = OfflineLoop()

        suspend fun processOnline() {
            networkState = OnlineLoop()
            networkState.processNext()
        }

        inner class OfflineLoop: NetworkStateLoop {
            init {
                onlineStatus.now = false
            }
            override suspend fun process(e: Event) {
                when (e) {
                    is Event.GoOnline -> {
                        onlineStatus.now = true
                        processOnline()
                    }
                    else -> {}
                }
            }
        }
        inner class OnlineLoop: NetworkStateLoop {
            override suspend fun processNext() {
                while (uploads.isNotEmpty()) {
                    val id = uploads.removeAt(0)

                    val file = idb.readMp3(id)
                    if (file != null && id !in storage) {
                        val store = songStorageDB.get(id) {
                            uploaded.cv = false
                            count.cv = 1
                        }
                        val ref = storageRef.child(id)
                        val task = ref.put(file)
                        GlobalScope.launch {
                            task.await()
                            store.apply {
                                uploaded.cv = true
                                props.save()
                            }
                        }
                        networkState = UploadinLoop(id, task)
                    }

                }
                while (downloads.isNotEmpty()) {
                    val id = downloads.removeAt(0)
                    if (id !in uploaded) {
                        later.downloads += id
                    } else if (!idb.existsMp3(id)) {
                        val url = storageRef.child(id).getDownloadURL().await()
                        val res = CompletableDeferred<Blob>()
                        val req = XMLHttpRequest().apply {
                            responseType = XMLHttpRequestResponseType.BLOB
                            onload = {
                                res.complete(response.unsafeCast<Blob>())
                            }
                            open("GET", url)
                            send()
                        }

                        GlobalScope.launch {
                            val file = res.await()

                            idb.addMp3(id, file)

                            channel.send(Event.Downloaded(id))
                        }

                        networkState = DonwloadingLoop(id, req)
                    }
                }
            }

            override suspend fun process(e: Event) {
                when (e) {
                    is Event.GoOffline -> {
                        networkState = OfflineLoop()
                    }
                    else -> {}
                }
            }
        }
        inner class UploadinLoop(
            val id: String,
            val task: UploadTask
        ) : NetworkStateLoop {
            override suspend fun process(e: Event) {
                when (e) {
                    is Event.GoOffline -> {
                        if (task.cancel()) {
                            uploads += id
                        }
                        networkState = OfflineLoop()
                    }
                    is Event.Uploaded -> {
                        if (e.id == id) {
                            processOnline()
                        }
                    }
                    else -> {}
                }
            }
        }
        inner class DonwloadingLoop(
            val id: String,
            val task: XMLHttpRequest
        ) : NetworkStateLoop {
            override suspend fun process(e: Event) {
                when (e) {
                    is Event.Downloaded -> {
                        if (e.id == id) {
                            processOnline()
                        }
                    }
                    is Event.GoOffline -> {
                        task.abort()
                        downloads += id
                        networkState = OfflineLoop()
                    }
                    else -> {}
                }
            }

        }

        override suspend fun process(e: Event) {
            when (e) {
                is Event.Uploaded -> {
                    if (later.downloads.remove(e.id)) {
                        downloads += e.id
                    }
                }
                is Event.Upload -> {
                    uploads += e.id
                    networkState.processNext()
                }
                is Event.Download -> {
                    downloads += e.id
                    networkState.processNext()
                }
                else -> {}
            }
            networkState.process(e)
        }
    }





    init {
        root = Transfers()

        GlobalScope.launch {
//            val allStorage =
//            storage.addAll(
//                allStorage.map { it.props.idOrFail }
//            )
//            uploaded.addAll(
//                allStorage.filter { it.uploaded.iv }.map { it.props.idOrFail }
//            )
            killables += songStorageDB.queryCache.ids.feedTo(storage)
            val uploadedEmitter = songStorageDB.queryCache.emitter.filtered(killables) { s -> s.uploaded.iv }.ids
            killables += uploadedEmitter.feedTo(uploaded)
            killables += uploadedEmitter.add { m ->
                if (m is SetAdded) {
                    post(Event.Uploaded(m.value))
                }
            }

            killables += userSongsDB.like.add { m ->
                if (m is SetAdded) {
                    val id = m.value.props.idOrFail
                    GlobalScope.launch {
                        val localExists = idb.existsMp3(id)
                        val cloudExists = id in storage

                        if (localExists && !cloudExists) {
                            channel.send(Event.Upload(id))
                        } else if (!localExists) {
                            channel.send(Event.Download(id))
                        }
                    }
                }
            }
        }
    }





}