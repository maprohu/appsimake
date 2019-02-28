package checklist.home

import checklist.loggedin.LoggedIn
import commonfb.FB
import commonfb.FBApi
import commonfb.login.Login
import commonfb.loginbase.LoginBase
import commonfb.loginbase.LoginOnly
import commonfb.loginbase.enablePersistenceAndWait
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
): LoginOnly(body), HomePath, BodyPath by body {
    override val home = this

    init {
        val app = FB.app
        launch {
            val db = FB.db.apply {
                enablePersistenceAndWait()
            }

            start(
                app
            ) {
                LoggedIn(
                    this@Home,
                    it,
                    app,
                    db
                )
            }
        }
    }
}
