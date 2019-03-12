package checklist.loggedin

import checklist.Checklist
import checklist.checklistLib
import checklist.checklists
import checklist.edit.Edit
import checklist.home.Home
import checklist.home.HomePath
import checklist.view.ViewChecklist
import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonshr.private
import commonshr.FsDoc
import commonui.ForwardBase
import commonui.remAssign
import commonui.widget.TopAndContent
import firebase.HasDb
import firebase.User
import firebase.app.App
import firebase.firestore.*
import kotlinx.coroutines.launch

interface LoggedInPath: HomePath, HasDb {
    val loggedIn: LoggedIn
}

class LoggedIn(
    home: Home,
    user: User,
    val app: App,
    override val db: Firestore
): ForwardBase<TopAndContent>(home.hole), UserStateView, LoggedInPath, HomePath by home, FBApi {

    override val userState: UserState = UserState.LoggedIn(user)
    override val loggedIn: LoggedIn = this

    val checklists = checklistLib.app.private.doc(user.uid).checklists

    fun signOut() {
        launch {
            app.auth().signOut()
        }
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

    fun viewChecklist(cl: FsDoc<Checklist>) {
        this %= ViewChecklist(this, cl)
    }


    override val rawView: TopAndContent = ui()

}

