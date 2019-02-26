package commonfb

import commonshr.*
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.auth.Auth
import firebase.firestore.Firestore
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import rx.Rx
import rx.RxIface
import rx.Var
import rx.mapAsync


interface HasUserState {
    val userState: UserState
}
sealed class UserState {
    object Unknown: UserState()
    object NotLoggedIn: UserState()
    data class LoggedIn(
        val user: User
    ): UserState()
}
suspend fun JobKillsApi.runUserState(
    app: App = FB.app,
    fn: suspend HasKillSet.(UserState) -> UserState = { it }
): RxIface<UserState> {
    return runUserState(app.auth(), fn)
}

suspend fun JobKillsApi.runUserState(
    auth: Auth = FB.app.auth(),
    fn: suspend HasKillSet.(UserState) -> UserState = { it }
): RxIface<UserState> {
    val rxv = Var<UserState>(UserState.Unknown)

    kills += auth.onAuthStateChanged(
        { u ->
            rxv.now = if (u == null) {
                UserState.NotLoggedIn
            } else {
                UserState.LoggedIn(u)
            }
        },
        { e ->
            report(e)
            rxv.now = UserState.NotLoggedIn
        }
    )

    return rxv.mapAsync(fn)
}

fun RxIface<UserState>.toUser(ks: KillSet): RxIface<User?> = Rx(ks) {
    val u = this@toUser()
    when (u) {
        is UserState.LoggedIn -> u.user
        else -> null
    }
}

fun RxIface<User?>.toUid(ks: KillSet) = Rx(ks) { this@toUid()?.uid }


//object NotLoggedIn
//class LoggedIn(val user: User)
//
//fun Inbox.runLoginEvents(
//    kills: KillSet,
//    app: App = FB.app
//) {
//    app.auth().onAuthStateChanged { user ->
//        this += if (user == null) {
//            NotLoggedIn
//        } else {
//            LoggedIn(user)
//        }
//    }.addedTo(kills)
//}

