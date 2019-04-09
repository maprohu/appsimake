package tictactoe.active

import commonfb.BackCsDbKillsUixApi
import commonshr.*
import commonui.*
import commonui.view.*
import firebase.auth.uid
import firebase.firestore.*
import kotlinx.coroutines.ObsoleteCoroutinesApi
import tictactoelib.GameStatus
import tictactoelib.Lounge
import tictactoelib.Move
import kotlin.random.Random

interface WaitingPath: ActivePath {
    val waiting: Waiting
}
@UseExperimental(ObsoleteCoroutinesApi::class)
class Waiting(
    parent: Active,
    val gs: GS.Waiting
): ViewTC(parent), IViewTC, WaitingPath, ActivePath by parent, BackCsDbKillsUixApi, HasBack by parent {
    override val waiting = this
    override val rawView = ui()

    fun goOffline() {
        globalStatus %= "Going offline..."

        active.hourglass()

        loggedIn.launchReport {
            txTry {
                val st = loggedIn.statusDoc.getOrFail().doc

                if (
                    st is GameStatus.Waiting &&
                            st.game.now == gs.game
                ) {
                    val lounge = loggedIn.lounge.getOrFail().doc

                    if (
                            lounge is Lounge.Waiting &&
                            lounge.user.now == loggedIn.uid &&
                            lounge.game.now == gs.game
                    ) {
                        loggedIn.lounge.txSet(
                            Lounge.Empty()
                        )
                    } else {
                        loggedIn.lounge.txSet(lounge)
                    }

                    loggedIn.statusDoc.txSet(
                        GameStatus.Offline()
                    )
                } else {
                    rollback("Leaving obsolete game.")
                }
            }

            back()
        }
    }

    init {
        launchReport {
            globalStatus %= "Waiting for game start..."

            val e = loggedIn
                .inboxMoves
                .listEvents {
                    Move.game eq gs.game
                }
                .filterIsInstance<ListEvent.Add<FsDoc<Move.Start>>>()
                .receive()

            globalStatus %= "Starting game..."

            txTry {
                val st = loggedIn.statusDoc.getOrFail().doc

                when  {
                    st is GameStatus.Waiting && st.game.now == gs.game -> {
                        val game = e.item.rxv.now.game.now
                        val opponent = e.item.rxv.now.from.now
                        val newSt = GameStatus.Playing().apply {
                            this.opponent %= opponent
                            this.game %= game
                        }
                        loggedIn.statusDoc.txSet(newSt)
                    }
                    else -> {
                        rollback()
                    }
                }
            }
        }
    }
}