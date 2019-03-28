package tasks.selecttags

import commonfb.FBBackApi
import commonui.HasBack
import commonui.links.Linkage
import rx.Var
import tasks.listtasks.ListTasks
import tasks.listtasks.ListTasksPath
import commonui.view.*

interface SelectTagsPath: ListTasksPath {
    val selectTags: SelectTags
}
class SelectTags(
    from: ListTasks,
    linkage: Linkage
): ForwardTC(from), SelectTagsPath, ListTasksPath by from, FBBackApi, HasBack by linkage {
    override val selectTags = this

    val current = Var(listTasks.tags.now)

    fun cancel() {
        back()
    }

    fun submit() {
        listTasks.tags %= current.now
        back()
    }

    override val rawView = ui()
}