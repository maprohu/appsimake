package checklist.view

import checklist.Checklist
import checklist.ChecklistItem
import checklist.edit.Edit
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import commonfb.FBApi
import commonshr.FsDoc
import commonshr.docWrap
import commonshr.properties.copy
import commonshr.properties.now
import commonshr.toFsDoc
import commonui.widget.ForwardBase
import commonui.widget.TopAndContent
import rx.Var
import rx.toRx
import rx.toVar

interface ViewPath: LoggedInPath {
    val viewChecklist: ViewChecklist
}
class ViewChecklist(
    from: LoggedIn,
    val chklist: FsDoc<Checklist>
): ForwardBase<TopAndContent>(from), ViewPath, LoggedInPath by from, FBApi {
    override val viewChecklist = this

    val Checklist.fsDoc get() = toFsDoc(chklist.id)

    val docs = chklist.docWrap.docs().toRx(chklist.doc.copy())
//    val docs = Var(chklist.doc.copy())

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

    override val rawView = ui()

}