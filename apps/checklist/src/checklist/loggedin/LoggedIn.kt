package checklist.loggedin

import checklist.*
import commonfb.FBApi
import commonshr.private
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.links.BaseTC
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.widget.TopAndContent
import firebase.User
import kotlinx.coroutines.launch

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

    val checklists = checklistLib.app.private.doc(user.uid).checklists

    fun signOut() = links.launch {
        links.signOut()
        links.home.load()
    }

    fun newChecklist() = advance {
        links.newChecklist.fwd()
    }

    fun viewChecklist(cl: FsDoc<Checklist>) = advance {
        links.viewChecklist.fwd(cl.idOrFail)
    }


    override val rawView: TopAndContent = ui()


}

