package eventlog.loggedin

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
import eventlog.*

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

    val eventTypes = eventlogLib.app.private.doc(user.uid).eventtypes

    fun signOut() = links.launch {
        links.signOut()
        links.home.load()
    }

    fun newEventType() = advance {
        links.newEventType.fwd()
    }

    fun editEventType(cl: FsDoc<EventType>) = advance {
        links.editEventType.fwd(cl.idOrFail)
    }

    fun recorOccurrence(cl: FsDoc<EventType>) = advance {
        links.recordOccurrence.fwd(cl.idOrFail)
    }


    override val rawView: TopAndContent = ui()


}

