package gymclock.form

import common.*
import domx.*
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Deferred
import org.w3c.dom.HTMLAudioElement
import kotlin.browser.document

class Sounds(
    val prepare: HTMLAudioElement,
    val work: HTMLAudioElement,
    val rest: HTMLAudioElement
) {

    companion object {
        suspend fun load(): Sounds {

            fun createAudio(name: String): Deferred<HTMLAudioElement> {
                val cd = CompletableDeferred<HTMLAudioElement>()

                document.audio {
                    source {
                        src = res("audio/$name.mp3")
                        type = "audio/mpeg"
                    }
                    source {
                        src = res("audio/$name.m4r")
                        type = "audio/x-m4r"
                    }
                    load()

                    listenOnce("canplay") {
                        cd.complete(this)
                    }
                }

                return cd
            }

            val prepareAudio = createAudio("exquisite")
            val workAudio = createAudio("definite")
            val restAudio = createAudio("not-bad")

            return Sounds(
                prepareAudio.await(),
                workAudio.await(),
                restAudio.await()
            )
        }
    }





}