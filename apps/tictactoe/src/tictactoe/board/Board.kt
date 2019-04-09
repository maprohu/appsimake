package tictactoe.board

import commonfb.FBBackApi
import commonui.*
import commonui.links.Linkage
import commonui.view.ForwardTC
import commonui.view.HasKillsRoutingTC
import commonui.widget.TopAndContent
import tictactoe.loggedin.LoggedIn
import tictactoe.loggedin.LoggedInPath
import tictactoe.loggedin.LoggedInTC

interface BoardPath: LoggedInPath {
    val board: Board
}

class Board(
    from: HasKillsRoutingTC,
    linkage: Linkage,
    loggedIn: LoggedIn,
    control: Board.() -> BoardControl
): ForwardTC(from), BoardPath, LoggedInPath by loggedIn, FBBackApi, HasBack by linkage {
    override val board: Board = this

    val control = control()

    override val rawView: TopAndContent = ui()
}

