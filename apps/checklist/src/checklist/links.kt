package checklist

import checklist.editchecklist.EditChecklist
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInTC
import checklist.newchecklist.NewChecklist
import checklist.view.ViewChecklist
import commonfb.FbLinksDeps
import commonfb.FbLinksFactory
import commonshr.toFsEditable
import commonui.*
import commonui.links.StringHasher
import firebase.DbApi

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

    val viewChecklist by home.param(StringHasher).child { parent, id, lnk ->
        ViewChecklist(
            parent,
            lnk,
            parent.checklists.doc(id).get()
        ).forwarding(parent)
    }

    val editViewChecklist by viewChecklist.child { parent, lnk ->
        EditChecklist(
            parent,
            lnk,
            parent.chklist.toFsEditable(),
            deleteTrigger = { parent.backOnRedisplay() }
        ).forwarding(parent)
    }

    val editChecklist by base<LoggedInTC<*>>().param(StringHasher).child { parent, id, lnk ->
        EditChecklist(
            parent,
            lnk,
            parent.loggedIn.checklists.doc(id).get()
        ).forwarding(parent)
    }

    val newChecklist by base<LoggedInTC<*>>().child { parent, lnk ->
        NewChecklist(
            parent,
            lnk
        ).forwarding(parent)
    }




}
