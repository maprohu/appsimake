package tictactoe.active

import commonshr.*
import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.topandcontent.ProgressBackTC
import commonui.topandcontent.ProgressTC
import commonui.view.*
import domx.remAssign
import firebase.CsDbKillsApi
import firebase.auth.uid
import firebase.firestore.*
import kotlinx.coroutines.await
import rx.*
import tictactoe.board.Board
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus
import tictactoelib.Lounge
import tictactoelib.Move
import tictactoelib.tictactoeLib
import kotlin.random.Random

interface ActivePath: LoggedInPath {
    val active: Active
}

sealed class GS {
    object None: GS()
    data class Waiting(val game: String): GS()
    data class Playing(
        val opponent: String,
        val game: String
    ): GS() {
        companion object {
            fun of(gs: GameStatus.Playing) = Playing(
                opponent = gs.opponent.now,
                game = gs.game.now
            )
        }
    }
}

class Active(
    from: LoggedIn,
    val linkage: Linkage
): MultiViewTC(from), CsDbKillsApi, LinkPointItem, ActivePath, LoggedInPath by from, HasBackKillsRoutingTC, HasRoutingTC by from, HasBack by linkage {
    override val active: Active = this

    val gState = rx {
        loggedIn.gameStatus().let { gs ->
            when (gs) {
                is GameStatus.Waiting -> {
                    GS.Waiting(gs.game.now)
                }
                is GameStatus.Playing -> {
                    GS.Playing.of(gs)
                }
                else -> {
                    GS.None
                }
            }
        }
    }


    override val currentView = Var<IViewTC>(
        ProgressTC(this@Active)
    ).oldKilled

    fun hourglass() {
        currentView %= ProgressTC(this@Active)
    }

    init {
        gState.forEach { gs ->
            currentView.now = when (gs) {
                GS.None -> {
                    ProgressBackTC(this@Active) { tb ->
                        tb.title %= "Waiting Room"
                    }
                }
                is GS.Waiting -> {
                    Waiting(this@Active, gs)
                }
                is GS.Playing -> {
                    playing(gs)
                }
            }
        }
    }

    fun playing(gs: GS.Playing): Board {
        fun leave(andWait: Boolean) {

            globalStatus %= if (andWait) "Returning to Waiting Room..."
            else "Going offline..."

            hourglass()

            loggedIn.launchReport {
                txTry {
                    val st = loggedIn.statusDoc.getOrDefault { GameStatus.Online() }.doc

                    if (
                        st is GameStatus.Playing &&
                        st.game.now == gs.game
                    ) {
                        postMove(
                            loggedIn,
                            GS.Playing.of(st),
                            st.seq.now + 1,
                            Move.Leave()
                        )

                        loggedIn.statusDoc.txSet(
                            if (andWait) {
                                GameStatus.Online()
                            } else {
                                GameStatus.Offline()
                            }
                        )

                        loggedIn.inboxMoves.query {
                            Move.game eq gs.game
                        }.get().await().docs.forEach {
                            tx.delete(it.ref)
                        }
                    } else {
                        rollback("Leaving obsolete game.")
                    }
                }


                if (!andWait) {
                    back()
                }
            }
        }

        return Board(
            this,
            linkage,
            loggedIn,
            control = {
                OnlineBoardControl(
                    this,
                    gs,
                    goOffline = {
                        leave(false)
                    },
                    restart = {
                        leave(true)
                    }
                )
            }
        )
    }

    init {
        launchReport {
            for (gs in loggedIn.gameStatus.toChannel()) {
                when (gs) {
                    is GameStatus.Online -> {
                        val game = tictactoeLib.app.tmp.randomDoc.id
                        txTry {
                            val st = loggedIn.statusDoc.getOrDefault { GameStatus.Online() }

                            when (st.doc) {
                                is GameStatus.Online -> {
                                    val lounge = loggedIn.lounge.getOrDefault { Lounge.Empty() }.doc

                                    when (lounge) {
                                        is Lounge.Empty -> {
                                            loggedIn.lounge.txSet(
                                                Lounge.Waiting().apply {
                                                    this.user %= uid
                                                    this.game %= game
                                                }
                                            )
                                            loggedIn.statusDoc.txSet(
                                                GameStatus.Waiting().apply {
                                                    this.game %= game
                                                }
                                            )
                                        }
                                        is Lounge.Waiting -> {
                                            loggedIn.lounge.txSet(
                                                Lounge.Empty()
                                            )
                                            val newSt = GameStatus.Playing().apply {
                                                this.opponent %= lounge.user.now
                                                this.game %= lounge.game.now
                                            }

                                            loggedIn.statusDoc.txSet(newSt)

                                            val newGs = GS.Playing.of(newSt)

                                            postMove(
                                                loggedIn,
                                                newGs,
                                                newSt.seq.now,
                                                Move.Start().apply {
                                                    this.firstPlayer %= if (Random.nextBoolean()) {
                                                        loggedIn.uid
                                                    } else {
                                                        newGs.opponent
                                                    }
                                                }
                                            )
                                        }
                                    }
                                }
                                else -> {
                                    rollback("game already created: ${st.doc.type.now}")
                                }
                            }
                        }
                    }
                    else -> {}
                }
            }
        }
    }


}


