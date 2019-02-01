package tictactoefns

import common.obj
import commonlib.fcmtokens
import commonlib.private
import firebaseadmin.admin
import kotlinx.coroutines.*
import tictactoelib.*

const val gameIdParam = "gameId"

fun init(exports: dynamic) {
    exports[tictactoe.qualified("onMove")] =
            firebasefunctions.firestore
                .document(tictactoe.app.games.doc("{$gameIdParam}").moves.doc("{moveId}").path)
                .onCreate { documentSnapshot, eventContext ->
                    val firestore = documentSnapshot.ref.firestore

                    val gameRef = firestore.doc(
                        tictactoe.app.games.doc(
                            eventContext.params[gameIdParam] as String
                        ).path
                    )

                    val moveData = documentSnapshot.data()
                    val move = Move.of(moveData)

                    GlobalScope.async {
                        val gameDS = gameRef.get().await()

                        if (gameDS.exists) {
                            val game = gameDS.data() as Game

                            val sendTo = game.originalPlayers.iv.filterIndexed { index, id ->
                                index != move.player.iv && id in game.players.iv
                            }

                            for (player in sendTo) {
                                console.log("notifying player: $player")


                                val qdss = firestore
                                    .collection(
                                        tictactoe.app.private.doc(player).fcmtokens.path
                                    )
                                    .get()
                                    .await()
                                    .docs

                                for (qds in qdss) {
                                    console.log("notifying token: ${qds.id}")
                                    admin.messaging().send(
                                        obj {
                                            token = qds.id
                                            data = obj {
                                                json = JSON.stringify(moveData.unsafeCast<Any?>())
                                            }
                                        }
                                    ).await()
                                }
                            }
                        }

                    }.asPromise()
                }
}

