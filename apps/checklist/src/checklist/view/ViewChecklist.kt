package checklist.view

import checklist.Checklist
import checklist.ChecklistItem
import checklist.edit.Edit
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import commonfb.FBApi
import commonfb.FBFromApi
import commonshr.*
import commonshr.properties.copy
import commonui.ForwardBase
import commonui.FromKillsUixApi
import commonui.HasFrom
import commonui.SimpleFrom
import commonui.widget.TopAndContent
import kotlinx.coroutines.launch

interface ViewPath: LoggedInPath {
    val viewChecklist: ViewChecklist
}
class ViewChecklist(
    from: LoggedIn,
    val chklist: FsDoc<Checklist>
): ForwardBase<TopAndContent>(from), ViewPath, LoggedInPath by from, FBFromApi, HasFrom by SimpleFrom {
    override val viewChecklist = this

    val Checklist.fsDoc get() = toFsDoc(chklist.id)


    fun Checklist.toggle(item: ChecklistItem) {
        item.checked.rxv.transform {
            !it
        }
        fsDoc.save()
    }

    fun Checklist.clear() {
        items.now.forEach { i -> i.checked.now = false }
        fsDoc.save()
    }

    fun deleteChecklist() {
        loggedIn.launchNonCancellable {
            chklist.delete()
        }
        loggedIn.redisplay()
    }

    fun editChecklist() = launch {
//        this %= Edit(
//            loggedIn,
//            this,
//            chklist
//        )
        links.editChecklist.fwd(chklist.idOrFail)
    }

    override val rawView = ui()

}