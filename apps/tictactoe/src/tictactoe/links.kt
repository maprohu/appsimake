package tictactoe

import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonui.view.forwarding
import firebase.DbApi
import tictactoe.board.Board
import tictactoe.board.BoardConfig
import tictactoe.board.SinglePlayerControl
import tictactoe.loggedin.LoggedIn

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FbLinksDeps
): FbLinksFactory(deps), LinksPath {
    override val links = this

    override val home = root { lnk ->
        LoggedIn(
            this,
            lnk,
            deps.hole,
            requestUser()
        ).apply {
            deps.hole %= this
        }
    }

    val singlePlayer by home.child { parent, lnk ->
        Board(
            parent,
            lnk,
            SinglePlayerControl()
        ).forwarding(parent)
    }


}
