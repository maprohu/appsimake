package tictactoe

import common.obj
import commonfb.FbCtx
import commonfb.LoggedInCtx
import firebase.User
import firebase.firestore.*
import killable.Killables
import kotlinx.coroutines.*

class PlayerCtx(
    val mainCtx: MainCtx,
    val loggedInCtx: LoggedInCtx
) {

    constructor(fbCtx: FbCtx, user: User) : this(
        MainCtx(fbCtx),
        LoggedInCtx(fbCtx, user )
    )

    val fbCtx = mainCtx.fbCtx
    val playerId = loggedInCtx.user.uid
    val appCtx = fbCtx.appCtx
    val db = fbCtx.db
    val playerRef = mainCtx.playersRef.doc(playerId)

    fun newPlayer() =
        obj<Player>().apply {
            active = false
            game = null
        }

    fun cleanupGames() {
        GlobalScope.launch {
            mainCtx
                .gamesRef
                .where("players", "array-contains", playerId)
                .get()
                .await()
                .docs
                .forEach { doc ->
                    val gameRef = doc.ref
                    cleanupGame(gameRef)
                }
        }
    }

    fun deleteGameCollections(gameRef: DocumentReference) {
        GlobalScope.launch {
            moves(gameRef).get().await().docs.forEach {
                it.ref.delete()
            }
        }
    }

    private fun cleanupGame(gameRef: DocumentReference) {
        launch {
            db.txTry { tx ->
                val game = tx.get(gameRef).await()

                if (game.exists) {
                    val player = tx.get(playerRef).await()

                    val playerToWrite = if (player.exists) {
                        player.data()
                    } else {
                        newPlayer()
                    }

                    if (playerToWrite.game != game.ref.id) {
                        val gameData = game.data<Game>()

                        gameData.apply {
                            players = players.filterNot { it == playerId }.toTypedArray()
                        }

                        val deleted = if (gameData.players.isEmpty()) {
                            tx.delete(game.ref)
                            true
                        } else {
                            tx.update(game.ref, gameData)
                            false
                        }

                        tx.set(playerRef, playerToWrite)

                        deleted
                    } else {
                        rollback()
                    }

                } else {
                    rollback()
                }
            }.onRollback { false }.let {
                if (it) deleteGameCollections(gameRef)
            }
        }
   }

    fun createPlayer() {
        db.txDefer { tx ->
            val player = tx.get(playerRef).await()

            if (!player.exists) {
                tx.set(
                    playerRef,
                    newPlayer()
                )
            } else {
                rollback()
            }
        }
    }


    fun startPlaying(gameId: String) : () -> Unit {
        val killables = Killables()
        val ui = playingUI()
        ui.root.setHourglass()
        mainCtx.gamesRef.doc(gameId).get().then {
            if (!it.exists) {
                leaveGame(gameId)
            } else {
                val game = it.data<Game>()
                val playerIndex = game.players.indexOf(playerId)
                val weStart = playerIndex == game.firstPlayer
                val playingCtx = PlayingCtx(
                    this,
                    gameId,
                    playerIndex,
                    weStart,
                    ui
                )
                killables += playingCtx.playfieldUI()
            }
        }
        return { killables.kill() }
    }

    fun leaveGame(gameId: String) {

        GlobalScope.launch {
            db.tx { tx ->
                val player = tx.get(playerRef).await().data<Player>()

                if (player.game == gameId) {
                    player.game = null
                }

                tx.set(playerRef, player)
            }

            cleanupGames()
        }
    }
}