package tictactoelib

import common.Wrap
import common.named
import common.wrapper
import commonlib.Lib

val tictactoe by named { Lib(it) }

external interface MoveData {
    var text: String
    var fcmToken: String
}

val firestoreGamesPath = "${tictactoe.firestoreBasePath}/games"
val firestorePlayersPath = "${tictactoe.firestoreBasePath}/players"
val firestoreMovesCollectionName = "moves"
fun firestoreGameRef(gameId: String) = "$firestoreGamesPath/$gameId"
fun firestoreMovesRef(gameId: String) = "${firestoreGameRef(gameId)}/$firestoreMovesCollectionName"

external interface Game {
    var players: Array<String>
    var originalPlayers: Array<String>
    var isOver: Boolean
//    var firstPlayer: Int
//    var lastSequence: Int?
}


sealed class Move(o: dynamic) : Wrap(o) {
    var sequence: Int by dyn()
    var player: Int by dyn()

    companion object {
        val of = wrapper<Move>(
            Start::class,
            Placement::class,
            Leave::class
        )
    }
}

class Start(o: dynamic = null) : Move(o)

class Placement(o: dynamic = null) : Move(o) {
    var x : Int by dyn()
    var y : Int by dyn()
}

class Leave(o: dynamic = null) : Move(o)
