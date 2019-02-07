package music.data

import common.Either
import commonfb.FB
import commonfb.initFrom
import domx.audio
import domx.invoke
import firebase.firestore.Firestore
import firebaseshr.saveIfDirty
import kotlinx.coroutines.CompletableDeferred
import music.extractMp3Tag
import music.readAsArrayBuffer
import musiclib.Mp3File
import musiclib.musicLib
import musiclib.songs
import org.khronos.webgl.ArrayBuffer
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import kotlin.browser.document

typealias SongInfoSource = suspend (String) -> Either<Mp3File, suspend (Blob) -> Mp3File>

suspend fun SongInfoSource.get(id: String, blob: Blob): Mp3File {
    val ei = this(id)
    return when (ei) {
        is Either.Left -> ei.value
        is Either.Right -> ei.value(blob)
    }
}

fun songInfoSource(
    db: Firestore = FB.db
): SongInfoSource = { id ->
    val dw = musicLib.app.songs.doc(id)

    val mp3 = Mp3File()

    if (mp3.initFrom(dw, db)) {
        Either.Left(mp3)
    } else {
        Either.Right { b ->
            mp3.apply {
                initFrom(b)
                saveIfDirty()
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
}


