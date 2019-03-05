package checklist.view

import checklist.Checklist
import checklist.ChecklistItem
import checklist.edit.Edit
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import commonfb.FBApi
import commonshr.FsDoc
import commonshr.properties.now
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent

interface ViewPath: LoggedInPath {
    val viewChecklist: ViewChecklist
}
class ViewChecklist(
    from: LoggedIn,
    val chklist: FsDoc<Checklist>
): ForwardBase<TopAndContent>(from), ViewPath, LoggedInPath by from, FBApi {
    override val viewChecklist = this
    override val rawView = ui()

    fun ChecklistItem.toggle() {
        checked.rxv.transform { !it }
        chklist.save()
    }

    fun clearChecklist() {
        chklist.doc.items.now.forEach { i -> i.checked.now = false }
        chklist.save()
    }

    fun deleteChecklist() {
        loggedIn.exec {
            chklist.delete()
            loggedIn.redisplay()
        }
    }

    fun editChecklist() {
        exec {
            forward.switchTo {
                Edit(
                    loggedIn,
                    this,
                    chklist
                )
            }
        }
    }


}