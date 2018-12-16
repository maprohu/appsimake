package tictactoe

import bootstrap.*
import common.Wrap
import common.obj
import common.resizeEvent
import common.wrapper
import commonui.RootPanel
import domx.classes
import domx.div
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import rx.Rx
import rx.Var
import rx.rxClass
import styles.flexBasis0
import kotlin.browser.window
import kotlin.math.max
import kotlin.math.min

class PlayingCtx(
    val playerCtx: PlayerCtx,
    val gameId: String,
    val playerIndex: Int,
    val weStart: Boolean,
    val root: RootPanel
) {
    val playerRef = playerCtx.playerRef
    val playerId = playerCtx.playerId
    val gameRef = playerCtx.mainCtx.gamesRef.doc(gameId)
    val movesRef = moves(gameRef)

    val appCtx = playerCtx.appCtx
    val db = playerCtx.db
}

fun moves(gameRef: DocumentReference) = gameRef.collection("moves")

sealed class Move(o: dynamic) : Wrap(o) {
    var sequence: Int by dyn()
    var player: Int by dyn()

    companion object {
        val of = wrapper<Move>(
            Placement::class,
            Leave::class
        )
    }
}

class Placement(o: dynamic = obj()) : Move(o) {
    var x : Int by dyn()
    var y : Int by dyn()
}

class Leave(o: dynamic = obj()) : Move(o)

fun PlayingCtx.move(m: Move) = GlobalScope.launch {
    db.tx { tx ->
        val game = tx.get(gameRef).await().data<Game>()

        val sequence = game.lastSequence?.let { it + 1 } ?: 0
        m.player = playerIndex
        m.sequence = sequence

        game.lastSequence = sequence

        tx.set(gameRef, game)
        tx.set(movesRef.doc(sequence.toString()), m.wrapped)
    }
}

fun PlayingCtx.leaveGame() {
    move(Leave())

    playerCtx.leaveGame(gameId)
}