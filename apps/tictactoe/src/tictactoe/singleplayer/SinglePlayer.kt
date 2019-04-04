package tictactoe.singleplayer

import commonui.*
import commonui.links.LinkPointItem
import commonui.links.Linkage
import commonui.view.HasKillsRoutingTC
import commonui.view.HasRoutingTC
import commonui.view.IViewTC
import commonui.view.MultiViewTC
import rx.Var
import tictactoe.board.Board
import tictactoe.board.SinglePlayerControl
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath

interface SinglePlayerPath: LoggedInPath {
    val singlePlayer: SinglePlayer
}

class SinglePlayer(
    from: LoggedIn,
    val linkage: Linkage
): MultiViewTC(from), LinkPointItem, HasKillsRoutingTC, HasRoutingTC by from, SinglePlayerPath, LoggedInPath by from, HasBack by linkage {
    override val singlePlayer: SinglePlayer = this

    fun createBoard(): Board =
        Board(
            this,
            linkage,
            loggedIn,
            SinglePlayerControl(),
            restart = {
                currentView %= createBoard()
            }
        )

    override val currentView = Var<IViewTC>(createBoard())

}

