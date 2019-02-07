package music.notloggedin

import commonui.Slot
import commonui.remAssign
import killable.KillSet
import music.boot.Boot
import music.boot.BootWrap
import music.boot.MainBase

class NotLoggedIn(
    boot: Boot
): MainBase(boot) {
    val bind = Bind(inbox)
    private val ui = UI(kills, bind)

    init {
        panel %= ui
    }
}