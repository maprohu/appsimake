package tasks.edittag

import commonfb.FBApi
import commonshr.FsDoc
import commonui.Editor
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Note
import taskslib.Tag

interface EditTagPath: ListTagsPath {
    val editTag: EditTag
}
class EditTag(
    override val from: ListTags,
    val item: FsDoc<Tag>
): ForwardBase<TopAndContent>(from), EditTagPath, ListTagsPath by from, FBApi, Editor {
    override val editTag = this

    override val editing = rxEditing(item)

    override val rawView = ui()
}