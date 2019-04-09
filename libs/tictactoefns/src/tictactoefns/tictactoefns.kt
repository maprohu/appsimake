package tictactoefns

import common.obj
import commonfns.FnsDynamicOps
import commonshr.fcmtokens
import commonshr.inbox
import commonshr.private
import commonshr.properties.readDynamic
import commonshr.public
import firebaseadmin.admin
import kotlinx.coroutines.*
import tictactoelib.*

const val recipientParam = "recipient"
//const val gameIdParam = "gameId"
//const val gameIdParam = "gameId"

fun init(exports: dynamic) {
    exports[tictactoeLib.qualified("onMove")] =
            firebasefunctions.firestore
                .document(tictactoeLib.app.inbox.doc("{$recipientParam}").public.moves.doc("{moveId}").path)
                .onCreate { documentSnapshot, eventContext ->
//                    val firestore = documentSnapshot.ref.firestore
//
//                    val gameRef = firestore.doc(
//                        tictactoeLib.app.games.doc(
//                            eventContext.params[gameIdParam] as String
//                        ).path
//                    )
//
//                    val moveData = documentSnapshot.data()
//                    val move = Move.of(moveData, FnsDynamicOps)
//
//                    GlobalScope.async {
//                        val gameDS = gameRef.get().await()
//
//                        if (gameDS.exists) {
//                            val game = Game().apply { readDynamic(gameDS.data(), FnsDynamicOps) }
//
//                            val sendTo = game.originalPlayers.now.filterIndexed { index, id ->
//                                index != move.player.now && id in game.players.now
//                            }
//
//                            for (player in sendTo) {
//                                console.log("notifying player: $player")
//
//
//                                val qdss = firestore
//                                    .collection(
//                                        tictactoeLib.app.private.doc(player).fcmtokens.path
//                                    )
//                                    .get()
//                                    .await()
//                                    .docs
//
//                                for (qds in qdss) {
//                                    console.log("notifying token: ${qds.id}")
//                                    admin.messaging().send(
//                                        obj {
//                                            token = qds.id
//                                            data = obj {
//                                                json = JSON.stringify(moveData.unsafeCast<Any?>())
//                                            }
//                                        }
//                                    ).await()
//                                }
//                            }
//                        }
//
//                    }.asPromise()
                }
}

