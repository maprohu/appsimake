package checklist.view

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import checklist.loggedin.LoggedInTC
import commonfb.FBBackApi
import commonshr.*
import commonui.*
import commonui.links.Linkage
import commonui.view.*

interface ViewPath: LoggedInPath {
    val viewChecklist: ViewChecklist
}
class ViewChecklist(
    from: LoggedIn,
    override val linkage: Linkage,
    val editable: FsEditable<Checklist>
): ForwardTC(from), LoggedInTC<ViewChecklist>, ViewPath, LoggedInPath by from, FBBackApi, HasBack by linkage {
    override val viewChecklist = this

    val chklist = editable.toFsDoc().live

    val Checklist.fsDoc get() = toFsDoc(editable.id.toFsId(true))


    fun Checklist.toggle(item: ChecklistItem) {
        item.checked.rxv.transform { !it }
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
        back()
    }

    fun editChecklist() = advance {
        links.editViewChecklist.fwd()
    }

    override val rawView = ui()

}