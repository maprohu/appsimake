package tictactoe.board

import commonfb.FBBackApi
import commonui.*
import commonui.links.Linkage
import commonui.view.ForwardTC
import commonui.widget.TopAndContent
import tictactoe.loggedin.LoggedInPath
import tictactoe.loggedin.LoggedInTC

interface BoardPath: LoggedInPath {
    val board: Board
}

class Board(
    from: LoggedInTC<*>,
    linkage: Linkage,
    val control: BoardControl
): ForwardTC(from), BoardPath, LoggedInPath by from, FBBackApi, HasBack by linkage {
    override val board: Board = this

    override val rawView: TopAndContent = ui()
}

class BoardConfig(
    val title: String
) {
    companion object {
        fun singlePlayer() = BoardConfig(
            title = "Single Player"
        )
    }
}


