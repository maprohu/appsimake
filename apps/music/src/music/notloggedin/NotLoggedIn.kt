package music.notloggedin

import commonfb.UserState
import commonfb.login.Login
import commonui.widget.*
import commonshr.*
import firebase.app.App
import killable.killables
import kotlinx.coroutines.Job
import music.boot.Boot
import music.boot.BootPath

class NotLoggedIn(
    factory: JobScope,
    val app: App,
    val path: BootPath
): ForwardBase<TopAndContent>(factory) {
    override val rawView = ui()

    suspend fun signIn() {
        forward.switchTo {
            Login(
                this,
                app = app,
                back = back,
                loggingIn = {
                    path.boot.userState.now = UserState.Unknown
                },
                loginFailed = {
                    reportd(it)
                    path.boot.slots.toasts {
                        danger("Sign in failed: ${it.message}")
                    }
                    path.boot.userState.now = UserState.NotLoggedIn(app)
                }
            )
        }
    }

}