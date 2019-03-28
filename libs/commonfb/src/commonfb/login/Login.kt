package commonfb.login

import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonshr.*
import commonui.view.*
import commonui.widget.*
import firebase.app.App
import firebase.auth.Auth
import firebase.auth.GoogleAuthProvider
import firebase.auth.UserCredential
import killable.KillSet
import kotlinx.coroutines.*

class Login(
    parent: HasKillsRoutingTC,
    val base: CoroutineScope,
    val auth: Auth,
    val back: Trigger? = null,
    val loggingIn: Action = {},
    val loginFailed: suspend (dynamic) -> Unit = {},
    val loginSucceeded: suspend (UserCredential) -> Unit = {}
): ViewTC(parent), UserStateView {
    override val userState = UserState.NotLoggedIn
    override val rawView = ui()

    suspend fun tryLogin(fn: suspend () -> UserCredential) {
        loggingIn()
        try {
            loginSucceeded(fn())
        } catch (e: dynamic) {
            loginFailed(e)
        }
    }

    fun google() {
        base.launch {
            val provider = GoogleAuthProvider()
            tryLogin {
                auth.signInWithRedirect(provider).await()
                CompletableDeferred<UserCredential>().await()
            }
        }
    }

    fun guest() {
        base.launch {
            tryLogin {
                auth.signInAnonymously().await()
            }
        }
    }

}

