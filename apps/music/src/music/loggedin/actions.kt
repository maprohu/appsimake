package music.loggedin

import common.Some
import commonshr.Action
import commonshr.reportd
import commonshr.toFsDoc
import firebase.firestore.docRef
import firebase.firestore.save
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.await
import music.boot.Boot
import musiclib.StoreState
import musiclib.musicLib
import musiclib.storage
import org.w3c.files.Blob
import org.w3c.xhr.BLOB
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import rx.Var

fun LoggedIn.task(id: String, pr: Boot.SongProcess.() -> Var<Boolean>, fn: Action) {
    boot.task(
        boot.processOf(id).pr(),
        fn
    )
}

fun LoggedIn.upload(id: String) {
    task(id, {uploading}) {
        loggedIn.privileged {
            val file = boot.localSongs.load(id)
            if (file != null) {
                val store = StoreState()
                val storeDoc = store.toFsDoc(musicLib.app.storage, id)
                storeDoc.save()

                val ref = loggedIn.storageRef.child(id)
                ref.put(file).await()

                store.uploaded.now = true
                storeDoc.save()
            }
        }
    }
}

fun LoggedIn.download(id: String) {
    task(id, {downloading}) {
        loggedIn.privileged {

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
            boot.localSongs.addMp3(id, file)
        }
    }
}

fun LoggedIn.deleteFromLocal(id: String) {
    task(id, {deletingFromLocal}) {
        boot.localSongs.removeMp3(id)
    }
}

fun LoggedIn.deleteFromCloud(id: String) {
    task(id, {deletingFromCloud}) {
        loggedIn.privileged {
            musicLib.app.storage.doc(id).docRef(loggedIn.db).delete()
            storageRef.child(id).delete().await()
        }
    }
}

fun LoggedIn.checkStorage(id: String) {
    task(id, {checkingStorage}) {
        loggedIn.privileged {
            try {
                val tag = songInfoSource(id) { boot.localSongs.load(id) }
                tag.waitExtracted()
                val localSizeOpt = tag.bytes.initial.now

                if (localSizeOpt is Some) {
                    val localSize = localSizeOpt.value
                    val meta = storageRef.child(id).getMetadata().await()
                    val cloudSize = meta.size

                    require (localSize == cloudSize) {
                        "Cloud storage size does not match local file. id: $id cloud: $cloudSize local: $localSize"
                    }
                }
            } catch (e: dynamic) {
                console.dir(e.unsafeCast<Any())
                boot.slots.toasts {
                    error(e.message.unsafeCast<String>())
                }
            }
        }
    }
}



