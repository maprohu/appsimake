package tasks.edittag

import commonfb.FBFromApi
import commonshr.FsDoc
import commonui.Editor
import commonui.ForwardBase
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath
import taskslib.Tag

interface EditTagPath: ListTagsPath {
    val editTag: EditTag
}
class EditTag(
    from: ListTags,
    val item: FsDoc<Tag>
): ForwardBase<TopAndContent>(from), EditTagPath, ListTagsPath by from, FBFromApi, Editor {
    override val editTag = this
    init { item.live }

    override val editing = rxEditing(item)

    override val rawView = ui()
}