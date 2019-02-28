package checklist.loggedin

import checklist.Checklist
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
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import firebase.User
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.HasFirestore
import kotlinx.coroutines.launch

interface LoggedInPath: HomePath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    home: Home,
    user: User,
    val app: App,
    override val db: Firestore
): ForwardBase<TopAndContent>(home), UserStateView, LoggedInPath, HomePath by home, FBApi, HasFirestore {

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
            Edit(
                this,
                Checklist().apply {
                    props.collection = checklists
                }
            )
        }
    }

    override val rawView: TopAndContent = ui()

}

