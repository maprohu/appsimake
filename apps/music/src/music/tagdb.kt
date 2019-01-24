package music

import common.ListenableList
import common.ListenableMutableList
import domx.audio
import domx.invoke
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import musiclib.Mp3File
import musiclib.music
import musiclib.songs
import org.khronos.webgl.ArrayBuffer
import org.w3c.dom.url.URL
import org.w3c.files.Blob
import kotlin.browser.document

class TagDB(
    private val db: Firestore,
    killables: Killables
) {
    private val songsWrap = music.app.songs

    private val map = mutableMapOf<String, CompletableDeferred<Mp3File>>()

    init {
        val list = ListenableMutableList<Mp3File>()

        list.addListener(
            ListenableList.Listener(
                added = { _, t ->
                    map.getOrPut(
                        t.props.idOrFail
                    ) {
                        CompletableDeferred()
                    }.complete(t)
                },
                removed = { _, t ->
                    map -= t.props.idOrFail
                }
            )
        )

        songsWrap.query(db).listen(
            killables,
            ListenConfig.hasProps(
                list,
                songsWrap
            ) {
                Mp3File()
            }
        )

    }

    suspend fun get(hash: String, file: suspend () -> Pair<Blob, ArrayBuffer>): Mp3File {
        val current = map[hash]

        return if (current == null) {
            val def = CompletableDeferred<Mp3File>()
            map[hash] = def

            val ff = file()
            val f = ff.first
            val buffer = ff.second

            val tag = buffer.extractMp3Tag()

            val audioLoaded = CompletableDeferred<Double>()
            val audioSrc = URL.createObjectURL(f)
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

            val mp3File = Mp3File().apply {
                this.artist.cv = tag.artist.join()
                this.title.cv = tag.title.join()
                this.bytes.cv = f.size
                this.secs.cv = duration
            }

            songsWrap.doc(hash).docRef(db).set(
                mp3File.props.write(),
                setOptionsMerge()
            )

            def
        } else {
            current
        }.await()

    }


}