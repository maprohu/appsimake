package commonfb.login

import commonshr.*
import commonui.widget.*
import firebase.app.App
import firebase.auth.GoogleAuthProvider
import firebase.auth.UserCredential
import killable.KillSet
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch


class Login(
    parent: JobScope,
    val app: App,
    val back: Trigger,
    val loggingIn: Action,
    val loginFailed: suspend (dynamic) -> Unit,
    val loginSucceeded: suspend (UserCredential) -> Unit = {}
): UIBase<TopAndContent>(parent) {
    override val rawView = ui()

    suspend fun tryLogin(fn: suspend () -> UserCredential) {
        loggingIn()
        try {
            loginSucceeded(fn())
        } catch (e: dynamic) {
            loginFailed(e)
        }
    }

    suspend fun google() {
        GlobalScope.launch {
            val provider = GoogleAuthProvider()
            tryLogin {
                app.auth().signInWithPopup(provider).await()
            }
        }
    }

    suspend fun guest() {
        GlobalScope.launch {
            tryLogin {
                app.auth().signInAnonymously().await()
            }
        }
    }

}

