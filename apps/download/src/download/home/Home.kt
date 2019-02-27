package download.home

import commonfb.FB
import commonfb.loginbase.LoginOnly
import commonui.widget.Body
import commonui.widget.BodyPath
import download.loggedin.LoggedIn
import firebase.app.App
import firebase.firestore.Firestore
import kotlinx.coroutines.launch

interface HomePath: BodyPath {
    val home: Home
}
class Home(
    body: Body,
    val app: App,
    val db: Firestore
): LoginOnly(body), HomePath, BodyPath by body {
    override val home = this

    val auth = app.auth()

    fun signOut() {
        auth.signOut()
    }

    init {
        launch {
            start(
                app
            ) {
                LoggedIn(this@Home, it)
            }
        }
    }
}
