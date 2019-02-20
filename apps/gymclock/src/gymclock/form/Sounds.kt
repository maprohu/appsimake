package gymclock.form

import common.*
import domx.*
import org.w3c.dom.HTMLAudioElement
import kotlin.browser.document

class Sounds {



    private fun createAudio(name: String): HTMLAudioElement {
        return document.audio {
            source {
                src = res("audio/$name.mp3")
                type = "audio/mpeg"
            }
            source {
                src = res("audio/$name.m4r")
                type = "audio/x-m4r"
            }
            load()
        }
    }

    val prepareAudio = createAudio("exquisite")
    val workAudio = createAudio("definite")
    val restAudio = createAudio("not-bad")

}