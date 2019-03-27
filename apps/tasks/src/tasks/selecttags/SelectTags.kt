package tasks.selecttags

import commonfb.FBBackApi
import commonui.ForwardTC
import commonui.LViewUnit
import commonui.links.Linkage
import rx.Var
import tasks.listtasks.ListTasks
import tasks.listtasks.ListTasksPath

interface SelectTagsPath: ListTasksPath {
    val selectTags: SelectTags
}
class SelectTags(
    from: ListTasks,
    linkage: Linkage
): ForwardTC(from), SelectTagsPath, ListTasksPath by from, FBBackApi {
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