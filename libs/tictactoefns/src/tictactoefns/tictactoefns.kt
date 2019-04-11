package tictactoefns

import common.obj
import commonfns.FnsDynamicOps
import commonfns.encodeMessage
import commonshr.*
import commonshr.properties.readDynamic
import firebaseadmin.admin
import firebaseshr.encodeMessageData
import kotlinx.coroutines.*
import tictactoelib.*

const val recipientParam = "recipient"

fun init(exports: dynamic) {

    exports[tictactoeLib.qualified("onMove")] =
            firebasefunctions.firestore
                .document(tictactoeLib.app.inbox.doc("{$recipientParam}").public.moves.doc("{moveId}").path)
                .onCreate { documentSnapshot, eventContext ->
                    GlobalScope.async {
                        val firestore = documentSnapshot.ref.firestore

                        val moveData = documentSnapshot.data()
                        val move = Move.of(moveData, FnsDynamicOps)
                        val from = move.from.now
                        val recipient = eventContext.params[recipientParam] as String

                        if (from != recipient) {
                            val gameId = move.game.now

                            val gameRef = firestore.doc(tictactoeLib.privateOf(recipient).singletons.status.path)

                            val gameDS = gameRef.get().await()

                            if (gameDS.exists) {
                                val game = GameStatus.of(gameDS.data(), FnsDynamicOps)

                                if (
                                    (game is GameStatus.Waiting && game.game.now == gameId) ||
                                    (game is GameStatus.Playing && game.game.now == gameId)
                                ) {

                                    console.log("notifying player: $recipient")


                                    val qdss = firestore
                                        .collection(
                                            tictactoeLib.privateOf(recipient).fcmTokens.path
                                        )
                                        .get()
                                        .await()
                                        .docs

                                    for (qds in qdss) {
                                        val token = FcmToken().apply {
                                            readDynamic(qds.data(), FnsDynamicOps)
                                        }

                                        if (token.enabled.now) {
                                            val t = token.token.now

                                            if (t != null) {
                                                console.log("notifying token: ${qds.id}")
                                                admin.messaging().send(
                                                    encodeMessage(
                                                        t,
                                                        moveData.unsafeCast<Any?>()
                                                    )
                                                ).await()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }.asPromise()
                }

}

