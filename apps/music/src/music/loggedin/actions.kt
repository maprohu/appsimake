package music.loggedin

import common.Some
import commonfb.save
import commonshr.Action
import commonshr.reportd
import firebase.firestore.docRef
import firebaseshr.waitExtracted
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
    path.boot.task(
        path.boot.processOf(id).pr(),
        fn
    )
}

fun LoggedIn.upload(id: String) {
    task(id, {uploading}) {
        path.loggedIn.privileged {
            val file = path.boot.localSongs.load(id)
            if (file != null) {
                val store = StoreState().apply {
                    props.persisted(
                        musicLib.app.storage.doc(id)
                    )

                    uploaded.cv = false
                    save(path.loggedIn.db)
                    props.clearDirty()
                }

                val ref = path.loggedIn.storageRef.child(id)
                ref.put(file).await()
                store.apply {
                    uploaded.cv = true
                    save(path.loggedIn.db)
                    props.clearDirty()
                }
            }
        }
    }
}

fun LoggedIn.download(id: String) {
    task(id, {downloading}) {
        path.loggedIn.privileged {

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
            path.boot.localSongs.addMp3(id, file)
        }
    }
}

fun LoggedIn.deleteFromLocal(id: String) {
    task(id, {deletingFromLocal}) {
        path.boot.localSongs.removeMp3(id)
    }
}

fun LoggedIn.deleteFromCloud(id: String) {
    task(id, {deletingFromCloud}) {
        path.loggedIn.privileged {
            musicLib.app.storage.doc(id).docRef(path.loggedIn.db).delete()
            storageRef.child(id).delete().await()
        }
    }
}

fun LoggedIn.checkStorage(id: String) {
    task(id, {checkingStorage}) {
        path.loggedIn.privileged {
            try {
                val tag = songInfoSource(id) { path.boot.localSongs.load(id) }
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
                path.boot.slots.toasts {
                    error(e.message.unsafeCast<String>())
                }
            }
        }
    }
}



