package tasks.loggedin

import commonfb.FBApi
import commonfb.UserState
import commonfb.loginbase.UserStateView
import commonshr.private
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import firebase.HasDb
import firebase.User
import firebase.app.App
import firebase.firestore.*
import kotlinx.coroutines.launch
import tasks.home.Home
import tasks.home.HomePath
import tasks.viewtask.ViewTask
import taskslib.Task
import taskslib.hiddenTasks
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
    val tasksCollection = private.tasks
    val hiddenTasks = private.hiddenTasks

    val hiddenList = hiddenTasks.toList()
    val hiddenIds = hiddenList.ids

    fun signOut() {
        launch {
            app.auth().signOut()
        }
    }

    fun FsDoc<Task>.hide() {
        hiddenTasks.doc(idOrFail).new.save()
    }

    fun FsDoc<Task>.view() {
        exec {
            forward.switchTo {
                ViewTask(this@LoggedIn, this)
            }
        }
    }

    fun unhideAll() {
        hiddenList.forEach { it.delete() }
    }

    override val rawView: TopAndContent = ui()

}

