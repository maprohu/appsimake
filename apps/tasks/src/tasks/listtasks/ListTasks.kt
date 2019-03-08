package tasks.listtasks

import commonfb.FBFromApi
import commonshr.FsDoc
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import tasks.edittag.EditTag
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Tag
import taskslib.Task

interface ListTasksPath: LoggedInPath {
    val listTasks: ListTasks
}
class ListTasks(
    override val from: LoggedIn
): ForwardBase<TopAndContent>(from), ListTasksPath, LoggedInPath by from, FBFromApi {
    override val listTasks = this

    fun FsDoc<Task>.edit() {}

    fun newTask() {}



    override val rawView = ui()
}