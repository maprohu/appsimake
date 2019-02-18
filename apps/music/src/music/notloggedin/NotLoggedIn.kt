package music.notloggedin

import commonfb.UserState
import commonfb.login.Login
import commonui.widget.*
import commonshr.*
import firebase.app.App
import killable.killables
import kotlinx.coroutines.Job
import music.UserSongs
import music.boot.Boot
import music.boot.BootPath
import music.content.Content
import music.data.SongInfoSource

class NotLoggedIn(
    val boot: Boot,
    val app: App
): ForwardBase<TopAndContent>(boot), Content {
    val path = boot.path
    override val userSongs: UserSongs? = null
    override val songInfoSource: SongInfoSource = boot.localSongInfoSource

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
                    path.boot.userState.now = UserState.NotLoggedIn
                }
            )
        }
    }

}