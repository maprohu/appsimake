package music.player

import commonui.widget.*
import commonshr.*

class Paused(
    visible: Visible
): PlayState(visible) {
    override fun playOrPause() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun forward() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun nextTrack() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun dontLike() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
//    init {
//        with (visible) {
//            val kills = stateSeq.killSet()
//
//            val procs = stateProc.assignProcAdd()
//
//            with (playable) {
//                procs.process(PlayOrPause) {
//                    Playing(visible)
//                }
//
//            }
//
//            procs += nextProc(kills, false)
//        }
//    }
}