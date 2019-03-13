package checklist

import checklist.edit.Edit
import checklist.loggedin.LoggedIn
import checklist.view.ViewChecklist
import commonfb.FB
import commonfb.FBLinks
import commonfb.FBLinksDeps
import commonfb.loginbase.enablePersistenceAndWait
import commonfb.loginbase.loginHandler
import commonfb.persistentDb
import commonshr.HasCsKills
import commonshr.HasKills
import commonshr.toFsDoc
import commonui.*
import commonui.error.ErrorTC
import commonui.widget.Body
import commonui.widget.BodyTC
import commonui.widget.HourglassView
import commonui.widget.TopAndContent
import firebase.DbApi
import firebase.DbDeps
import firebase.HasDb
import firebase.firestore.get
import firebase.firestore.withDefaultSettings
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlinx.coroutines.launch

interface LinksPath: DbApi {
    val links: Links
}
class Links(
    deps: FBLinksDeps
): FBLinks(deps), LinksPath {
    override val links = this

    override val welcome by link(true) {
        LoggedIn(
            this,
            deps.hole,
            login()
        ).apply {
            displayRoute = { deps.hole %= this }
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
