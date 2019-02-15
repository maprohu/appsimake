package music.loggedin

import commonui.widget.*
import music.boot.Boot
import music.boot.BootPath
import music.database.Database
import rx.feedTo

open class LoggedInPath(
    val loggedIn: LoggedIn
): BootPath(loggedIn.boot)

class LoggedIn(
    factory: JobScope,
    from: BootPath
): ForwardBase<TopAndContent>(factory) {
    val boot = from.boot
    val path = LoggedInPath(this)

    override val rawView = ui()

    suspend fun database() {
        forward %= fwdc(::Database)
    }

//    init {
//
//        with(bind) {
//            procs.process(SignOut) {
//                boot.userUnknown()
//                boot.signOut.now()
//            }
//        }
//    }

//    companion object {
//        suspend operator fun invoke(boot: Boot) = with(boot) {
//            FB.setupMessaging()
//            val functions = FB.functions()
//
//            val custTokenCall = customToken.callable(functions)
//            userState(ks) {
//                if (it != null) {
////            try {
////                custTokenCall.call(Unit)?.let { token ->
////                    app.auth().signInWithCustomToken(token).await()
////                }
////            } catch (d: dynamic) {
////                reportd(d)
////            }
//////            db.enableNetwork().await()
//                } else {
////            db.disableNetwork().await()
//                }
//            }.forEach {
//                userState.now = it
//            }
//
//        }
//    }
}