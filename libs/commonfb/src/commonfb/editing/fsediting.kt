package commonfb.editing

import commonshr.FsDoc
import commonshr.properties.RxBase
import commonui.editing.EditingApi
import commonui.editing.RxEditing
import firebase.HasDbKills
import firebase.firestore.save

fun <T: RxBase<*>> rxEditing(deps: HasDbKills, initial: FsDoc<T>, preSave: suspend (T) -> Unit): RxEditing<T> {
    return RxEditing(initial.doc, deps.kills) { current ->
        preSave(current)
        FsDoc(
            initial.id,
            current
        ).save(deps)
    }
}

