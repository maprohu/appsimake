package checklist.loggedin

import checklist.checklistLib
import checklist.checklists
import checklist.home.Home
import checklist.home.HomePath
import checklist.home.ui
import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonlib.private
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import firebase.User
import firebase.app.App
import firebase.firestore.Firestore
import kotlinx.coroutines.launch

interface LoggedInPath: HomePath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    home: Home,
    user: User,
    val app: App,
    val db: Firestore
): UIBase<TopAndContent>(home), UserStateView, LoggedInPath, HomePath by home, FBApi {

    override val userState: UserState = UserState.LoggedIn(user)
    override val loggedIn: LoggedIn = this

    val checklists = checklistLib.app.private.doc(user.uid).checklists

    fun signOut() {
        launch {
            app.auth().signOut()
        }
    }


    override val rawView: TopAndContent = ui()

}

