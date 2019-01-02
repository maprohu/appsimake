package tictactoefns

import common.obj
import commonfns.firestore
import firebaseadmin.admin
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import tictactoelib.*

const val gameIdParam = "gameId"

fun init(exports: dynamic) {
    exports[tictactoe.qualified("onMove")] =
            functions.firestore
                .document("${firestoreMovesRef("{$gameIdParam}")}/{moveId}")
                .onCreate { documentSnapshot, eventContext ->
                    val firestore = documentSnapshot.ref.firestore

                    val gameRef = firestore.doc(
                        firestoreGameRef(eventContext.params[gameIdParam] as String)
                    )

                    val move = Move.of(documentSnapshot.data())

                    GlobalScope.launch {
                        val gameDS = gameRef.get().await()

                        if (gameDS.exists) {
                            val game = gameDS.data() as Game

                            val sendTo = if (game.players.size < 2) {
                                game.players.toList()
                            } else {
                                game.players.filterIndexed { index, _ -> index != move.player }
                            }

                            for (player in sendTo) {
                                firestore
                                    .collection(tictactoe.firestoreFcmTokensPath(player))
                                    .get()
                                    .await()
                                    .forEach { qds ->
                                        admin.messaging().send(
                                            obj {
                                                token = qds.id
                                                data = move.wrapped
                                            }
                                        )
                                    }
                            }
                        }

                    }
                }
}

