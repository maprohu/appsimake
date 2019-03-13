package tasks.loggedin

import commonfb.FBApi
import commonshr.private
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.widget.TopAndContent
import firebase.User
import firebase.firestore.*
import kotlinx.coroutines.launch
import rx.Var
import rx.readOnly
import tasks.Links
import tasks.LinksPath
import tasks.listtags.ListTags
import tasks.listtasks.ListTasks
import taskslib.*

interface LoggedInPath: LinksPath {
    val loggedIn: LoggedIn
}

class LoggedIn(
    links: Links,
    hole: HasKillsRouting<TopAndContent>,
    user: User
): ForwardTC(hole), LoggedInPath, LinksPath by links, FBApi {

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
        links.signOut()
    }

//    fun newTask() {
//        exec {
//            forward.switchTo {
//                Task().toRandomFsDoc(tasksCollection).run {
//                    ViewTask(this@LoggedIn, this).apply {
//                        item.live
//                        forward.switchTo {
//                            EditTask(this)
//                        }
//                    }
//                }
//            }
//        }
//    }

    fun listTasks() = launch {
        links.listTasks.fwd()
    }

    fun FsDoc<Task>.hide() {
        hiddenTasks.doc(idOrFail).new.save()
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

    fun listTags() = launch {
        links.listTags.fwd()
    }

    fun newTask() {}

    fun FsDoc<Task>.view() = launch {
        links.viewTask.fwd(idOrFail)
    }

    override val rawView: TopAndContent = ui()

}

