package tictactoe

import common.obj
import commonfb.FbCtx
import commonfb.LoggedInCtx
import firebase.User
import firebase.firestore.DocumentReference
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
                .playersRef
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

    private fun cleanupGame(gameRef: DocumentReference) {
        db.runTransaction<Unit> { tx ->
            GlobalScope.async {
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

                        if (gameData.players.isEmpty()) {
                            tx.delete(game.ref)
                        } else {
                            tx.update(game.ref, gameData)
                        }

                        tx.set(playerRef, playerToWrite)
                    }

                }
            }.asPromise()
        }
    }


    fun startPlaying(game: String) : () -> Unit {
        return {}
    }

}