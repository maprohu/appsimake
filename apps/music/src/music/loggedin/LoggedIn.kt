package music.loggedin

import commonui.*
import killable.KillSet
import music.boot.Boot
import music.boot.BootWrap
import music.boot.MainBase

class LoggedIn(
    boot: Boot
): MainBase(boot) {
    val bind = Bind(inbox)
    private val ui = UI(kills, panel, bind)

    val procs = proc.assignProcAdd()

    init {
        ui.visible()

        with(bind) {
            procs.process(SignOut) {
                boot.userUnknown()
                boot.signOut()
            }
        }
    }
}