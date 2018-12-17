package tictactoe

import common.StateMachine
import common.obj
import commonfb.LoggingInCtx
import commonui.ToolBar
import firebase.User

fun main(args: Array<String>) {
    TicTacToeLoggedOutControl().start()
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
    var lastSequence: Int?
}
