package tasks.loggedin

import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonlib.private
import commonshr.FsDoc
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import firebase.HasDb
import firebase.User
import firebase.app.App
import firebase.firestore.*
import kotlinx.coroutines.launch
import tasks.home.Home
import tasks.home.HomePath
import taskslib.tasks
import taskslib.tasksLib

interface LoggedInPath: HomePath, HasDb {
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

    val private = tasksLib.app.private.doc(user.uid)
    val tasks = private.tasks

    fun signOut() {
        launch {
            app.auth().signOut()
        }
    }


    override val rawView: TopAndContent = ui()

}

