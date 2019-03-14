package tasks.listtags

import commonfb.FBFromApi
import commonshr.FsDoc
import commonshr.idOrFail
import commonui.*
import commonui.widget.TopAndContent
import kotlinx.coroutines.launch
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import taskslib.Tag

interface ListTagsPath: LoggedInPath {
    val listTags: ListTags
}
class ListTags(
    from: LoggedIn
): ForwardBase<TopAndContent>(from), ListTagsPath, LoggedInPath by from, FBFromApi {
    override val listTags = this

    fun newTag() = advance {
        links.newTag.fwd()
    }

    fun FsDoc<Tag>.edit() = launch {
        links.editTag.fwd(idOrFail)
    }

    override val rawView = ui()
}