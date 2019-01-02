package tictactoesw

import fbmessagingsw.messageTitle
import tictactoelib.Leave
import tictactoelib.Move
import tictactoelib.Placement
import tictactoelib.Start

fun main(args: Array<String>) {

    messageTitle = {
        val move = Move.of(
            JSON.parse(it.data.json as String)
        )

        val msg = when (move) {
            is Start -> "game started"
            is Leave -> "opponent left"
            is Placement -> "opponent moved"
        }

        "TicTacToe: $msg"
    }

}