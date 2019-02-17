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
        player.audio.play()
        kills += {
            player.audio.pause()
        }

        player.readCounterNow()
        kills += window.onInterval(250) {
            player.readCounterNow()
        }

        kills += player.audio.listen("ended") {
            exec {
                player.next()
            }
        }


    }
}