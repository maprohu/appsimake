package index

import commonfb.FbLinksApi
import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonshr.toFsEditable
import commonui.*
import commonui.links.StringHasher
import commonui.view.forwarding
import firebase.DbApi
import index.about.About
import index.home.Home

interface LinksPath: FbLinksApi {
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

    val about by home.child { home, linkage ->
        About(
            home,
            linkage
        ).forwarding(home)
    }

}
