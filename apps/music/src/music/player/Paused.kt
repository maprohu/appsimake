//package music.player
//
//import commonui.widget.*
//import commonshr.*
//
//class Paused(
//    visible: Visible
//): VisibleWrap(visible) {
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
//}