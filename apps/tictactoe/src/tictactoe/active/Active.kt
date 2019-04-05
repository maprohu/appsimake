package tictactoe.active

import commonfb.FBBackApi
import commonshr.Runner
import commonshr.toFsEditable
import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.topandcontent.ProgressBackTC
import commonui.topandcontent.ProgressTC
import commonui.view.*
import commonui.widget.TopAndContent
import domx.remAssign
import firebase.firestore.*
import kotlinx.coroutines.launch
import rx.RxIface
import rx.mapAsync
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus
import tictactoelib.PublicGame

interface ActivePath: LoggedInPath {
    val active: Active
}

class Active(
    from: LoggedIn,
    linkage: Linkage
): MultiViewTC(from), LinkPointItem, ActivePath, LoggedInPath by from, HasBackKillsRoutingTC, HasRoutingTC by from, HasBack by linkage {
    override val active: Active = this

    override val currentView = rx<IViewTC> {
        from.gameStatus().let { gs ->
            when (gs) {
                null, is GameStatus.None -> {
                    ProgressBackTC(this@Active) { tb ->
                        tb.title %= "Waiting Room"
                    }
                }
                is GameStatus.InGame.Waiting -> {
                    Waiting(this@Active)
                }
                is GameStatus.InGame.Playing -> {
                    Playing(this@Active)
                }
            }

        }
    }.oldKilled


    init {
        launchReport {
            for (gs in loggedIn.gameStatus.toChannel()) {
                when (gs) {
                    is GameStatus.None -> {
                        txTry {
                            val st = loggedIn.statusDoc.getOrDefault { GameStatus.None() }

                            when (st.doc) {
                                is GameStatus.None -> {
                                    val pub = loggedIn.publicColl.randomDoc
                                    val gameId = pub.id

                                    pub.set(
                                        PublicGame().apply {
                                            this.from %= loggedIn.user.uid
                                        }
                                    )

                                    loggedIn.statusDoc.set(
                                        GameStatus.InGame.Waiting().apply {
                                            this.gameId %= gameId
                                        }
                                    )

                                    gameId
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

