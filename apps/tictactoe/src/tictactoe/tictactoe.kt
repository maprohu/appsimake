package tictactoe

import common.StateMachine
import common.obj
import commonfb.LoggedInCtx
import commonfb.LoggingInCtx
import commonui.ToolBar
import firebase.User
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import tictactoelib.MoveData

fun main(args: Array<String>) {
    val ttt = TicTacToeLoggedOutControl()

    ttt.start()
}

fun ToolBar.ticTacToe() {
    middleTitle {
        innerText = "Tic Tac Toe"
    }
}

class TicTacToeLoggedOutControl: LoggingInCtx("tictactoe", "Tic Tac Toe") {
    override fun loggedIn(user: User): () -> Unit {
        val loggedInCtx = LoggedInCtx(fbCtx, user)
        val killables = Killables()

        GlobalScope.launch {
            loggedInCtx.setupMessaging()

            loggedInCtx.currentFcmToken.now?.let { token ->
                fbCtx.app.functions().httpsCallable(tictactoelib.moveFunctionName)(
                    obj<MoveData>().apply {
                        text = "boo!"
                        fcmToken = token
                    }
                )
            }
        }

//        killables += startStateMachine(loggedInCtx)

        return { killables.kill() }
    }
    fun startStateMachine(user: LoggedInCtx): () -> Unit {
        val control = PlayerCtx(MainCtx(fbCtx), user)

        val stateMachine = StateMachine(
            PlayerStateUnknown(control)
        )

        val stopQuerying = control.playerRef.onSnapshot { ds ->
            stateMachine.update(
                if (ds.exists) ds.data() else null
            )
        }

        return {
            control.loggedInCtx.killables.kill()
            stopQuerying()
            stateMachine.shutdown()
        }
    }
}

external interface Player {
    var active: Boolean
    var game: String?
}

external interface Game {
    var players: Array<String>
    var firstPlayer: Int
//    var lastSequence: Int?
}
