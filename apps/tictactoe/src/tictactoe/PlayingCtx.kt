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
import kotlin.js.Promise
import kotlin.math.max
import kotlin.math.min

class PlayingCtx(
    val playerCtx: PlayerCtx,
    val gameId: String,
    val playerIndex: Int,
    val weStart: Boolean,
    val ui: PlayingUI
) {
    val playerRef = playerCtx.playerRef
    val playerId = playerCtx.playerId
    val gameRef = playerCtx.mainCtx.gamesRef.doc(gameId)
    val movesRef = moves(gameRef)

    val fbCtx = playerCtx.fbCtx
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

class SequenceTakenException : Exception()

const val SequenceStartsFrom = 0
suspend fun PlayingCtx.move(seq: Int, m: Move) {
    m.sequence = seq

    db.tx { tx ->
        val moveRef = movesRef.doc(m.sequence.toString())
        val currentMove = tx.get(moveRef).await()

        if (!currentMove.exists) {
            m.player = playerIndex
            tx.set(moveRef, m.wrapped)
        } else {
            throw SequenceTakenException()
        }
    }
}

suspend fun PlayingCtx.tryLeave(trySeq: Int, seq: () -> Int) {
    try {
        move(trySeq, Leave())
    } catch (e: SequenceTakenException) {
        tryLeave( max(seq(), trySeq + 1), seq)
    }
}

suspend fun PlayingCtx.leaveGame(seq: () -> Int) {
    tryLeave(seq(), seq)

    playerCtx.leaveGame(gameId)
}