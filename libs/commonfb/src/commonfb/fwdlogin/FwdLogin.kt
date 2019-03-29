package commonfb.fwdlogin

import commonfb.UserState
import commonfb.login.Login
import commonshr.reportd
import commonui.HasBack
import commonui.HasBackRedisplay
import commonui.globalStatus
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.topandcontent.ProgressTC
import commonui.view.*
import firebase.auth.Auth
import rx.Var

class FwdLogin(
    parent: HasCsKillsRoutingTC,
    linkage: Linkage,
    userState: Var<UserState>,
    auth: Auth,
    reporter: (dynamic) -> Unit = { reportd(it) }
): MultiViewTC(parent), LinkPointItem, HasBackRedisplay, HasBack by linkage {
    val loggingIn = Var(false)

    init {
        userState.forEach { s ->
            if (s is UserState.LoggedIn) {
                backOnRedisplay()
            }
        }
    }

    override val currentView = rx {
        val killsRouting = this + parent

        if (loggingIn()) {
            globalStatus %= "Logging in..."
            ProgressTC(killsRouting)

        } else userState().let { us ->
            when (us) {
                UserState.Unknown -> {
                    globalStatus %= "Checking login state..."
                    ProgressTC(killsRouting)
                }
                is UserState.LoggedIn -> {
                    globalStatus %= "User logged in."
                    back()
                    ProgressTC(killsRouting)

                }
                UserState.NotLoggedIn -> {
                    Login(
                        killsRouting,
                        parent,
                        auth,
                        back,
                        loggingIn = {
                            loggingIn %= true
                        },
                        loginFailed = {
                            loggingIn %= false
                            reporter(it)
                        },
                        loginSucceeded = { u ->
                            loggingIn %= false
                            userState %= UserState.LoggedIn(u.user!!)
                            back()
                        }
                    )
                }
            }
        }
    }
}