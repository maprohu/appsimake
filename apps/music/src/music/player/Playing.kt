package music.player

import common.listen
import common.onInterval
import commonshr.*
import commonshr.plusAssign
import commonui.widget.*
import kotlin.browser.window

class Playing(
    visible: Visible
): PlayState(visible, true) {

    init {
        with(visible) {
            audio.play()
            kills += {
                audio.pause()
            }

            readCounterNow()
            kills += window.onInterval(250) {
                readCounterNow()
            }

            kills += audio.listen("ended") {
                exec {
                    next()
                }
            }

        }

    }
}