package index.home.loggedin

import commonfb.KillsLoginApi
import commonui.view.HasKillsRouting
import commonui.view.SimpleView
import commonui.view.ViewTC
import commonui.widget.TopAndContent
import index.home.Home
import index.home.HomePath

interface LoggedInPath: HomePath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    parent: HasKillsRouting<TopAndContent>,
    home: Home
): ViewTC(parent), LoggedInPath, HomePath by home, KillsLoginApi {
    override val loggedIn = this
    override val rawView = ui()

    fun signOut() = links.signOutNow()
}