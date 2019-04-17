package admin.loggedin

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
import admin.*
import commonlib.commonlib.TokenDeveloperClaims
import commonshr.properties.readDynamic
import commonui.globalStatus
import commonui.launchReport
import commonui.topandcontent.ProgressTC
import firebase.firestore.FsDynamicOps
import kotlinx.coroutines.await
import rx.RxIface
import rx.Var

interface LoggedInTC<T: LoggedInTC<T>>: BaseTC, LoggedInPath, LinkApi<T>

interface LoggedInPath: LinksPath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    override val linkage: Linkage,
    hole: HasKillsRouting<TopAndContent>,
    val user: User
): MultiTC(hole), LoggedInTC<LoggedIn>, LoggedInPath, LinksPath by links {
    override val loggedIn: LoggedIn = this

    fun signOut() = links.launch {
        links.signOut()
        links.home.load()
    }

    fun index() = advance {
        links.index.fwd()
    }

    override val currentView = Var<IViewTC>(ProgressTC(this)).oldKilled

    init {
        globalStatus %= "Checking admin status..."
        launchReport {
            TokenDeveloperClaims().apply {
                user.getIdTokenResult().await().also { t ->
                    readDynamic(t.claims, FsDynamicOps)
                }
            }.also { c ->
                currentView %= if (c.adminRight.now) {
                    LoggedInAdmin(this)
                } else {
                    LoggedInNoAdmin(this)
                }
            }

        }
    }
}

