package commonfb

import commonshr.*
import commonui.widget.*
import firebase.User
import firebase.app.App
import firebase.firestore.Firestore
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import rx.Rx
import rx.RxIface
import rx.Var


sealed class UserState {
    object Unknown: UserState()
    object NotLoggedIn: UserState()
    data class LoggedIn(
        val user: User
    ): UserState()
}
fun HasKillSet.runUserState(
    app: App = FB.app,
    fn: suspend (UserState) -> UserState = { it }
): RxIface<UserState> {
    val rxv = Var<UserState>(UserState.Unknown)

    val ch = Channel<UserState>()
    kills += { ch.close() }

    GlobalScope.launch {
        for (u in ch) {
            rxv.now = fn(u)
        }
    }

    kills += app.auth().onAuthStateChanged(
        { u ->
            ch += if (u == null) {
                UserState.NotLoggedIn
            } else {
                UserState.LoggedIn(u)
            }
        },
        { e ->
            report(e)
            ch += UserState.NotLoggedIn
        }
    )

    return rxv
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

