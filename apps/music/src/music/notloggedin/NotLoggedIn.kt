package music.notloggedin

import commonfb.login.Login
import commonui.*
import killable.killables
import killable.remAssign
import music.boot.Boot
import music.boot.MainBase

class NotLoggedIn(
    boot: Boot
): MainBase(boot) {
    val bind = Bind(inbox)
    private val ui = UI(kills, panel, bind)

    init {
        val procs = procOrElses()
        fun display() {
            ui.visible()
            proc %= procs.proc
        }
        display()

        with(bind) {
            procs.add.process(SignIn) {
                val ks = kills.killables()
                Login(
                    ks.killSet,
                    inbox,
                    proc,
                    panel,
                    back = {
                        ks.kill()
                        display()
                    },
                    loggingIn = {
                        boot.userUnknown()
                    }
                )
            }
        }
    }
}