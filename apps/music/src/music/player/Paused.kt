package music.player

import commonui.assignProcAdd
import commonui.procOrElse
import commonui.process
import commonui.rxProcIf
import killable.plusAssign
import musiclib.UserSongState

class Paused(
    val visible: Visible
) {
    init {
        with (visible) {
            val kills = stateSeq.killSet()

            val procs = stateProc.assignProcAdd()

            with (playable) {
                procs.process(PlayOrPause) {
                    Playing(visible)
                }

            }

            procs += nextProc(kills, false)
        }
    }
}