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
import firebase.firestore.*
import fontawesome.copy
import kotlinx.coroutines.ObsoleteCoroutinesApi
import kotlinx.coroutines.channels.filter
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.take
import tictactoelib.GameStatus
import tictactoelib.Move
import kotlin.browser.document
import kotlin.browser.window

interface WaitingPath: ActivePath {
    val waiting: Waiting
}
@UseExperimental(ObsoleteCoroutinesApi::class)
class Waiting(
    parent: Active,
    val gs: GS.Waiting
): ViewTC(parent), WaitingPath, ActivePath by parent, BackCsDbKillsUixApi, HasBack by parent {
    override val waiting = this
    override val rawView = ui()

    init {
        launchReport {
            val e = loggedIn
                .inboxMoves
                .listEvents {
                    Move.game eq gs.game
                    Move.seq.asc
                }
                .filterIsInstance<ListEvent.Add<FsDoc<Move<*>>>>()
                .receive()

            txTry {
                val st = loggedIn.statusDoc.getOrFail().doc

                when  {
                    st is GameStatus.Waiting && st.game.now == gs.game -> {
                        loggedIn.statusDoc.set(
                            GameStatus.Playing().apply {
                                this.opponent %= e.item.rxv.now.player.now
                                this.game %= e.item.rxv.now.game.now
                            }
                        )
                    }
                    else -> {
                        rollback()
                    }
                }
            }
        }
    }
}