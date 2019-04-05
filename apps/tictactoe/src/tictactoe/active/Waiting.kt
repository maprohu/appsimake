package tictactoe.active

import bootstrap.*
import common.copyToClipboard
import commonfb.BackCsDbKillsUixApi
import commonshr.*
import commonshr.properties.SnapshotEvent
import commonui.*
import commonui.view.*
import commonui.widget.*
import domx.*
import firebase.auth.uid
import firebase.firestore.editableOf
import firebase.firestore.txTry
import fontawesome.copy
import kotlinx.coroutines.ObsoleteCoroutinesApi
import kotlinx.coroutines.channels.filter
import kotlinx.coroutines.channels.map
import tictactoelib.GameStatus
import tictactoelib.PublicGame
import kotlin.browser.document
import kotlin.browser.window

interface WaitingPath: ActivePath {
    val waiting: Waiting
}
@UseExperimental(ObsoleteCoroutinesApi::class)
class Waiting(
    parent: Active,
    val ownGameId: String
): ViewTC(parent), WaitingPath, ActivePath by parent, BackCsDbKillsUixApi, HasBack by parent {
    override val waiting = this
    val ownGameRef = loggedIn.gamesColl.doc(ownGameId)


    override val rawView = ui()

    init {

        launchReport {
            val events = loggedIn.gamesColl
                .documentChanges {
                    PublicGame.owner.eq(null)
                }
                .toSnapshotEvents()
                .filterIsInstance<SnapshotEvent.Added>()
                .map { add ->
                    loggedIn.gamesColl.doc(add.id).editableOf(add.data)
                }
                .filter {
                    it.doc.from.now != loggedIn.user.uid
                }

            for (e in events) {
                txTry {
                    val game = e.id.getOrFail()

                    val st = loggedIn.statusDoc.getOrFail()
                    val waiting = st.doc as GameStatus.InGame.Waiting
                    require(waiting.gameId.now == ownGameId) { "Obsolete ownGameId" }


                    val ownGame = ownGameRef.getOrFail()
                    require(ownGame.doc.owner.now == null) { "Own game already locked!" }

                    e.id.set(
                        game.doc.apply {
                            owner %= uid
                        }
                    )
                    loggedIn.statusDoc.set(
                        GameStatus.InGame.Playing().apply {
                            gameId %= game.id.id
                        }
                    )
                    ownGameRef.set(
                        ownGame.doc.apply {
                            owner %= uid
                        }
                    )
                }
            }
        }

        launchReport {
            for (e in ownGameRef.snapshots) {
                txTry {
                    val st = loggedIn.statusDoc.getOrFail()
                    val waiting = st.doc as GameStatus.InGame.Waiting
                    require(waiting.gameId.now == ownGameId) { "Obsolete ownGameId" }

                }

            }
        }
    }
}