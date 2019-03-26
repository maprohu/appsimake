package tasks.loggedin

import commonfb.FBApi
import commonshr.private
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.links.LinkApi
import commonui.links.Linkage
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
    override val linkage: Linkage,
    hole: HasKillsRouting<TopAndContent>,
    user: User
): ForwardTC(hole), LoggedInPath, LinksPath by links, FBApi, LinkApi<LoggedIn> {

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

    fun signOut() = advance {
        links.signOut()
    }

    fun listTasks() = advance {
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

    fun listTags() = advance {
        links.listTags.fwd()
    }

    fun newTask() = advance {
        links.newTask.fwd()
    }

    fun FsDoc<Task>.view() = advance {
        links.viewTask.fwd(idOrFail)
    }

    override val rawView: TopAndContent = ui()

}

