package tasks.selecttags

import commonfb.FBFromApi
import commonui.ForwardTC
import commonui.LViewUnit
import rx.Var
import tasks.listtasks.ListTasks
import tasks.listtasks.ListTasksPath

interface SelectTagsPath: ListTasksPath {
    val selectTags: SelectTags
}
class SelectTags(
    from: ListTasks
): ForwardTC(from), SelectTagsPath, ListTasksPath by from, FBFromApi {
    override val selectTags = this

    val current = Var(listTasks.tags.now)

    fun cancel() {
        from.redisplay()
    }

    fun submit() {
        listTasks.tags %= current.now
        from.redisplay()
    }

    override val rawView = ui()
}