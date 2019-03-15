package tasks.listtasks

import commonfb.FBFromApi
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.widget.TopAndContent
import rx.Var
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Task

interface ListTasksPath: LoggedInPath {
    val listTasks: ListTasks
}
class ListTasks(
    from: LoggedIn
): ForwardBase<TopAndContent>(from), ListTasksPath, LoggedInPath by from, FBFromApi, FromTC {
    override val listTasks = this

    val tags = Var(emptyList<String>())

    fun selectTags() = advance {
        links.selectTags.fwd()
    }

    fun newTask() = advance {
        links.newTask.fwd(links.listTasks)
    }

    fun FsDoc<Task>.view() = advance {
        links.viewTask.fwd(links.listTasks, idOrFail)
    }

    override val rawView = ui()
}



