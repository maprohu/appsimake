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
import tictactoelib.Game
import tictactoelib.Leave
import tictactoelib.Move
import kotlin.browser.window
import kotlin.js.Promise
import kotlin.math.max
import kotlin.math.min

class PlayingCtx(
    val playerCtx: PlayerCtx,
    val gameId: String,
    val playerIndex: Int,
//    val weStart: Boolean,
    val ui: PlayingUI
) {
    val loggedInCtx = playerCtx.loggedInCtx
    val playerRef = playerCtx.playerRef
    val playerId = playerCtx.playerId
    val gameRef = playerCtx.mainCtx.gamesRef.doc(gameId)
    val movesRef = moves(gameRef)

    val fbCtx = playerCtx.fbCtx
    val appCtx = playerCtx.appCtx
    val db = playerCtx.db
}

fun moves(gameRef: DocumentReference) = gameRef.collection("moves")


class SequenceTakenException : Exception()

const val SequenceStartsFrom = 0
suspend fun PlayingCtx.move(seq: Int, m: Move) {
    m.sequence = seq

    try {
        db.tx { tx ->
            val moveRef = movesRef.doc(m.sequence.toString())
            val game = tx.get(gameRef).await()

            if (game.data<Game>().isOver) {
                rollback()
            }

            val currentMove = tx.get(moveRef).await()

            if (!currentMove.exists) {
                m.player = playerIndex
                tx.set(gameRef, obj(), setOptionsMerge())
                tx.set(moveRef, m.wrapped)
            } else {
                throw SequenceTakenException()
            }
        }
    } catch (_: RollbackException) {
        // game over, no more moves
    }
}

suspend fun PlayingCtx.tryLeave(trySeq: Int, seq: () -> Int) {
    try {
        move(trySeq, Leave())
    } catch (e: SequenceTakenException) {
        tryLeave( max(seq(), trySeq + 1), seq)
    }
}

suspend fun PlayingCtx.leaveGameMove(seq: () -> Int) {
    tryLeave(seq(), seq)

    leaveGame()
}

fun PlayingCtx.leaveGame() {
    playerCtx.leaveGame(gameId)
}