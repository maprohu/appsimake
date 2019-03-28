package index.home

import commonfb.UserState
import commonfb.loginbase.performLogin
import commonshr.HasKills
import commonshr.KillsApi
import commonui.*
import commonui.links.Linkage
import commonui.topandcontent.ProgressTC
import commonui.view.HasKillsRoutingTC
import commonui.view.HasRoutingTC
import commonui.view.MultiTC
import commonui.view.hourglass
import commonui.widget.*
import index.Links
import index.LinksPath
import index.home.loggedin.LoggedIn
import index.home.notloggedin.NotLoggedIn
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLElement
import rx.RxIface

interface HomePath: LinksPath {
    val home: Home
}
class Home(
    links: Links,
    linkage: Linkage,
    hole: HasKillsRoutingTC
): MultiTC(hole), HomePath, LinksPath by links, HasCsToast {
    override val home = this

    override val currentView = rx {
        val killsRouting = object: HasKillsRoutingTC, HasKills by this, HasRoutingTC by this@Home {}

        links.userState().let { us ->
            when (us) {
                UserState.Unknown -> {
                    globalStatus %= "Checking login state..."
                    ProgressTC(killsRouting)
                }
                UserState.NotLoggedIn -> NotLoggedIn(killsRouting, this@Home)
                is UserState.LoggedIn -> LoggedIn(killsRouting, this@Home)
            }
        }
    }

    fun signIn() = launchToast {
        links.userProvider.startSignIn {
            hourglass("Logging in...")
            performLogin(
                this@Home,
                links.deps.auth,
                reporter = { e ->
                    console.log(e)
                    toaster { danger(e) }
                }
            )
        }
        redisplay()
    }
}
