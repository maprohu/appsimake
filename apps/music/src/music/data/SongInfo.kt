package music.data

import commonfb.*
import domx.audio
import domx.invoke
import firebase.firestore.Firestore
import killable.HasKillSet
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import musiclib.musicLib
import musiclib.songs
import kotlin.browser.document
import commonfb.FB
import musiclib.Mp3File
import org.khronos.webgl.ArrayBuffer
import org.w3c.dom.url.URL
import org.w3c.files.Blob

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


data class Mp3Tag(
    val artist: List<String> = emptyList(),
    val title: List<String> = emptyList()
)

fun ArrayBuffer.extractMp3Tag(): Mp3Tag {
    return try {
        val tag = id3v2_3(this)

        val artists = listOf(
            Frames.TPE1,
            Frames.TPE2,
            Frames.TPE3,
            Frames.TPE4
        )
        val titles = listOf(
            Frames.TIT1,
            Frames.TIT2,
            Frames.TIT3
        )

        fun list(frs: List<Frames.Frame>): List<String> {
            return frs
                .flatMap { fr ->
                    tag.text.getOrElse(fr.name) { listOf() }
                }
        }

        Mp3Tag(
            artist = list(artists),
            title = list(titles)
        )
    } catch (e: Throwable) {
        try {
            val tag = id3v1(this)

            Mp3Tag(
                artist = listOf(tag.artist),
                title = listOf(tag.title)
            )
        } catch (e: Throwable) {
            Mp3Tag()
        }
    }

}
