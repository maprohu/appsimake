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
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch


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

    }

    val storage = mutableSetOf<String>()
    val uploaded = mutableSetOf<String>()

    override val start: Loop
        get() = offline(Transfers())

    data class Transfers(
        val uploads: List<String> = listOf(),
        val downloads: List<String> = listOf(),
        val downloadLater: List<String> = listOf()
    )

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
                    uploading(
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
                    downloadLater = c.downloadLater + id
                )
            } else if (!idb.exists(Mp3Store, id)) {
                val ref = storageRef.child(id)
                ref.pu

            }

        }

    }

    data class Uploading(
        val id: String,
        val task: UploadTask,
        val transfers: Transfers
    )

    fun uploading(up: Uploading): Loop = loop { e ->
    }

    fun processOnline(transfers: Transfers): Iter {
        if (transfers.uploads.isNotEmpty())


    }

    fun online(transfers: Transfers): Loop = loop { e ->
    }
    fun offline(transfers: Transfers): Loop = loop { e ->
        when (e) {
            is Event.Upload -> {
                Change(
                    offline(
                        transfers.copy(
                            uploads = transfers.uploads + e.id
                        )
                    )
                )
            }
            is Event.Download -> {
                Change(
                    offline(
                        transfers.copy(
                            uploads = transfers.downloads + e.id
                        )
                    )
                )
            }
            Event.GoOnline -> {

            }
            else -> Same
        }
    }


    init {
        GlobalScope.launch {
            val allStorage = songStorageDB.queryCache.getAll()
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
                        val cloudUploaded = id in uploaded

                        if (localExists && !cloudExists) {
                            channel.send(Event.Upload(id))
                        } else if (!localExists && cloudExists) {
                            channel.send(Event.Download(id))
                        }
                    }
                }
            }
        }
    }





}