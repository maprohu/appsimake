package tictactoe

import common.StateMachine
import common.obj
import commonfb.LoggingInCtx
import firebase.User

fun main(args: Array<String>) {
    TicTacToeLoggedOutControl().start()
}


class TicTacToeLoggedOutControl: LoggingInCtx("tictactoe") {
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
