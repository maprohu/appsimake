package music

import common.feedTo
import common.filtered
import commonlib.Actor
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

    override val start: Loop
        get() = offlineLoop(Transfers())


    data class Later(
        val downloads: Set<String> = setOf()
    ) {
        fun down(id: String) = copy(
            downloads = downloads + id
        )
    }
    data class Transfers(
        val later: Later = Later(),
        val uploads: List<String> = listOf(),
        val downloads: List<String> = listOf()
    ) {
        fun up(id: String) = copy(
            uploads = uploads + id
        )
        fun down(id: String) = copy(
            downloads = downloads + id
        )

    }

    fun Transfers.uploaded(id: String, fn: (Transfers) -> Loop): Iter {
        return if (id in later.downloads) {
            Change(
                fn(
                    copy(
                        later = later.let { l ->
                            l.copy(
                                downloads = l.downloads - id
                            )
                        }
                    ).down(id)
                )
            )
        } else {
            Same
        }
    }

    suspend fun Transfers.processOnline(): Iter {
        var c = this
        while (c.uploads.isNotEmpty()) {
            val id = uploads.first()
            c = c.copy(
                uploads = c.uploads.drop(1)
            )

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
                return Change(
                    uploadingLoop(
                        Uploading(
                            id,
                            task,
                            c
                        )
                    )
                )
            }

        }
        while (c.downloads.isNotEmpty()) {
            val id = c.downloads.first()
            c = c.copy(
                downloads = c.downloads.drop(1)
            )
            if (id !in uploaded) {
                c = c.copy(
                    later = c.later.down(id)
                )
            } else if (!idb.exists(Mp3Store, id)) {
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

                    idb.put(Mp3Store, id, file)

                    channel.send(Event.Downloaded(id))
                }

                return Change(
                    downloadingLoop(
                        Downloading(
                            id,
                            req,
                            c
                        )
                    )
                )
            }
        }

        return Change(
            onlineLoop(c.later)
        )
    }

    data class Uploading(
        val id: String,
        val task: UploadTask,
        val transfers: Transfers
    )
    data class Downloading(
        val id: String,
        val task: XMLHttpRequest,
        val transfers: Transfers
    )

    fun transferMixin(transfers: Transfers, fn: (Transfers) -> Loop) = mixin { e ->
        when (e) {
            is Event.Upload -> {
                Change(
                    fn(transfers.up(e.id))
                )
            }
            is Event.Download -> {
                Change(
                    fn(transfers.down(e.id))
                )
            }

            else -> null
        }
    }

    fun uploadedMixin(transfers: Transfers, fn: (Transfers) -> Loop) = mixin { e ->
        when (e) {
            is Event.Uploaded -> {
                transfers.uploaded(e.id, fn)
            }
            else -> null
        }
    }

    fun downloadingLoop(state: Downloading): Loop {
        val trfn = { t: Transfers ->
            downloadingLoop(
                state.copy(transfers = t)
            )
        }

        return transferMixin(state.transfers, trfn) or uploadedMixin(state.transfers, trfn) or { e ->
            when {
                e is Event.Downloaded && e.id == state.id -> {
                    state.transfers.processOnline()
                }
                e is Event.GoOffline -> {
                    state.task.abort()
                    Change(
                        offlineLoop(state.transfers.down(state.id))
                    )
                }
                else -> Same
            }
        }
    }
    fun uploadingLoop(state: Uploading): Loop {
        val trfn = { t: Transfers ->
            uploadingLoop(
                state.copy(transfers = t)
            )
        }

        return transferMixin(state.transfers, trfn) or mixin { e ->
            when {
                e is Event.Uploaded && e.id == state.id -> {
                    state.transfers.processOnline()
                }
                else -> null
            }
        } or uploadedMixin(state.transfers, trfn) or { e ->
            when (e) {
                is Event.GoOffline -> {
                    val canceled = state.task.cancel()
                    Change(
                        offlineLoop(
                            if (canceled) state.transfers.up(state.id)
                            else state.transfers
                        )
                    )
                }
                else -> Same
            }
        }
    }

    fun onlineLoop(later: Later): Loop = loop { e ->
        when (e) {
            is Event.Upload -> {
                Transfers(later).up(e.id).processOnline()
            }
            is Event.Download -> {
                Transfers(later).down(e.id).processOnline()
            }
            Event.GoOffline -> {
                Change(offlineLoop(Transfers(later)))
            }
            else -> Same
        }
    }
    fun offlineLoop(transfers: Transfers): Loop {
        onlineStatus.now = false
        return loop { e ->
            when (e) {
                is Event.Upload -> {
                    Change(offlineLoop(transfers.up(e.id)))
                }
                is Event.Download -> {
                    Change(offlineLoop(transfers.down(e.id)))
                }
                Event.GoOnline -> {
                    onlineStatus.now = true
                    transfers.processOnline()
                }
                else -> Same
            }
        }
    }


    init {
        GlobalScope.launch {
//            val allStorage =
                songStorageDB.queryCache.getAll()
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
                        val localExists = idb.exists(Mp3Store, id)
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