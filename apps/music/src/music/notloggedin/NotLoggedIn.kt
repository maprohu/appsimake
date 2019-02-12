package music.notloggedin

import commonfb.UserState
import commonfb.login.Login
import commonshr.*
import commonui.widget.*
import killable.killables
import music.boot.Boot
import music.boot.LoginBase

class NotLoggedIn(
    boot: Boot
): LoginBase(boot) {
    val bind = Bind(boot)
    private val ui = UI(kills, top, main, bind)

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
                    top,
                    main,
                    back = {
                        ks.kill()
                        display()
                    },
                    loggingIn = {
                        boot.userState.now = UserState.Unknown
                    },
                    loginFailed = {
                        reportd(it)
                        inbox += bind.boot.ShowToast {
                            danger("Sign in failed: ${it.message}")
                        }
                        boot.userState.now = UserState.NotLoggedIn
                    }
                )
            }
        }
    }
}