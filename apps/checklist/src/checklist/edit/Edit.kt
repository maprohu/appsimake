package checklist.edit

import checklist.Checklist
import checklist.ChecklistItem
import checklist.loggedin.LoggedIn
import checklist.loggedin.LoggedInPath
import common.ListenableMutableList
import common.eventsEmitter
import commonfb.FBApi
import commonfb.editing.FsEditingApi
import commonshr.*
import commonshr.properties.TS
import commonshr.properties.now
import commonshr.properties.remAssign
import commonui.editing.RxEditing
import commonui.editing.EditingApi
import commonui.widget.ForwardImpl
import commonui.widget.TopAndContent
import commonui.widget.UIBase
import firebase.firestore.FirestoreViewApi
import rx.Var

interface EditPath: LoggedInPath {
    val edit: Edit
}

class Edit(
    loggedIn: LoggedIn,
    override val from: ForwardImpl<TopAndContent, *>,
    initial: FsDoc<Checklist>
): UIBase<TopAndContent>(from), EditPath, LoggedInPath by loggedIn, FBApi, FsEditingApi, FirestoreViewApi {
    override val edit = this

    override val editing: RxEditing<Checklist> = rxEditing(initial) { current ->
        if (adder.now.isNotBlank()) {
            performAdd()
        }
        current.ts %= TS.Server
    }

    val items = ListenableMutableList<ChecklistItem>().apply {
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


