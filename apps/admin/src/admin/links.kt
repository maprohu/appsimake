package admin

import admin.edithtml.EditHtml
import admin.index.Index
import admin.loggedin.LoggedIn
import admin.loggedin.LoggedInTC
import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonlib.HtmlPage
import commonshr.toSource
import commonshr.toSourceRoot
import commonui.links.StringHasher
import commonui.view.forwarding
import firebase.DbApi
import firebase.firestore.getOrDefault
import firebase.firestore.getOrFail
import firebase.firestore.wrap

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FbLinksDeps
): FbLinksFactory(deps), LinksPath {
    override val links = this

    override val home = root { lnk ->
        val user = requestCustomToken(requestUser())

        LoggedIn(
            this,
            lnk,
            deps.hole,
            user
        ).apply {
            deps.hole %= this
        }
    }

    val index by home.child { loggedIn, linkage ->
        Index(
            loggedIn,
            linkage
        ).forwarding(loggedIn)
    }

    val editHtml by base<LoggedInTC<*>>().param(StringHasher).child { base, param, link ->
        EditHtml(
            base,
            link,
            db.doc(param).wrap<HtmlPage>().toSource { HtmlPage() }.getOrDefault { HtmlPage() }
        ).forwarding(base)
    }


}
