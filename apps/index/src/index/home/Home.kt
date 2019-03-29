package index.home

import commonfb.UserState
import commonfb.loginbase.performLogin
import commonui.*
import commonui.links.BaseTC
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.topandcontent.ProgressTC
import commonui.view.*
import commonui.widget.*
import index.Links
import index.LinksPath
import index.home.loggedin.LoggedIn
import index.home.notloggedin.NotLoggedIn

interface HomePath: LinksPath {
    val home: Home
}
class Home(
    links: Links,
    override val linkage: Linkage,
    hole: HasKillsRoutingTC
): MultiTC(hole), BaseTC, HomePath, LinksPath by links, HasCsToast, LinkApi<Home> {
    override val home = this

    override val currentView = rx {
        val killsRouting = this + home

        links.userState().let { us ->
            when (us) {
                UserState.Unknown -> { ProgressTC(killsRouting) }
                UserState.NotLoggedIn -> NotLoggedIn(killsRouting, home)
                is UserState.LoggedIn -> LoggedIn(killsRouting, home)
            }
        }
    }

    fun signIn() = advance {
        links.login.fwd()
    }
}
