package music.player

import common.listen
import common.onInterval
import commonshr.*
import commonshr.plusAssign
import commonui.widget.*
import kotlin.browser.window

class Playing(
    player: Player
): PlayState(player, true) {

    init {
        with(player) {
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