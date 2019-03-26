package tasks.edittag

import commonfb.FBFromApi
import commonshr.FsDoc
import commonshr.FsEditable
import commonshr.Trigger
import commonui.*
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath
import taskslib.Tag

interface EditTagPath: ListTagsPath {
    val editTag: EditTag
}
class EditTag(
    from: ListTags,
    item: FsEditable<Tag>,
    val delete: Trigger
): ForwardBase<TopAndContent>(from), EditTagPath, ListTagsPath by from, FBFromApi, Editor {
    override val editTag = this

    override val editing = rxEditing(
        item
    )

    override val rawView = ui()
}