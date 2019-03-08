package tasks.selecttags

import commonfb.FBFromApi
import commonshr.FsDoc
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import rx.Var
import tasks.edittag.EditTag
import tasks.listtasks.ListTasks
import tasks.listtasks.ListTasksPath
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Tag

interface SelectTagsPath: ListTasksPath {
    val selectTags: SelectTags
}
class SelectTags(
    override val from: ListTasks,
    val result: Var<List<String>>
): ForwardBase<TopAndContent>(from), SelectTagsPath, ListTasksPath by from, FBFromApi {
    override val selectTags = this

    val current = Var(result.now)

    fun cancel() {
        from.redisplay()
    }

    fun submit() {
        result %= current.now
        from.redisplay()
    }

    override val rawView = ui()
}