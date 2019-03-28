package index.home

import commonfb.UserState
import commonshr.HasKills
import commonshr.KillsApi
import commonui.*
import commonui.links.Linkage
import commonui.topandcontent.ProgressTC
import commonui.view.HasKillsRoutingTC
import commonui.view.HasRoutingTC
import commonui.view.MultiTC
import commonui.widget.Body
import commonui.widget.BodyTC
import commonui.widget.TopAndContent
import index.Links
import index.LinksPath
import index.home.loggedin.LoggedIn
import index.home.notloggedin.NotLoggedIn
import org.w3c.dom.HTMLElement
import rx.RxIface

interface HomePath: LinksPath {
    val home: Home
}
class Home(
    links: Links,
    linkage: Linkage,
    hole: HasKillsRoutingTC
): MultiTC(hole), HomePath, LinksPath by links {
    override val home = this

    override val currentView = rx {
        val killsRouting = object: HasKillsRoutingTC, HasKills by this, HasRoutingTC by this@Home {}

        links.userState().let { us ->
            when (us) {
                UserState.Unknown -> {
                    globalStatus %= "Checking login state..."
                    ProgressTC(killsRouting)
                }
                UserState.NotLoggedIn -> NotLoggedIn(killsRouting)
                is UserState.LoggedIn -> LoggedIn(killsRouting)
            }
        }
    }
}
