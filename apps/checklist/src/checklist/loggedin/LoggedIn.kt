package checklist.loggedin

import checklist.*
import checklist.edit.Edit
import checklist.view.ViewChecklist
import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonshr.private
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.ForwardBase
import commonui.HasKillsRouting
import commonui.remAssign
import commonui.widget.TopAndContent
import firebase.HasDb
import firebase.User
import firebase.app.App
import firebase.firestore.*
import kotlinx.coroutines.launch

interface LoggedInPath: LinksPath, HasDb {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    hole: HasKillsRouting<TopAndContent>,
    user: User,
    override val db: Firestore
): ForwardBase<TopAndContent>(hole), LoggedInPath, LinksPath by links, FBApi {
    override val loggedIn: LoggedIn = this

    val checklists = checklistLib.app.private.doc(user.uid).checklists

    fun signOut() {
        links.signOut()
    }

    fun new() {
        val item = Checklist().apply {
            name %= "<unknown>"
        }.toRandomFsDoc(checklists)

        this %= Edit(
            this,
            this,
            item
        ).apply {
            item.live
        }
    }

    fun viewChecklist(cl: FsDoc<Checklist>) = launch {
//        this %= ViewChecklist(this, cl)
        links.viewChecklist.fwd(cl.idOrFail)
    }


    override val rawView: TopAndContent = ui()


}

