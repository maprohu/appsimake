package tictactoe

import common.State
import common.obj
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import rx.set
import tictactoelib.Game
import tictactoelib.Player
import tictactoelib.Start
import tictactoelib.moves
import kotlin.random.Random

abstract class LoggedInState(val control: PlayerCtx) : State<Player?, LoggedInState>()

class PlayerStateUnknown(control: PlayerCtx) : LoggedInState(control) {

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                control.createPlayer()
                null
            }
            input.game.iv != null -> StartPlayingState(control, input.game.iv!!)
            !input.active.iv -> PlayerInactive(control)
            else -> PlayerActiveWaiting(control)
        }
    }


}

class PlayerInactive(control: PlayerCtx) : LoggedInState(control) {

    override fun enter(): () -> Unit {
        inactiveUI()
        return {}
    }

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                control.createPlayer()
                null
            }
            input.game.iv != null -> StartPlayingState(control, input.game.iv!!)
            input.active.iv -> PlayerActiveWaiting(control)
            else -> null
        }
    }

}

class PlayerActiveWaiting(control: PlayerCtx) : LoggedInState(control) {
    val db = control.db

    override fun enter(): () -> Unit {
        val killUI = waitingUI()
        control.cleanupGames()

        val channel = Channel<DocumentChange>()

        val processingJob = GlobalScope.launch {

            val ownGameRef = control.mainCtx.gamesRef.add(
                Game().apply {
                    players.cv = arrayOf(control.playerId)
                    isOver.cv = false
                }.props.write()
            ).await()
            val ownGameWrap = control.mainCtx.gamesWrap.doc(ownGameRef.id)

            for (otherPlayerChange in channel) {
//                val firstPlayerIndex = Random.nextInt(2)
                val started = control.db.txTry { tx ->
                    var playersFree = true

                    val players = arrayOf(control.playerRef, otherPlayerChange.doc.ref)

                    for (player in players) {
                        val ds = tx.get(player).await()

                        if (!ds.exists || ds.data<Player>().let { !it.active.iv || it.game.iv != null } ) {
                            playersFree = false
                            break
                        }
                    }

                    if (playersFree) {
                        players.forEach {
                            tx.set(
                                it,
                                Player().apply {
                                    active.cv = false
                                    game.cv = ownGameRef.id
                                },
                                obj {
                                    merge = true
                                }
                            )
                        }
                        val game = Game().apply {
                            this.players.cv = players.map { it.id }.toTypedArray()
                            originalPlayers.cv = this.players.iv.copyOf()
//                            this.firstPlayer = firstPlayerIndex
                        }
                        tx.set(
                            ownGameRef,
                            game.props.write(),
                            setOptionsMerge()
                        )

                        val seq = SequenceStartsFrom
                        val moveRef = ownGameWrap.moves.doc(seq.toString()).docRef(db)
                        tx.set(
                            moveRef,
                            Start().apply {
                                sequence.cv = seq
                                player.cv = Random.nextInt(2)
                            }.props.write()
                        )

                        true
                    } else {
                        rollback()
                    }
                }.onRollback { false }

                if (started) {
//                    val seq = SequenceStartsFrom
//                    ownGameRef.collection(firestoreMovesCollectionName)
//                        .doc(seq.toString())
//                        .set(
//                            Start().apply {
//                                sequence = SequenceStartsFrom
//                                player = Random.nextInt(2)
//                            }.wrapped
//                        )

                    break
                }
            }
        }


        val stopQuerying = control.mainCtx.playersRef
            .where("active", "==", true)
            .where("game", "==", null)
            .onSnapshotNext { qs ->
                qs
                    .docChanges()
                    .filter { dc -> dc.typeEnum == DocumentChangeType.added && dc.doc.id != control.playerId }
                    .forEach { dc -> GlobalScope.launch { channel.send(dc) } }
            }

        return {
            killUI()
            stopQuerying()
            processingJob.cancel()
        }
    }

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                control.createPlayer()
                null
            }
            input.game.iv != null -> StartPlayingState(control, input.game.iv!!)
            !input.active.iv -> PlayerInactive(control)
            else -> null
        }
    }
}

class StartPlayingState(
    control: PlayerCtx,
    private val game: String
) : LoggedInState(control) {

    override fun enter() = control.startPlaying(game)

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                control.createPlayer()
                PlayerActiveWaiting(control)
            }
            input.game.iv == null && !input.active.iv -> PlayerInactive(control)
            input.game.iv == null -> PlayerActiveWaiting(control)
            input.game.iv != game -> StartPlayingState(control, input.game.iv!!)
            else -> null
        }
    }
}
