package music

import bootstrap.*
import common.None
import common.Optional
import commonui.RootPanel
import commonui.faButton
import commonui.faButtonSpan
import domx.*
import fontawesome.*
import indexeddb.IDBDatabase
import killable.Killables
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import musiclib.Mp3File
import org.w3c.dom.url.URL
import rx.Rx
import rx.Var
import rx.rxClass
import styles.scrollVertical
import kotlin.browser.document
import kotlin.math.floor


sealed class Either<out A, out B> {
    class Left<A>(val value: A): Either<A, Nothing>()
    class Right<B>(val value: B): Either<Nothing, B>()
}

interface SongSource {
    suspend fun request(): Either<String, Deferred<String>>

}


class PlayerFrame(
    panel: RootPanel,
    killables: Killables,
    val songSource: SongSource,
    val idb: IDBDatabase,
    val tagDB: TagDB
) {
    val mp3File = Var<Optional<Mp3File>>(None)
    val hidden = Var(false)
    val loading = Var(true)
    val canDownload = Var(false)
    val canUpload = Var(false)
    val totalDuration = Var(0)
    val currentPosition = Var(0)
    val artist = Var("artist")
    val title = Var("title")

    val playing = Var(false)

    sealed class Event {
        object Play: Event()
        object Pause: Event()
        object Stop: Event()
        object Next: Event()
        object Previous: Event()
        class SongLoaded(val id: String): Event()
        object NoSong: Event()
        class SongLater(val song: Deferred<String>): Event()
    }

    val channel = Channel<Event>()

    val audio = document.audio

    suspend fun loadSong(id: String) {
        val mp3 = idb.readMp3(id)

        if (mp3 == null) {
            requestSong()
        } else {
            audio.src = URL.createObjectURL(mp3)
            channel.send(Event.SongLoaded(id))
        }
    }

    suspend fun requestSong() {
        val r = songSource.request()
        when (r) {
            is Either.Left -> {
                loadSong(r.value)
            }
            is Either.Right -> {
                channel.send(Event.NoSong)
                loadSong(r.value.await())
            }
        }
    }

    fun startRequestSong() {
        GlobalScope.launch { requestSong() }
    }

    fun post(e: Event) {
        GlobalScope.launch {
            channel.send(e)
        }
    }

    init {

        GlobalScope.launch {
            for (e in channel) {
                when (e) {
                    Event.NoSong -> {
                        hidden.now = true
                    }
                    is Event.SongLoaded -> {
                        hidden.now = false
                    }
                }

            }
        }

        startRequestSong()

    }



    val element = panel.newRoot {
        div {
            cls {
                flexGrow1
            }
        }
        div {
            rxDisplayed { !hidden() }
            cls {
                borderTop
                bgLight
                flexFixedSize()
                dFlex
                flexRow
                flexWrap
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                faButton(Fa.stepBackward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { currentPosition() != 0 || playing() }
                }
                faButton(Fa.backward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { playing() }
                }
                faButton(Fa.play) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { !playing() }
                }
                faButton(Fa.pause) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { playing() }
                }
                faButton(Fa.forward) {
                    cls {
                        btnOutlinePrimary
                    }
                    rxEnabled { playing() }
                }

            }
            div {
                cls {
                    border
                    borderPrimary
                    rounded
                    m1
                    p2
                    flexCenter()
                }
                pre {
                    cls {
                        m0
                        textPrimary
                    }
                    fun formatSecs(s: Int): String {
                        val mins = s / 60.0
                        val minPart = floor(mins)
                        val secPart = mins - minPart
                        val secString = ((secPart * 60).toInt() + 100).toString().substring(1)
                        val minString = minPart.toInt().toString().let { s ->
                            if (s.length < 3) {
                                (s.length .. 3).map { ' ' }.toCharArray().let { String(it) } + s
                            } else {
                                s
                            }
                        }

                        return "$minString:$secString"
                    }
                    rxText {
                        "${formatSecs(currentPosition())} / ${formatSecs(totalDuration())}"
                    }
                }
            }
            div {
                cls {
                    m1
                    btnGroup
                }
                faButton(Fa.thumbsUp) {
                    cls {
                        btnOutlinePrimary
                    }
                }
                faButton(Fa.question) {
                    cls {
                        btnOutlinePrimary
                    }
                }
                faButton(Fa.thumbsDown) {
                    cls {
                        btnOutlinePrimary
                    }
                }
            }
            div {
                cls {
                    btnGroup
                    m1
                }
                faButton(Fa.cloudDownloadAlt) {
                    rxClass {
                        if (canDownload()) {
                            Cls.btnPrimary
                        } else {
                            Cls.btnOutlinePrimary
                        }
                    }
                    clickEvent {
                        canDownload.transform { n -> !n }
                    }
                }
                faButton(Fa.cloudUploadAlt) {
                    rxClass {
                        if (canUpload()) {
                            Cls.btnPrimary
                        } else {
                            Cls.btnOutlinePrimary
                        }
                    }
                    clickEvent {
                        canUpload.transform { n -> !n }
                    }
                }
            }
            div {
                cls {
                    m1
                    p1
                    border
                    borderPrimary
                    rounded
                    textPrimary
                    scrollVertical
                    dFlex
                    alignItemsCenter
                }
                span {
                    rxText { "${artist()} - ${title()}" }
                }
            }
        }
    }


}

