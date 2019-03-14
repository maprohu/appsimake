package commonfb.editing

import commonshr.*
import commonshr.properties.RxBase
import commonui.editing.RxEditing
import firebase.HasDbKills
import firebase.firestore.delete
import firebase.firestore.live
import firebase.firestore.save
import rx.rx

fun <T: RxBase<*>> rxEditing(
    deps: HasDbKills,
    editable: FsEditable<T>,
    delete: Trigger? = null,
    onPersist: Trigger = {},
    preSave: (T) -> Unit
): RxEditing<T> {
    val initial = editable.toFsDoc().live(deps)

    return RxEditing(
        deps.kills,
        initial,
        canDelete = rx(deps) { initial.id.state().exists },
        delete = delete ?: { initial.delete(deps) },
        saveCurrent = { current ->
            preSave(current)
            FsDoc(
                initial.id,
                current
            ).save(deps)
        },
        onPersist = onPersist
    )
}

