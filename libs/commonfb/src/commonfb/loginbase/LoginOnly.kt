package commonfb.loginbase

import commonfb.UserState
import commonfb.login.Login
import commonshr.JobScope
import commonui.widget.switchToView
import firebase.User
import firebase.app.App
import firebase.auth.Auth

open class LoginOnly(
    parent: JobScope
): LoginBase(parent) {

    suspend fun start(
        app: App,
        loggedInView: suspend (User) -> UserStateView
    ) {
        fun notLoggedInView(): Login =
            Login(
                parent = this,
                base = this,
                app = app,
                loggingIn = { switchToUnkownUser() },
                loginFailed = {
                    reportError(it)
                    content.switchToView {
                        notLoggedInView()
                    }
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

