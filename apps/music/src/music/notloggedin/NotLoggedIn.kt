package music.notloggedin

import commonfb.UserState
import commonfb.callable
import commonfb.login.Login
import commonlib.commonlib.customToken
import commonui.widget.*
import commonshr.*
import commonui.KillsUixApi
import commonui.globalStatus
import firebase.app.App
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.await
import music.UserSongs
import music.boot.Boot
import music.content.Content
import music.data.SongInfoSource

class NotLoggedIn(
    val boot: Boot,
    val app: App
): ForwardBase<TopAndContent>(boot), Content, KillsUixApi {
    val path = boot.path
    override val userSongs: UserSongs? = null
    override val songInfoSource: SongInfoSource = boot.localSongInfoSource

    override val rawView = ui()

    suspend fun signIn() {
        val customTokenReady = CompletableDeferred<Unit>().also { boot.customTokenReady = it }

        forward.switchTo {
            Login(
                this,
                base = boot,
                app = app,
                back = redisplay,
                loggingIn = {
                    forward.switchTo(HourglassView(this))
                    path.boot.userState.now = UserState.Unknown
                },
                loginFailed = {
                    reportd(it)
                    path.boot.slots.toasts {
                        danger("Sign in failed: ${it?.message}")
                    }
                    path.boot.userState.now = UserState.NotLoggedIn
                },
                loginSucceeded = {

                    val functions = boot.fbRefs().functions

                    globalStatus %= "Requesting online token..."
                    customToken.callable(functions).call(Unit)?.let { token ->
                        globalStatus %= "Signing in with online token..."
                        app.auth().signInWithCustomToken(token).await()
                    }
                    globalStatus %= "Signed in with online token."

                    customTokenReady.complete(Unit)
                }
            )
        }
    }

}