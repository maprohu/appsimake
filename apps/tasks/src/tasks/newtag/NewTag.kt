package tasks.newtag

import commonfb.FBBackApi
import commonui.*
import commonui.editing.onPersist
import commonui.links.Linkage
import commonui.widget.TopAndContent
import tasks.listtags.ListTags
import tasks.listtags.ListTagsPath

interface NewTagPath: ListTagsPath {
    val newTag: NewTag
}
class NewTag(
    from: ListTags,
    linkage: Linkage
): ForwardBase<TopAndContent>(from), NewTagPath, ListTagsPath by from, FBBackApi, Creator, HasBack by linkage {
    override val newTag = this

    val item = loggedIn.userTags.randomEditable()

    override val creating = rxCreating(
        item,
        onPersist {
            from.editTag(item.id.id, true)
        }
    )

    override val rawView = ui()
}