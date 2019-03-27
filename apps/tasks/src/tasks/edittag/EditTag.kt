package tasks.edittag

import commonfb.FBBackApi
import commonshr.FsEditable
import commonui.*
import commonui.links.Linkage
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath
import taskslib.Tag

interface EditTagPath: ListTagsPath {
    val editTag: EditTag
}
class EditTag(
    from: ListTags,
    linkage: Linkage,
    item: FsEditable<Tag>
): ForwardBase<TopAndContent>(from), EditTagPath, ListTagsPath by from, FBBackApi, Editor, HasBack by linkage {
    override val editTag = this

    override val editing = rxEditing(item)

    override val rawView = ui()
}