package tictactoe.active

import commonshr.tmp
import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.topandcontent.ProgressBackTC
import commonui.view.*
import domx.remAssign
import firebase.CsDbKillsApi
import firebase.auth.uid
import firebase.firestore.*
import tictactoe.board.Board
import tictactoe.board.BoardControl
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus
import tictactoelib.Lounge
import tictactoelib.tictactoeLib

interface ActivePath: LoggedInPath {
    val active: Active
}

sealed class GS {
    object None: GS()
    data class Waiting(val game: String): GS()
    data class Playing(
        val opponent: String,
        val game: String
    ): GS()
}

class Active(
    from: LoggedIn,
    val linkage: Linkage
): MultiViewTC(from), CsDbKillsApi, LinkPointItem, ActivePath, LoggedInPath by from, HasBackKillsRoutingTC, HasRoutingTC by from, HasBack by linkage {
    override val active: Active = this

    val gState = rx {
        loggedIn.gameStatus().let { gs ->
            when (gs) {
                null, is GameStatus.None -> {
                    GS.None
                }
                is GameStatus.Waiting -> {
                    GS.Waiting(gs.game.now)
                }
                is GameStatus.Playing -> {
                    GS.Playing(gs.opponent.now, gs.game.now)
                }
            }
        }
    }

    override val currentView = rx<IViewTC> {
        gState().let { gs ->
            when (gs) {
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
    }.oldKilled

    fun reset() {
        // TODO send goodbye message
        loggedIn.statusDoc.editableOf(GameStatus.None()).save()
    }

    fun playing(gs: GS.Playing): Board {
        return Board(
            this,
            linkage,
            loggedIn,
            control = { OnlineBoardControl(this, gs) },
            restart = {
                reset()
            }
        )
    }

    init {
        launchReport {
            for (gs in loggedIn.gameStatus.toChannel()) {
                when (gs) {
                    null, is GameStatus.None -> {
                        val game = tictactoeLib.app.tmp.randomDoc.id
                        txTry {
                            val st = loggedIn.statusDoc.getOrDefault { GameStatus.None() }

                            when (st.doc) {
                                is GameStatus.None -> {
                                    val lounge = loggedIn.lounge.getOrDefault { Lounge.Empty() }.doc

                                    when (lounge) {
                                        is Lounge.Empty -> {
                                            loggedIn.lounge.set(
                                                Lounge.Waiting().apply {
                                                    this.user %= uid
                                                    this.game %= game
                                                }
                                            )
                                            loggedIn.statusDoc.set(
                                                GameStatus.Waiting().apply {
                                                    this.game %= game
                                                }
                                            )
                                        }
                                        is Lounge.Waiting -> {
                                            loggedIn.lounge.set(
                                                Lounge.Empty()
                                            )
                                            loggedIn.statusDoc.set(
                                                GameStatus.Playing().apply {
                                                    this.opponent %= lounge.user.now
                                                    this.game %= lounge.game.now
                                                }
                                            )
                                        }
                                    }
                                }
                                else -> {
                                    rollback()
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

