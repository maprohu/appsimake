package music.database

import commonui.Slot
import commonui.visible
import killable.Trigger
import music.boot.Boot
import music.boot.BootWrap

class Database(
    boot: Boot,
    back: Trigger
): BootWrap(boot) {
    private val kills = boot.mainSeq.killSet()
    private val panel: Slot = TODO()
    val bind = Bind(inbox)
    private val ui = UI(kills, panel, bind)

    init {
        ui.visible()
    }
}