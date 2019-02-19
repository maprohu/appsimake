package music.loggedin

import commonfb.save
import firebase.firestore.docRef
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.await
import musiclib.StoreState
import musiclib.musicLib
import musiclib.storage
import org.w3c.files.Blob
import org.w3c.xhr.BLOB
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType

fun LoggedIn.upload(id: String) {
    val process = path.boot.processOf(id).uploading
    path.boot.task(process) {
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
    val process = path.boot.processOf(id).downloading
    path.boot.task(process) {
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
    val process = path.boot.processOf(id).deletingFromLocal
    path.boot.task(process) {
        path.boot.localSongs.removeMp3(id)
    }
}

fun LoggedIn.deleteFromCloud(id: String) {
    val process = path.boot.processOf(id).deletingFromCloud
    path.boot.task(process) {
        path.loggedIn.privileged {
            musicLib.app.storage.doc(id).docRef(path.loggedIn.db).delete()
            storageRef.child(id).delete().await()
        }
    }
}

