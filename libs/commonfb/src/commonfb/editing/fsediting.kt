package commonfb.editing

import commonshr.FsDoc
import commonshr.properties.RxBase
import commonui.editing.RxEditing
import firebase.HasDbKills
import firebase.firestore.delete
import firebase.firestore.save
import rx.rx

fun <T: RxBase<*>> rxEditing(deps: HasDbKills, initial: FsDoc<T>, preSave: suspend (T) -> Unit): RxEditing<T> {
    return RxEditing(
        deps.kills,
        initial.rxv.now,
        canDelete = rx(deps) { initial.id.state().exists },
        delete = { initial.delete(deps) }
    ) { current ->
        preSave(current)
        FsDoc(
            initial.id,
            current
        ).save(deps)
    }
}

