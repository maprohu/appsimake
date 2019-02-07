package commonfb

import commonui.*
import firebase.User
import firebase.app.App
import killable.*
import rx.Rx
import rx.RxIface
import rx.Var


sealed class UserState {
    object Unknown: UserState()
    object NotLoggedIn: UserState()
    class LoggedIn(val user: User): UserState()
}
fun userState(
    ks: KillSet,
    app: App = FB.app
): RxIface<UserState> {
    val rxv = Var<UserState>(UserState.Unknown)

    ks += app.auth().onAuthStateChanged { u ->
        rxv.now = if (u == null) {
            UserState.NotLoggedIn
        } else {
            UserState.LoggedIn(u)
        }
    }

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

object SignOut
object SignIn

//fun Proc.withSignOut(
//    app: App = FB.app,
//    fn: suspend () -> Unit = {}
//) = with(signOut(app, fn))

fun signOut(
    app: App = FB.app,
    fn: suspend () -> Unit = {}
) : ProcOrElse = { e, els ->
    when (e) {
        SignOut -> {
            app.auth().signOut()
            fn()
        }
        else -> els(e)
    }
}

//fun loginPage(addLoginUi: (HTMLElement) -> Unit): Node = document.column {
//    topbar {
//        cls {
//            p1
//        }
//        h5 {
//            cls {
//                m1
//            }
//            innerText = "Please Sign In"
//        }
//    }
//    div {
//        cls {
//            flexGrow1
//            p1
//            alignItemsCenter
//        }
//
//        addLoginUi(div)
//    }
//}





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
//    class Msg
//    val Google = Msg()
////    val Email = Msg()
//    val Guest = Msg()
//
//    loops.handle %= { e, els ->
//        when (e) {
//            Google -> {
//                val provider = GoogleAuthProvider()
//                firebase.auth().signInWithPopup(provider)
//                back()
//            }
//            Guest -> {
//                firebase.auth().signInAnonymously()
//                back()
//            }
//            else -> els(e)
//        }
//    }
//
//    panel %= document.column {
//        cls {
//            flexGrow1
//        }
//        topbar {
//            cls {
//                p1
//            }
//            h5 {
//                cls {
//                    m1
//                }
//                innerText = "Please Sign In"
//            }
//        }
//        column {
//            cls {
//                flexGrow1
//                alignItemsCenter
//                p1
//            }
//            column {
//                fun butt(faIcon: FaIcon, text: String, msg: Msg): HTMLElement {
//                    return button {
//                        cls {
//                            btn
//                            btnPrimary
//                            m1
//                            textLeft
//                        }
//                        span {
//                            cls {
//                                fa(faIcon) {
//                                    fw
//                                }
//                                mr2
//                            }
//                        }
//                        span {
//                            innerText = text
//                        }
//                        clickEvent {
//                            loops.inbox += msg
//                        }
//                    }
//                }
//                butt(FaIcon.faBrands { google }, "Sign in with Google", Google)
////                butt(FaIcon.fa { at }, "Sign in with email", Email)
//                butt(FaIcon.fa { user }, "Continue as guest", Guest)
//            }
//        }
//
//    }
//}

