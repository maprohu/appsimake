//package music.database
//
//import commonshr.Trigger
//import commonui.widget.Slot
//import commonui.widget.visible
//import music.boot.Boot
//import music.boot.BootWrap
//
//class Database(
//    boot: Boot,
//    back: Trigger
//): BootWrap(boot) {
//    private val kills = boot.mainSeq.killSet()
//    private val panel: Slot = TODO()
//    val bind = Bind(inbox)
//    private val ui = UI(kills, panel, bind)
//
//    init {
//        ui.visible()
//    }
//}