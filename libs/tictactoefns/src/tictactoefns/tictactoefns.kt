package tictactoefns

import common.obj
import commonfns.FnsDynamicOps
import commonshr.fcmtokens
import commonshr.private
import commonshr.properties.readDynamic
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
                    val move = Move.of(moveData, FnsDynamicOps)

                    GlobalScope.async {
                        val gameDS = gameRef.get().await()

                        if (gameDS.exists) {
                            val game = Game().apply { readDynamic(gameDS.data(), FnsDynamicOps) }

                            val sendTo = game.originalPlayers.now.filterIndexed { index, id ->
                                index != move.player.now && id in game.players.now
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

