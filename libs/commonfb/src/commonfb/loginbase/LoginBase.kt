package commonfb.loginbase

import common.obj
import commonfb.HasUserState
import commonfb.UserState
import commonfb.runUserState
import commonshr.JobScope
import commonui.globalStatus
import commonui.topandcontent.ProgressTC
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.auth.Auth
import firebase.firestore.Firestore
import kotlinx.coroutines.await
import org.w3c.dom.HTMLElement
interface LoginBasePath {
    val loginBase: LoginBase
}

interface UserStateView: JobScopeWithView<TopAndContent> {
    val userState: UserState
}

class UnkownUser(
    parent: JobScope
): ProgressTC(parent), UserStateView {
    override val userState = UserState.Unknown
}


abstract class LoginBase(
    parent: JobScope
): UIBase<HTMLElement>(parent), LoginBasePath {
    @Suppress("LeakingThis")
    override val loginBase = this

    class Slots {
        lateinit var top: Hole
        lateinit var main: Hole
        lateinit var toasts: (ToastFn) -> Unit
    }

    val slots = Slots()

    override val rawView = ui()

    val contentHole = HoleT<TopAndContent>(
        prepare = {
            topbar.apply(slots.top.prepareOrNull)
            content.apply(slots.main.prepareOrNull)
        },
        assign = { cv ->
            slots.top %= cv?.topbar
            slots.main %= cv?.content
        }
    )

    @Suppress("LeakingThis")
    val content = views<UserStateView>().of(
        UnkownUser(this),
        contentHole
    )



    suspend fun switchToUnkownUser() {
        content.switchToView {
            UnkownUser(this@LoginBase)
        }
    }

    fun reportError(d: dynamic) {
        slots.toasts {
            danger("Sign in failed: ${d?.message}")
        }
    }

    suspend fun Auth.start(
        loggedInView: suspend (User) -> UserStateView,
        notLoggedInView: suspend () -> UserStateView
    ) {
        globalStatus %= "Checking user..."
        runUserState(this).forEach { st ->
            exec {

                when (st) {
                    is UserState.LoggedIn -> {
                        globalStatus %= "Logged in."
                        content.switchToView {
                            loggedInView(st.user)
                        }
                    }
                    is UserState.NotLoggedIn -> {
                        globalStatus %= "Logged out."
                        content.switchToView {
                            notLoggedInView()
                        }
                    }
                    else -> {
                        switchToUnkownUser()
                    }
                }
            }
        }
    }

}

suspend fun Firestore.enablePersistenceAndWait() {
    globalStatus %= "Enabling persistence..."
    enablePersistence(
        obj {
            experimentalTabSynchronization = true
        }
    ).await()
}

suspend fun Firestore.disableNetworkAndWait() {
    globalStatus %= "Switching to offline data..."
    disableNetwork().await()
}
