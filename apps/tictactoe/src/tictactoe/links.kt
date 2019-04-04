package tictactoe

import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonui.view.forwarding
import firebase.DbApi
import tictactoe.loggedin.LoggedIn
import tictactoe.singleplayer.SinglePlayer

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
        SinglePlayer(
            parent,
            lnk
        ).forwarding(parent)
    }


}
