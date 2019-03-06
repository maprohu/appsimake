package checklist.edit

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import rx.RxMutableList
import common.eventsEmitter
import commonfb.FBApi
import commonshr.*
import commonshr.properties.now
import commonshr.properties.remAssign
import commonui.EditFromKillsUixApi
import commonui.editing.RxEditing
import commonui.widget.ForwardImpl
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import rx.Var

interface EditPath: LoggedInPath {
    val edit: Edit
}

class Edit(
    loggedIn: LoggedIn,
    override val from: ForwardImpl<TopAndContent, *>,
    initial: FsDoc<Checklist>
): UIBase<TopAndContent>(from), EditPath, LoggedInPath by loggedIn, FBApi, EditFromKillsUixApi {
    override val edit = this

    override val editing: RxEditing<Checklist> = rxEditing(initial) { current ->
        if (adder.now.isNotBlank()) {
            performAdd()
        }
    }

    val items = RxMutableList<ChecklistItem>().apply {
        addAll(editing.current.items.now)
        eventsEmitter(false).invoke {
            editing.current.items %= toList()
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
        editing.extraDirty.transform { d -> d + rx { it().isNotBlank() } }
    }

    var performAdd = {}

    override val rawView = ui()
}


