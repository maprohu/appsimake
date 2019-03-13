package tasks.selecttags

import commonfb.FBFromApi
import commonui.ForwardTC
import rx.Var
import tasks.listtasks.ListTasks
import tasks.listtasks.ListTasksPath

interface SelectTagsPath: ListTasksPath {
    val selectTags: SelectTags
}
class SelectTags(
    from: ListTasks,
    val result: Var<List<String>>
): ForwardTC(from), SelectTagsPath, ListTasksPath by from, FBFromApi {
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