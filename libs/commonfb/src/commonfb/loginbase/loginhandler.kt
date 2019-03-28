package commonfb.loginbase

import commonfb.UserState
import commonfb.login.Login
import commonshr.*
import commonui.*
import commonui.topandcontent.ProgressTC
import commonui.widget.TopAndContent
import firebase.User
import firebase.auth.Auth
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import rx.Var
import kotlin.coroutines.RestrictsSuspension
import commonui.view.*


suspend fun performLogin(
    parent: HasCsForwardKillsRoutingTC,
    auth: Auth,
    reporter: (dynamic) -> Unit = { reportd(it) }
) = performLogin(
    parent,
    parent,
    auth,
    hole = { parent %= it },
    back = { parent %= null },
    reporter = reporter
)


suspend fun performLogin(
    deps: HasCsKills,
    parent: HasKillsRoutingTC,
    auth: Auth,
    hole: Assign<ViewTC>,
    back: Trigger? = null,
    reporter: (dynamic) -> Unit = { reportd(it) }
): User {
    val cd = CompletableDeferred<User>()

    fun attempt() {
        hole %= Login(
            parent,
            deps,
            auth,
            back = back,
            loggingIn = {
                globalStatus %= "Logging in..."
                hole %= ProgressTC(parent)
            },
            loginFailed = { e ->
                console.log("loginfailed")
                reporter(e)
                attempt()
            },
            loginSucceeded = { u ->
                cd.complete(u.user!!)
            }
        )
    }

    attempt()

    return cd.await()
}

suspend fun Auth.firstUser(): User? {
    globalStatus %= "Checking login status..."

    val cd = CompletableDeferred<User?>()

    val stopListening = onAuthStateChanged(
        next = { u ->
            cd.complete(u)
        },
        error = { e ->
            cd.completeExceptionally(e.unsafeCast<Throwable>())
        }
    )

    try {
        return cd.await()
    } finally {
        stopListening()
    }
}


typealias UserFn = suspend () -> User

typealias PerformLogin = suspend () -> User
class RequireUser(
    private val deps: CoroutineScope,
    auth: Auth,
    val signIn: PerformLogin
) {
    val state = Var<UserState>(UserState.Unknown)

    private var latest: UserFn? = run {
        val cd = CompletableDeferred<User?>()
        deps.launchReport {
            cd.complete(
                auth.firstUser().also { u ->
                    state %= UserState.of(u)
                }
            )
        }

        suspend {
            cd.await()?.also { u ->
                latest = { u }
            } ?: startSignIn()()
        }
    }

    suspend fun startSignIn(performLogin: PerformLogin = signIn): UserFn {
        val cd = CompletableDeferred<User>()
        deps.launchReport {
            cd.complete(
                performLogin().also { u ->
                    state %= UserState.LoggedIn(u)
                }
            )
        }
        return suspend { cd.await() }.also {
            latest = it
        }
    }

    suspend fun requireUser(performLogin: PerformLogin = signIn) = (latest ?: startSignIn(performLogin)).invoke()

    fun signOut() {
        state %= UserState.NotLoggedIn
        latest = null
    }

}

