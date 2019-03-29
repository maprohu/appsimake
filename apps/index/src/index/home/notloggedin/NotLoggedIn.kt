package index.home.notloggedin

import commonfb.KillsLoginApi
import commonui.view.HasKillsRouting
import commonui.view.SimpleView
import commonui.view.ViewTC
import commonui.widget.TopAndContent
import index.home.Home
import index.home.HomePath
import kotlinx.coroutines.launch


interface NotLoggedInPath: HomePath {
    val notLoggedIn: NotLoggedIn
}
class NotLoggedIn(
    parent: HasKillsRouting<TopAndContent>,
    home: Home
): ViewTC(parent), NotLoggedInPath, HomePath by home, KillsLoginApi {
    override val notLoggedIn = this
    override val rawView = ui()


}