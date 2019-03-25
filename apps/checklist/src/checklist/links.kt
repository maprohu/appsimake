package checklist

import checklist.edit.Edit
import checklist.loggedin.LoggedIn
import checklist.view.ViewChecklist
import commonfb.FbLinks
import commonfb.FbLinksDeps
import commonui.*
import commonui.error.ErrorTC
import firebase.DbApi

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FbLinksDeps
): FbLinks(deps), LinksPath {
    override val links = this

    override val welcome by link(true) {
        LoggedIn(
            this,
            deps.hole,
            login()
        ).apply {
            deps.hole %= this
        }
    }

    val viewChecklist by param<String>().link { p ->
        welcome.get()?.let { li ->
            li.hourglass()

            try {
                ViewChecklist(
                    li,
                    li.checklists.doc(p).get()
                ).apply {
                    li %= this
                    chklist.live
                }
            } catch (e: dynamic) {
                li %= ErrorTC(li, e)

                null
            }
        }
    }

    val editChecklist by param<String>().link { p ->
        viewChecklist.get(p)?.let { vc ->
            Edit(
                vc.loggedIn,
                vc,
                vc.chklist,
                GoBack2Redisplay
            ).apply {
                vc %= this
            }
        }
    }

    val newChecklist by link {
        welcome.get()?.let { li ->
            Edit(
                li,
                li,
                li.createNewChecklistDoc()
            ).apply {
                initial.live
                li %= this
            }
        }
    }




}
