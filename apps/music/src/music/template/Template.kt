package music.template

import commonui.widget.Slot
import commonui.widget.visible
import killable.KillSet
import music.boot.Boot
import music.boot.BootWrap

class Template(
    boot: Boot
): BootWrap(boot) {
    private val kills: KillSet = TODO()
    private val panel: Slot = TODO()
    val bind = Bind(inbox)
    private val ui = UI(kills, panel, bind)

    init {
        ui.visible()
    }
}