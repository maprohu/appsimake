package music.data

import common.Optional
import common.Some
import commonfb.*
import domx.audio
import domx.invoke
import firebase.firestore.Firestore
import firebase.firestore.docRef
import firebaseshr.asExtracted
import killable.HasKillSet
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import music.Playable
import music.extractMp3Tag
import musiclib.Mp3File
import musiclib.musicLib
import musiclib.songs
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import rx.RxIface
import rx.Var
import kotlin.browser.document

typealias SongInfoSource = (String, suspend () -> Blob?) -> Mp3File

fun localSongInfoSource(): SongInfoSource {
    val map = mutableMapOf<String, Mp3File>()
    return { id, blob ->
        map.getOrPut(id) {
            Mp3File().apply {
                GlobalScope.launch {
                    blob()?.let { b ->
                        initFrom(b)
                        props.clearDirty()
                    }
                }
            }
        }
    }
}

fun HasKillSet.cloudSongInfoSource(
    db: Firestore = FB.db
): SongInfoSource {
    val map = mutableMapOf<String, Mp3File>()
    return { id, blob ->
        map.getOrPut(id) {
            Mp3File().apply {
                val ref = musicLib.app.songs.doc(id)
                props.persisted(ref)
                listenToSnapshots(kills, db)
                props.isDeleted.forEach { d ->
                    if (d) {
                        GlobalScope.launch {
                            blob()?.let { b ->
                                initFrom(b)
                                save(db)
                                props.clearDirty()
                            }
                        }
                    }
                }
            }
        }
    }
}

suspend fun Mp3File.initFrom(blob: Blob) {
    val buffer = blob.readAsArrayBuffer()

    val tag = buffer.extractMp3Tag()

    val audioLoaded = CompletableDeferred<Double>()
    val audioSrc = URL.createObjectURL(blob)
    val audioElement = document.audio {
        src = audioSrc
        ondurationchange = {
            audioLoaded.complete(duration)
        }
        load()
    }
    val duration = audioLoaded.await()
    audioElement.src = ""
    URL.revokeObjectURL(audioSrc)

    fun List<String>.join(): String {
        return map { it.trim() }
            .filter { it.isNotBlank() }
            .distinct()
            .joinToString("; ")
    }

    this.artist.cv = tag.artist.join()
    this.title.cv = tag.title.join()
    this.bytes.cv = blob.size
    this.secs.cv = duration
    this.props.markAsExtracted()

}


