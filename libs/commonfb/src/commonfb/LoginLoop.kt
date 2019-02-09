package commonfb

import commonshr.report
import commonui.*
import firebase.User
import firebase.app.App
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
    class LoggedIn(val user: User): UserState()
}
fun runUserState(
    ks: KillSet,
    app: App = FB.app,
    fn: suspend (UserState) -> UserState = { it }
): RxIface<UserState> {
    val rxv = Var<UserState>(UserState.Unknown)

    val ch = Channel<UserState>()
    ks += { ch.close() }

    GlobalScope.launch {
        for (u in ch) {
            rxv.now = fn(u)
        }
    }

    ks += app.auth().onAuthStateChanged(
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

fun RxIface<UserState>.toUser(ks: KillSet): RxIface<User?> = Rx {
    val u = this()
    when (u) {
        is UserState.LoggedIn -> u.user
        else -> null
    }
}.addedTo(ks)

fun RxIface<User?>.toUid(ks: KillSet) = Rx { this()?.uid }.addedTo(ks)


object NotLoggedIn
class LoggedIn(val user: User)

fun Inbox.runLoginEvents(
    kills: KillSet,
    app: App = FB.app
) {
    app.auth().onAuthStateChanged { user ->
        this += if (user == null) {
            NotLoggedIn
        } else {
            LoggedIn(user)
        }
    }.addedTo(kills)
}

//fun runLogin(
//    loop: LoopControl = runLoop(),
//    panel: SetPanel = runPanel(),
//    app: App = FB.app,
//    kills: KillSet = Killables().toKillSet(),
//    loggedIn: (User) -> Page
//) {
//    loop.runLoginEvents(kills)
//
//    val loops = loop.loops()
//
//    val procs = object {
//        fun ProcOrElse.withCommon(): ProcOrElse = { e, els ->
//            when (e) {
//                NotLoggedIn -> {
//                    showLoginPage(loops, panel) {
//                        loops.handle %= initial()
//                    }
//                }
//                is LoggedIn -> {
//                    loops.handle %= SubHandle.from(kills) { ks ->
//                        val subProc = loggedIn(e.user)(loop, panel, ks)
//                        subProc.withCommon().withLoggedIn()
//                    }
//                }
//                else -> els(e)
//            }
//        }
//
//        fun initial(): ProcOrElse {
//            panel.hourglass()
//            return procOrElse().withCommon()
//        }
//
//        fun ProcOrElse.withLoggedIn(): ProcOrElse = { e, els ->
//            when (e) {
//                SignOut -> {
//                    app.auth().signOut()
//                    loops.handle %= initial()
//                }
//                else -> els(e)
//            }
//        }
//    }
//
//    loops.handle %= procs.initial()
//
//}
//
//fun showLoginPage(
//    loops: LoopsControl,
//    panel: SetPanel,
//    back: Trigger
//) {
//
//
//
//    }
//}

