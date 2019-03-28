package index

import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonshr.toFsEditable
import commonui.*
import commonui.links.StringHasher
import firebase.DbApi
import index.home.Home

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FbLinksDeps
): FbLinksFactory(deps), LinksPath {
    override val links = this

    override val home = root { lnk ->
        Home(
            this,
            lnk,
            deps.hole
        ).apply {
            deps.hole %= this
        }
    }

}
