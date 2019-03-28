package checklist.editchecklist

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import checklist.loggedin.LoggedInTC
import commonfb.FBBackApi
import rx.RxMutableList
import commonshr.*
import commonui.*
import commonui.view.*
import commonui.editing.*
import commonui.links.Linkage
import killable.HasNoKill
import killable.Noop
import rx.Var
import rx.eventsEmitter

interface EditChecklistPath: LoggedInPath {
    val edit: EditChecklist
}

class EditChecklistControl(
    val item: Checklist,
    val bindings: Bindings
) {

    val items = RxMutableList<ChecklistItem>().apply {
        addAll(item.items.now)
        eventsEmitter(false).invoke {
            item.items %= toList()
        }
    }

    fun addItem(name: String) {
        items.add(
            0,
            ChecklistItem().apply {
                this.name %= name
            }
        )
    }

    val adder: Var<String> = Var("").also {
        bindings.addDirty(HasNoKill) { it().isNotBlank() }
    }

    var performAdd = {}

    fun preSave() {
        if (adder.now.isNotBlank()) {
            performAdd()
        }
    }
}


interface EditChecklistLike: BindKillsApi, CsApiCommonui, CsKillsApi, KillsUixApi
class EditChecklist(
    parent: LoggedInTC<*>,
    val linkage: Linkage,
    editable: FsEditable<Checklist>,
    deleteTrigger: Trigger = Noop
): ViewTC(parent), EditChecklistLike, EditChecklistPath, LoggedInPath by parent, FBBackApi, Editor, HasBack by linkage {
    override val edit = this


    override val editing: RxEditing<Checklist> = rxEditing(editable) { tr ->
        tr.copy(
            save = { current ->
                control.preSave()
                tr.save(current)
            },
            delete = {
                tr.delete()
                deleteTrigger()
            }
        )
    }

    val control = EditChecklistControl(editing.current, bindings)


    override val rawView = ui()
}


