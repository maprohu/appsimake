package tictactoe

import commonfb.FbLinksFactory

fun main() {
    FbLinksFactory.start { Links(it) }
}

//import common.StateMachine
//import commonfb.LoggedInCtx
//import commonfb.LoggingInCtx
//import commonui.ToolBar
//import firebase.User
//import firebaseshr.initFrom
//import killable.Killables
//import tictactoelib.Player
//import tictactoelib.tictactoeLib
//
//fun main(args: Array<String>) {
//    val ttt = TicTacToeLoggedOutControl()
//
//    ttt.start()
//}
//
//fun ToolBar.ticTacToe() {
//    middleTitle {
//        innerText = "Tic Tac Toe"
//    }
//}
//
//class TicTacToeLoggedOutControl: LoggingInCtx(tictactoeLib, "Tic Tac Toe") {
//    override fun loggedIn(user: User): () -> Unit {
//        val loggedInCtx = LoggedInCtx(fbCtx, user)
//        val killables = Killables()
//
////        GlobalScope.launch {
////            loggedInCtx.setupMessaging()
////
////            fbCtx.messaging.onMessage { m ->
////                console.log(m)
////            }
////
////            loggedInCtx.currentFcmToken.now?.let { token ->
////                fbCtx.app.functions().httpsCallable(tictactoelib.moveFunctionName)(
////                    obj<MoveData>().apply {
////                        text = "boo!"
////                        fcmToken = token
////                    }
////                )
////            }
////        }
//
//        killables += startStateMachine(loggedInCtx)
//
//        return { killables.kill() }
//    }
//    fun startStateMachine(user: LoggedInCtx): () -> Unit {
//        val control = PlayerCtx(MainCtx(fbCtx), user)
//
//        val stateMachine = StateMachine(
//            PlayerStateUnknown(control)
//        )
//
//        val stopQuerying = control.playerRef.onSnapshot { ds ->
//            stateMachine.update(
//                if (ds.exists) Player().initFrom(ds.data()) else null
//            )
//        }
//
//        return {
//            control.loggedInCtx.killables.kill()
//            stopQuerying()
//            stateMachine.shutdown()
//        }
//    }
//}
//

