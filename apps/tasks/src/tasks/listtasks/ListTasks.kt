package tasks.listtasks

import commonfb.FBFromApi
import commonshr.FsDoc
import commonui.ForwardBase
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
): ForwardBase<TopAndContent>(from), ListTasksPath, LoggedInPath by from, FBFromApi {
    override val listTasks = this

    val tags = Var(emptyList<String>())

    fun selectTags() {
//        exec {
//            forward.switchTo {
//                SelectTags(this, tags)
//            }
//        }
    }

    fun newTask() {}

    fun FsDoc<Task>.view() {}

    override val rawView = ui()
}



