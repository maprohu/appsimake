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
import rx.RxIface
import rx.Var
import rx.readOnly
import tasks.data.tagsLookup
import tasks.home.Home
import tasks.home.HomePath
import tasks.listtags.ListTags
import tasks.listtasks.ListTasks
import tasks.viewtask.ViewTask
import taskslib.*

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
    val userTags = private.usertags

    val hiddenList = hiddenTasks.toList()
    val hiddenIds = hiddenList.ids

    val tags = userTags.listEvents {
        Tag.name.asc
    }.fsCache { id ->
        Tag().apply { name %= id }
    }

    val tagNameSet = Var(emptySet<String>()).apply {
        rx { tags.list.allRx().map { it().name() }.toSet() }.forEach { this@apply %= it }
    }.readOnly

    fun signOut() {
        launch {
            app.auth().signOut()
        }
    }

    fun newTask() {
        exec {
            ListTasks(this).apply {

            }
            Task().toRandomFsDoc(tasksCollection)
            forward.switchTo {
            }
        }
    }
    fun listTasks() {
        exec {
            forward.switchTo {
                ListTasks(this)
            }
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

    fun createTag(name: String): FsDoc<Tag> {
        return Tag().apply {
            this.name %= name
        }.toRandomFsDoc(userTags).apply {
            save()
        }
    }

    fun listTags() {
        exec {
            forward.switchTo {
                ListTags(this)
            }
        }
    }

    override val rawView: TopAndContent = ui()

}

