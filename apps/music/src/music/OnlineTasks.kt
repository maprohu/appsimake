package music

import bootstrap.btnDanger
import bootstrap.btnSuccess
import bootstrap.m1
import common.feedTo
import common.filtered
import common.map
import commonlib.Actor
import commonlib.LoopT
import commonlib.addedTo
import commonlib.toAsync
import commonshr.SetAdded
import commonui.faButton
import domx.Cls
import domx.clickEvent
import domx.cls
import firebase.ids
import firebase.storage.Reference
import firebase.storage.UploadTask
import fontawesome.Fa
import fontawesome.cloud
import indexeddb.IDBDatabase
import indexeddb.exists
import indexeddb.put
import killable.Killables
import killable.addedTo
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.Node
import org.w3c.files.Blob
import org.w3c.xhr.BLOB
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import rx.Var
import rx.rxClass


class OnlineTasks(
    private val storageRef: Reference,
    private val idb: IDBDatabase,
    private val songStorageDB: SongStorageDB,
    private val transferSongs: TransferSongs,
    private val killables: Killables
): Actor<OnlineTasks.Event>(killables) {
    interface Loop: LoopT<Event>

    sealed class Event {
        object GoOnline: Event()
        object GoOffline: Event()
//        class Uploaded(val id: String): Event()
//        class Downloaded(val id: String): Event()
    }

    val onlineStatus = Var(false)

    sealed class Transfer(val id: String) {
        class Upload(id: String): Transfer(id)
        class Download(id: String): Transfer(id)
    }

    inner class OnlineLoop: Loop {
        val ks = killables.killables()

        init {
            val emitter = toAsync<Transfer>(
                transferSongs.upload.map { m -> m.map { i -> Transfer.Upload(i) } },
                transferSongs.download.map { m -> m.map { i -> Transfer.Download(i) } }
            ).addedTo(ks)

            GlobalScope.launch {
                while (true) {
                    val tr = emitter.receive()
                    val id = tr.id

                    when (tr) {
                        is Transfer.Upload -> {
                            val file = idb.readMp3(id)
                            val store = songStorageDB.get(id) {
                                uploaded.cv = false
                                count.cv = 1
                            }
                            if (file != null && !store.uploaded.iv) {
                                val ref = storageRef.child(id)
                                ref.put(file).await()
                                store.apply {
                                    uploaded.cv = true
                                    props.save()
                                }
                            }
                        }
                        is Transfer.Download -> {
                            val url = storageRef.child(id).getDownloadURL().await()
                            val res = CompletableDeferred<Blob>()
                            XMLHttpRequest().apply {
                                responseType = XMLHttpRequestResponseType.BLOB
                                onload = {
                                    res.complete(response.unsafeCast<Blob>())
                                }
                                open("GET", url)
                                send()
                            }
                            val file = res.await()
                            idb.addMp3(id, file)
                        }
                    }
                }

            }.addedTo(ks)
        }

        override suspend fun process(e: Event) {
            when (e) {
                is Event.GoOffline -> {
                    ks.kill()
                    root = OfflineLoop()
                }
                else -> {}
            }
        }
    }
    inner class OfflineLoop: Loop {
        init {
            onlineStatus.now = false
        }
        override suspend fun process(e: Event) {
            when (e) {
                is Event.GoOnline -> {
                    onlineStatus.now = true
                    root = OnlineLoop()
                }
                else -> {}
            }
        }
    }

    init {
        root = OfflineLoop()
    }
}

fun Node.onlineStatusButton(
    onlineTasks: OnlineTasks,
    killables: Killables,
    fn: HTMLButtonElement.() -> Unit = {}
): HTMLButtonElement {
    return faButton(Fa.cloud) {
        rxClass {
            if (onlineTasks.onlineStatus()) {
                Cls.btnSuccess
            } else {
                Cls.btnDanger
            }
        }.addedTo(killables)
        clickEvent {
            onlineTasks.apply {
                post(
                    if (onlineStatus.now) OnlineTasks.Event.GoOffline
                    else OnlineTasks.Event.GoOnline
                )
            }
        }
        fn()
    }

}