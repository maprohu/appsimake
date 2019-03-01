package checklist.loggedin

import checklist.Checklist
import checklist.ChecklistItem
import checklist.checklistLib
import checklist.checklists
import checklist.edit.Edit
import checklist.home.Home
import checklist.home.HomePath
import checklist.home.ui
import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonlib.private
import commonshr.properties.remAssign
import commonshr.remAssign
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import firebase.User
import firebase.app.App
import firebase.firestore.*
import kotlinx.coroutines.launch

interface LoggedInPath: HomePath, HasFirestoreApi {
    val loggedIn: LoggedIn
}

class LoggedIn(
    home: Home,
    user: User,
    val app: App,
    override val db: Firestore
): ForwardBase<TopAndContent>(home), UserStateView, LoggedInPath, HomePath by home, FBApi {

    override val userState: UserState = UserState.LoggedIn(user)
    override val loggedIn: LoggedIn = this

    val checklists = checklistLib.app.private.doc(user.uid).checklists

    fun signOut() {
        launch {
            app.auth().signOut()
        }
    }

    suspend fun new() {
        forward.switchTo {
            val item = Checklist().apply {
                name %= "<unknown>"
                items %= listOf(
                    ChecklistItem().apply {
                        name %= "nchk"
                        checked %= false
                    },
                    ChecklistItem().apply {
                        name %= "chk"
                        checked %= true
                    }
                )
            }.toRandomFsDoc(checklists)

            Edit(
                this,
                this,
                item
            ).apply {
                item.live
            }
        }
    }


    override val rawView: TopAndContent = ui()

}

