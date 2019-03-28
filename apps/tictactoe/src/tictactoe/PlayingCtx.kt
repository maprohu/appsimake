package tictactoe

//import bootstrap.*
//import common.obj
//import common.resizeEvent
//import commonui.RootPanel
//import domx.classes
//import domx.div
//import firebase.firestore.*
//import firebaseshr.initFrom
//import killable.Killables
//import kotlinx.coroutines.GlobalScope
//import kotlinx.coroutines.await
//import kotlinx.coroutines.launch
//import rx.Rx
//import rx.Var
//import rx.rxClass
//import rx.set
//import styles.flexBasis0
//import tictactoelib.Game
//import tictactoelib.Leave
//import tictactoelib.Move
//import tictactoelib.moves
//import kotlin.browser.window
//import kotlin.js.Promise
//import kotlin.math.max
//import kotlin.math.min
//
//class PlayingCtx(
//    val playerCtx: PlayerCtx,
//    val gameId: String,
//    val playerIndex: Int,
////    val weStart: Boolean,
//    val ui: PlayingUI
//) {
//    val db = playerCtx.db
//
//    val loggedInCtx = playerCtx.loggedInCtx
//    val playerRef = playerCtx.playerRef
//    val playerId = playerCtx.playerId
//
//    val gameWrap = playerCtx.mainCtx.gamesWrap.doc(gameId)
//    val movesWrap = gameWrap.moves
//
//    val gameRef = gameWrap.docRef(db)
//    val movesRef = movesWrap.collectionRef(db)
//
//    val fbCtx = playerCtx.fbCtx
//    val appCtx = playerCtx.appCtx
//}
//
//fun moves(gameRef: DocumentReference) = gameRef.collection("moves")
//
//
//class SequenceTakenException : Exception()
//
//const val SequenceStartsFrom = 0
//suspend fun PlayingCtx.move(seq: Int, m: Move<*>) {
//    m.sequence.current.set(seq)
//
//    try {
//        db.tx { tx ->
//            val moveRef = movesRef.doc(m.sequence.toString())
//            val game = tx.get(gameRef).await()
//
//            if (Game().initFrom(game).isOver.iv) {
//                rollback()
//            }
//
//            val currentMove = tx.get(moveRef).await()
//
//            if (!currentMove.exists) {
//                m.player.current.set(playerIndex)
//                tx.set(gameRef, obj(), setOptionsMerge())
//                tx.set(moveRef, m.props.write())
//            } else {
//                throw SequenceTakenException()
//            }
//        }
//    } catch (_: RollbackException) {
//        // game over, no more moves
//    }
//}
//
//suspend fun PlayingCtx.tryLeave(trySeq: Int, seq: () -> Int) {
//    try {
//        move(trySeq, Leave())
//    } catch (e: SequenceTakenException) {
//        tryLeave( max(seq(), trySeq + 1), seq)
//    }
//}
//
//suspend fun PlayingCtx.leaveGameMove(seq: () -> Int) {
//    tryLeave(seq(), seq)
//
//    leaveGame()
//}
//
//fun PlayingCtx.leaveGame() {
//    playerCtx.leaveGame(gameId)
//}