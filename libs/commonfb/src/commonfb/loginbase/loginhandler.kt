package commonfb.loginbase

import commonfb.login.Login
import commonshr.*
import commonui.IView
import commonui.RoutingHole
import commonui.SimpleRoutingHole
import commonui.globalStatus
import commonui.topandcontent.ProgressTC
import commonui.widget.TopAndContent
import firebase.User
import firebase.auth.Auth
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.CoroutineScope


class LoginError(message: String? = null, cause: Throwable? = null) : Throwable(message, cause)

fun loginHandler(
    deps: HasCsKills,
    auth: Auth,
    hole: SimpleRoutingHole<TopAndContent>,
    reporter: (dynamic) -> Unit = { reportd(it) }
): suspend () -> User {
    var user: User? = null

    val firstUser = CompletableDeferred<Unit>()

    deps.kills += auth.onAuthStateChanged(
        next = { u ->
            user = u
            firstUser.complete(Unit)
        },
        error = {
            report(it)
        }
    )

    return {
        firstUser.await()

        user ?: run {

            val cd = CompletableDeferred<User>()

            fun attempt() {
                hole %= Login(
                    hole,
                    deps,
                    auth,
                    loggingIn = {
                        globalStatus %= "Logging in..."
                        hole %= ProgressTC(hole)
                    },
                    loginFailed = { e ->
                        reporter(e)
                        attempt()
                    },
                    loginSucceeded = { u ->
                        cd.complete(u.user!!)
                    }
                )
            }

            attempt()

            cd.await()
        }
    }
}

