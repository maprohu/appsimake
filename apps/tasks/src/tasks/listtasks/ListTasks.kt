package tasks.listtasks

import commonfb.FBFromApi
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import rx.Var
import tasks.loggedin.LoggedIn
import tasks.viewtask.ViewTaskApi
import tasks.loggedin.LoggedInPath
import tasks.selecttags.SelectTags

interface ListTasksPath: LoggedInPath {
    val listTasks: ListTasks
}
class ListTasks(
    override val from: LoggedIn
): ForwardBase<TopAndContent>(from), ListTasksPath, LoggedInPath by from, FBFromApi, ViewTaskApi {
    override val listTasks = this

    val tags = Var(emptyList<String>())

    fun selectTags() {
        exec {
            forward.switchTo {
                SelectTags(this, tags)
            }
        }
    }


    override val rawView = ui()
}



