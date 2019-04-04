package tictactoe.active

import commonfb.FBBackApi
import commonshr.Runner
import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.topandcontent.ProgressBackTC
import commonui.topandcontent.ProgressTC
import commonui.view.*
import commonui.widget.TopAndContent
import domx.remAssign
import kotlinx.coroutines.launch
import rx.RxIface
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus

interface ActivePath: LoggedInPath {
    val active: Active
}

class Active(
    val from: LoggedIn,
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

    fun setup() = launchReport {


    }

    init {
        setup()
    }


}

