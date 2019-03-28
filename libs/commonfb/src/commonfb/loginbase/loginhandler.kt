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
    parent: ForwardTC,
    auth: Auth,
    reporter: (dynamic) -> Unit = { reportd(it) }
) = performLogin(
    parent,
    parent,
    auth,
    { parent %= it },
    reporter
)


suspend fun performLogin(
    deps: HasCsKills,
    parent: HasKillsRoutingTC,
    auth: Auth,
    hole: Assign<ViewTC>,
    reporter: (dynamic) -> Unit = { reportd(it) }
): User {
    val cd = CompletableDeferred<User>()

    fun attempt() {
        hole %= Login(
            parent,
            deps,
            auth,
            loggingIn = {
                globalStatus %= "Logging in..."
                hole %= ProgressTC(parent)
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

class RequireUser(
    private val deps: CoroutineScope,
    auth: Auth,
    private val signIn: suspend () -> User
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

    private suspend fun startSignIn(): UserFn {
        val cd = CompletableDeferred<User>()
        deps.launchReport {
            cd.complete(
                signIn().also { u ->
                    state %= UserState.LoggedIn(u)
                }
            )
        }
        return suspend { cd.await() }.also {
            latest = it
        }
    }

    suspend fun requireUser() = (latest ?: startSignIn()).invoke()

    fun signOut() {
        state %= UserState.NotLoggedIn
        latest = null
    }

}

