package tictactoe

import common.StateMachine
import common.obj
import commonfb.LoggingInCtx
import commonui.ToolBar
import firebase.User
import firebase.firestore.launch
import firebase.firestore.rollback
import firebase.firestore.tx
import firebase.firestore.txTry
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asDeferred
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import org.w3c.notifications.DENIED
import org.w3c.notifications.GRANTED
import org.w3c.notifications.Notification
import org.w3c.notifications.NotificationPermission

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
        val control = PlayerCtx(fbCtx, user)

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
