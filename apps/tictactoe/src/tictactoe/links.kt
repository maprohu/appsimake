package tictactoe

import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import firebase.DbApi
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

}
