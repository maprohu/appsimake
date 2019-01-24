package music

import bootstrap.*
import commonlib.doc
import commonui.faButton
import domx.*
import fontawesome.*
import indexeddb.IDBDatabase
import indexeddb.get
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import music.Mp3Store
import music.MusicCtx
import music.readMp3
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.url.URL
import rx.Var
import kotlin.browser.document


class Player(
    killables: Killables,
    initial: State,
    idb: IDBDatabase
) {
    class Item(
        p: Item?,
        n: Item?
    ) {
        var prev = p ?: this
        var next = n ?: this
    }


    data class State(
        val list: List<String>,
        val current: Int,
        val position: Double
    )

    sealed class Status {
        object Stopped: Status()
        object Playing: Status()
        object Paused: Status()
    }

    sealed class Event {
        object Play: Event()
        object Pause: Event()
        object Stop: Event()
        object Next: Event()
        object Previous: Event()
    }

    val status = Var<Status>(Status.Stopped)

    val channel = Channel<Event>()
    fun post(e: Event) {
        GlobalScope.launch {
            channel.send(e)
        }
    }

    val audio = document.audio {
        with(initial) {
            if (list.isNotEmpty()) {
                val hash = list[current]
                GlobalScope.launch {
                    val mp3 = idb.readMp3(hash)
                    if (mp3 != null) {
                        src = URL.createObjectURL(mp3)
                        if (position != 0.0) {
                            ondurationchange = {
                                currentTime = position
                                ondurationchange = null
                                Unit
                            }
                        }
                    }

                }
            }

        }

    }


    init {
        GlobalScope.launch {

            suspend fun globals(e: Event, fn: suspend () -> Unit) {
                @Suppress("WhenWithOnlyElse")
                when (e) {
                    else -> fn()
                }
            }

            for (e in channel) {
                globals(e) {

                }

            }
        }
    }

    val element = document.div {
        cls {
            flexCenter()
        }
        div {
            cls {
                dFlex
                flexColumn
            }
            div {
                cls {
                    border
                    rounded
                    p1
                    m1
                }
            }
            div {
                cls {
                    dFlex
                    flexRow
                }
                fun mediaBtn(
                    facls: String,
                    fn: HTMLButtonElement.() -> Unit
                ) {
                    faButton(facls) {
                        cls {
                            btnOutlinePrimary
                        }
                        fn()
                    }
                }

                mediaBtn(Fa.stepBackward) {
                    clickEvent {
                        post(Event.Previous)
                    }
                }
                mediaBtn(Fa.play) {
                    rxDisplayed { status() != Status.Playing }
                    clickEvent {
                        post(Event.Play)
                    }
                }
                mediaBtn(Fa.pause) {
                    rxDisplayed {  status() == Status.Playing }
                    clickEvent {
                        post(Event.Pause)
                    }

                }
                mediaBtn(Fa.stop) {
                    clickEvent {
                        post(Event.Stop)
                    }
                    rxEnabled {
                        status() != Status.Stopped
                    }
                }
                mediaBtn(Fa.stepForward) {
                    clickEvent {
                        post(Event.Next)
                    }
                }
            }
        }

    }
}

