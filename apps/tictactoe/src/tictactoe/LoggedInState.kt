package tictactoe

import common.State
import common.obj
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import tictactoelib.Game
import tictactoelib.Start
import tictactoelib.firestoreMovesCollectionName
import tictactoelib.firestoreMovesRef
import kotlin.random.Random

abstract class LoggedInState(val control: PlayerCtx) : State<Player?, LoggedInState>()

class PlayerStateUnknown(control: PlayerCtx) : LoggedInState(control) {

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                control.createPlayer()
                null
            }
            input.game != null -> StartPlayingState(control, input.game!!)
            !input.active -> PlayerInactive(control)
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
            input.game != null -> StartPlayingState(control, input.game!!)
            input.active -> PlayerActiveWaiting(control)
            else -> null
        }
    }

}

class PlayerActiveWaiting(control: PlayerCtx) : LoggedInState(control) {

    override fun enter(): () -> Unit {
        val killUI = waitingUI()
        control.cleanupGames()

        val channel = Channel<DocumentChange>()

        val processingJob = GlobalScope.launch {

            val ownGameRef = control.mainCtx.gamesRef.add(
                obj<Game>{
                    players = arrayOf(control.playerId)
                }
            ).await()

            for (otherPlayerChange in channel) {
//                val firstPlayerIndex = Random.nextInt(2)
                val started = control.db.txTry { tx ->
                    var playersFree = true

                    val players = arrayOf(control.playerRef, otherPlayerChange.doc.ref)

                    for (player in players) {
                        val ds = tx.get(player).await()

                        if (!ds.exists || ds.data<Player>().let { !it.active || it.game != null } ) {
                            playersFree = false
                            break
                        }
                    }

                    if (playersFree) {
                        players.forEach {
                            tx.set(
                                it,
                                obj<Player> {
                                    active = false
                                    game = ownGameRef.id
                                },
                                obj {
                                    merge = true
                                }
                            )
                        }
                        val game = obj<Game> {
                            this.players = players.map { it.id }.toTypedArray()
                            originalPlayers = this.players.copyOf()
//                            this.firstPlayer = firstPlayerIndex
                        }
                        tx.set(
                            ownGameRef,
                            game,
                            setOptionsMerge()
                        )

                        val seq = SequenceStartsFrom
                        val moveRef = ownGameRef.collection(firestoreMovesCollectionName)
                            .doc(seq.toString())
                        tx.set(
                            moveRef,
                            Start().apply {
                                sequence = seq
                                player = Random.nextInt(2)
                            }.wrapped
                        )

                        true
                    } else {
                        rollback()
                    }
                }.onRollback { false }

                console.log(started)

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
            input.game != null -> StartPlayingState(control, input.game!!)
            !input.active -> PlayerInactive(control)
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
            input.game == null && !input.active -> PlayerInactive(control)
            input.game == null -> PlayerActiveWaiting(control)
            input.game != game -> StartPlayingState(control, input.game!!)
            else -> null
        }
    }
}
