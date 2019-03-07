package tasks.listtags

import commonfb.FBApi
import commonfb.FBFromApi
import commonshr.FsDoc
import commonui.Editor
import commonui.HasFrom
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import tasks.edittag.EditTag
import tasks.loggedin.LoggedIn
import tasks.loggedin.LoggedInPath
import tasks.viewtask.ViewTask
import tasks.viewtask.ViewTaskPath
import taskslib.Tag

interface ListTagsPath: LoggedInPath {
    val listTags: ListTags
}
class ListTags(
    override val from: LoggedIn
): ForwardBase<TopAndContent>(from), ListTagsPath, LoggedInPath by from, FBFromApi {
    override val listTags = this

    fun newTag() {
        exec {
            forward.switchTo {
                EditTag(this, Tag().toRandomFsDoc(loggedIn.userTags)).apply {
                    item.live
                }
            }
        }
    }

    fun FsDoc<Tag>.edit() {
        exec {
            forward.switchTo {
                EditTag(this@ListTags,this)
            }
        }
    }



    override val rawView = ui()
}