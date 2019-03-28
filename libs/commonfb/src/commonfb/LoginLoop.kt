package commonfb

import commonshr.*
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.auth.Auth
import killable.*
import rx.Rx
import rx.RxIface
import rx.Var
import rx.mapAsync


sealed class UserState {
    object Unknown: UserState()
    object NotLoggedIn: UserState()
    data class LoggedIn(
        val user: User
    ): UserState()

    companion object {
        fun of(user: User?) = if (user == null) {
            UserState.NotLoggedIn
        } else {
            UserState.LoggedIn(user)
        }
    }
}
suspend fun HasCsKills.runUserState(
    app: App = FB.app,
    fn: suspend KillsApi.(UserState) -> UserState = { it }
): RxIface<UserState> {
    return runUserState(app.auth(), fn)
}

suspend fun HasCsKills.runUserState(
    auth: Auth = FB.app.auth(),
    fn: suspend KillsApi.(UserState) -> UserState = { it }
): RxIface<UserState> {
    val rxv = Var<UserState>(UserState.Unknown)

    kills += auth.onAuthStateChanged(
        { u ->
            rxv.now = UserState.of(u)
        },
        { e ->
            report(e)
            rxv.now = UserState.NotLoggedIn
        }
    )

    return rxv.mapAsync(this, fn)
}

fun RxIface<UserState>.toUser(ks: KillSet): RxIface<User?> = Rx(ks) {
    val u = this@toUser()
    when (u) {
        is UserState.LoggedIn -> u.user
        else -> null
    }
}



