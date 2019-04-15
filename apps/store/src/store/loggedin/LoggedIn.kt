package store.loggedin

import commonfb.FBApi
import commonshr.private
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.links.BaseTC
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.widget.TopAndContent
import firebase.User
import kotlinx.coroutines.launch
import commonui.view.*
import store.*

interface LoggedInTC<T: LoggedInTC<T>>: BaseTC, LoggedInPath, LinkApi<T>

interface LoggedInPath: LinksPath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    override val linkage: Linkage,
    hole: HasKillsRouting<TopAndContent>,
    user: User
): ForwardTC(hole), LoggedInTC<LoggedIn>, LoggedInPath, LinksPath by links, FBApi {
    override val loggedIn: LoggedIn = this

    fun signOut() = links.launch {
        links.signOut()
        links.home.load()
    }

    override val rawView: TopAndContent = ui()


}

