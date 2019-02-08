package music.data

import common.Either
import common.Optional
import common.Some
import commonfb.FB
import commonfb.LazyCache
import commonfb.initFrom
import commonfb.lazy
import domx.audio
import domx.invoke
import firebase.firestore.Firestore
import firebaseshr.saveIfDirty
import killable.KillSet
import kotlinx.coroutines.CompletableDeferred
import music.extractMp3Tag
import music.readAsArrayBuffer
import musiclib.Mp3File
import musiclib.musicLib
import musiclib.songs
import org.khronos.webgl.ArrayBuffer
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import rx.RxIface
import rx.Var
import kotlin.browser.document

typealias SongInfoSource = suspend (String, Blob) -> RxIface<Optional<Mp3File>>

fun localSongInfoSource(): SongInfoSource {
    val map = mutableMapOf<String, Mp3File>()
    return { id, blob ->
        map.getOrPut(id) {
            Mp3File().apply {
                initFrom(blob)
                props.clearDirty()
            }
        }.let { Var(Some(it)) }
    }
}

fun cloudSongInfoSource(
    ks: KillSet,
    db: Firestore = FB.db
): SongInfoSource {
    val cache = musicLib.app.songs.lazy(ks, db) { Mp3File() }
    return { id, blob ->
        val tag = cache(id)

        if (tag.now.isEmpty()) {
            Mp3File().apply {
                initFrom(blob)
                props.apply {
                    persisted(
                        musicLib.app.songs.doc(id)
                    )

                    @Suppress("DeferredResultUnused")
                    save()
                }
            }
        }

        tag
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
}


