package music.notloggedin

import commonfb.UserState
import commonui.widget.*
import commonshr.*
import killable.killables
import music.boot.Boot
import music.content.Content
import music.content.ContentView

class NotLoggedIn(
    boot: Boot
): Content(boot) {
    override val rawView = ui()

    init {
//        with(bind) {
//            procs.add.process(SignIn) {
//                val ks = kills.killables()
//                Login(
//                    ks.killSet,
//                    inbox,
//                    proc,
//                    top,
//                    main,
//                    back = {
//                        ks.kill()
//                        display()
//                    },
//                    loggingIn = {
//                        boot.userState.now = UserState.Unknown
//                    },
//                    loginFailed = {
//                        reportd(it)
//                        inbox += bind.boot.ShowToast {
//                            danger("Sign in failed: ${it.message}")
//                        }
//                        boot.userState.now = UserState.NotLoggedIn
//                    }
//                )
//            }
//        }
    }
}