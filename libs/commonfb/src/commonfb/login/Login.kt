//package commonfb.login
//
//import commonshr.*
//import commonui.widget.*
//import firebase.auth.GoogleAuthProvider
//import killable.KillSet
//import kotlinx.coroutines.await
//
//
//class Login(
//    kills: KillSet,
//    inbox: Inbox,
//    proc: AssignProcOrElse,
//    top: Factory,
//    main: Factory,
//    back: Trigger,
//    loggingIn: Trigger,
//    loginFailed: suspend (dynamic) -> Unit
//) {
//    val bind = Bind(inbox)
//    private val ui = UI(kills, top, main, bind)
//    val procs = proc.assignProcAdd()
//
//    init {
//        ui.visible()
//
//        with(bind) {
//            suspend fun tryLogin(fn: suspend () -> Unit) {
//                loggingIn()
//                try {
//                    fn()
//                } catch (e: dynamic) {
//                    loginFailed(e)
//                }
//            }
//            procs.process(Google) {
//                val provider = GoogleAuthProvider()
//                tryLogin {
//                    firebase.auth().signInWithPopup(provider).await()
//                }
//            }
//            procs.process(Guest) {
//                loggingIn()
//                tryLogin {
//                    firebase.auth().signInAnonymously().await()
//                }
//            }
//            procs.process(Back) {
//                back()
//            }
//        }
//    }
//}