package tictactoe.active

import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.topandcontent.ProgressBackTC
import commonui.view.*
import domx.remAssign
import firebase.CsDbKillsApi
import firebase.auth.uid
import firebase.firestore.*
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus
import tictactoelib.Lounge

interface ActivePath: LoggedInPath {
    val active: Active
}

sealed class GS {
    object None: GS()
    object Waiting: GS()
    data class Playing(val opponent: String): GS()
}

class Active(
    from: LoggedIn,
    linkage: Linkage
): MultiViewTC(from), CsDbKillsApi, LinkPointItem, ActivePath, LoggedInPath by from, HasBackKillsRoutingTC, HasRoutingTC by from, HasBack by linkage {
    override val active: Active = this

    val gState = rx {
        loggedIn.gameStatus().let { gs ->
            when (gs) {
                null, is GameStatus.None -> {
                    GS.None
                }
                is GameStatus.Waiting -> {
                    GS.Waiting
                }
                is GameStatus.Playing -> {
                    GS.Playing(gs.opponent.now)
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
                GS.Waiting -> {
                    Waiting(this@Active)
                }
                is GS.Playing -> {
                    Playing(this@Active, gs.opponent)
                }
            }

        }
    }.oldKilled

    fun reset() {
        // TODO send goodbye message
        loggedIn.statusDoc.editableOf(GameStatus.None()).save()
    }

    init {
        launchReport {
            for (gs in loggedIn.gameStatus.toChannel()) {
                when (gs) {
                    is GameStatus.None -> {
                        txTry {
                            val st = loggedIn.statusDoc.getOrDefault { GameStatus.None() }

                            when (st.doc) {
                                is GameStatus.None -> {
                                    val lounge = loggedIn.lounge.getOrDefault { Lounge() }

                                    val opponent = lounge.doc.user.now

                                    if (opponent == null) {
                                        loggedIn.statusDoc.set(
                                            GameStatus.Waiting()
                                        )
                                        loggedIn.lounge.set(
                                            lounge.doc.apply {
                                                user %= uid
                                            }
                                        )
                                    } else {
                                        loggedIn.statusDoc.set(
                                            GameStatus.Playing().apply {
                                                this.opponent %= opponent
                                            }
                                        )
                                        loggedIn.lounge.set(
                                            lounge.doc.apply {
                                                user %= null
                                            }
                                        )
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

