package tasks.listtasks

import commonfb.FBBackApi
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.links.LinkApi
import commonui.links.Linkage
import commonui.widget.TopAndContent
import rx.Var
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import tasks.loggedin.LoggedInTC
import taskslib.Task
import commonui.view.*

interface ListTasksPath: LoggedInPath {
    val listTasks: ListTasks
}
class ListTasks(
    from: LoggedIn,
    override val linkage: Linkage
): ForwardBase<TopAndContent>(from), LoggedInTC<ListTasks>, ListTasksPath, LoggedInPath by from, FBBackApi, HasBack by linkage {
    override val listTasks = this

    val tags = Var(emptyList<String>())

    fun selectTags() = advance {
        links.selectTags.fwd()
    }

    fun newTask() = advance {
        links.newTask.fwd()
    }

    fun FsDoc<Task>.view() = advance {
        links.viewTask.fwd(idOrFail)
    }

    override val rawView = ui()
}



