package commonfb.loginbase

import commonfb.UserState
import commonfb.login.Login
import commonui.HasKillsRouting
import firebase.User
import firebase.app.App
import firebase.auth.Auth
import org.w3c.dom.HTMLElement

open class LoginOnly(
    parent: HasKillsRouting<HTMLElement>
): LoginBase(parent) {

    suspend fun start(
        app: App,
        loggedInView: suspend (User) -> UserStateView
    ) {
        fun notLoggedInView(): Login =
            Login(
                parent = hole,
                base = this,
                app = app,
                loggingIn = { switchToUnkownUser() },
                loginFailed = {
                    reportError(it)
                    hole %= notLoggedInView()
                }
            )

        app.auth().start(
            loggedInView = loggedInView,
            notLoggedInView = {
                notLoggedInView()
            }
        )
    }

}

