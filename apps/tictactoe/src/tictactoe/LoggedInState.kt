package tictactoe

import common.State
import common.obj
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel

abstract class LoggedInState(val control: PlayerCtx) : State<Player?, LoggedInState>() {


    fun createPlayer() {
        control.fbCtx.db.runTransaction<Unit> { tx ->
            GlobalScope.async {
                val player = tx.get(control.playerRef).await()

                if (!player.exists) {
                    tx.set(
                        control.playerRef,
                        newPlayer()
                    )
                }
            }.asPromise()
        }
    }

}

class PlayerStateUnknown(control: PlayerCtx) : LoggedInState(control) {

    override fun enter(): () -> Unit {
        cleanupGames()
        return {}
    }

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                createPlayer()
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
                createPlayer()
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
        waitingUI()

        val channel = Channel<DocumentChange>()

        val killables = Killables()

        val processingJob = GlobalScope.launch {
            val ownGameRef = control.mainCtx.gamesRef.add(
                obj<Game>{
                    players = arrayOf(control.playerId)
                }
            ).await()

            val dontDeleteGame = killables.add {
                ownGameRef.delete()
            }

            for (otherPlayerChange in channel) {
                val started = control.fbCtx.db.runTransaction<Boolean> { tx ->
                    GlobalScope.async {
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
                            tx.set(
                                ownGameRef,
                                obj<Game> {
                                    this.players = players.map { it.id }.toTypedArray()
                                },
                                obj {
                                    merge = true
                                }
                            )
                        }

                        playersFree
                    }.asPromise()
                }.await()

                if (started) {
                    dontDeleteGame()
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
            killables.kill()
            stopQuerying()
            processingJob.cancel()
        }
    }

    override fun process(input: Player?): LoggedInState? {
        return when {
            input == null -> {
                createPlayer()
                null
            }
            input.game != null -> StartPlayingState(control, input.game!!)
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
                createPlayer()
                PlayerActiveWaiting(control)
            }
            input.game == null -> PlayerActiveWaiting(control)
            input.game != game -> StartPlayingState(control, input.game!!)
            else -> null
        }
    }
}
