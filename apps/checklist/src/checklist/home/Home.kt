package checklist.home

import checklist.loggedin.LoggedIn
import commonfb.FB
import commonfb.login.Login
import commonfb.loginbase.LoginBase
import commonui.widget.Body
import commonui.widget.BodyPath
import commonui.widget.UIBase
import commonui.widget.switchToView
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLElement

interface HomePath: BodyPath {
    val home: Home
}
class Home(
    body: Body
): LoginBase(body), HomePath, BodyPath by body {
    override val home = this

    init {
        launch {
            val app = FB.app

            fun notLoggedInView(): Login =
                Login(
                    parent = this@Home,
                    base = this@Home,
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
                loggedInView = {
                    LoggedIn(this@Home, it)
                },
                notLoggedInView = {
                    notLoggedInView()
                }

            )

        }
    }
}
