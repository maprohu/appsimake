package music.player

import common.listen
import common.onInterval
import commonui.*
import killable.plusAssign
import kotlin.browser.window

class Playing(
    visible: Visible
): VisibleWrap(visible) {
    val PlayingEnded = object {}

    fun next() {
        visible.player.next(true)
    }

    init {
        with(visible) {
            val kills = stateSeq.killSet()

            audio.play()
            kills += {
                audio.pause()
            }

            readCounterNow()
            kills += window.onInterval(250) {
                readCounterNow()
            }

            val procs = stateProc.assignProcAdd()

            procs += nextProc(kills, true)

            with (playable) {
                procs.process(PlayOrPause) {
                    Paused(visible)
                }
            }

            with (player) {
                kills += audio.listen("ended") {
                    bind.inbox += PlayingEnded
                }

                procs.process(PlayingEnded) {
                    next()
                }

                with(bind) {
                    playing.now = true
                    kills += {
                        playing.now = false
                    }
                }

            }

        }

    }
}