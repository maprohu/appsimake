package commonfb.editing

import commonshr.*
import commonshr.properties.RxBase
import commonui.editing.EditingTriggers
import commonui.editing.RxEditing
import firebase.HasDbKills
import firebase.firestore.delete
import firebase.firestore.live
import firebase.firestore.save
import rx.rx

fun <T: RxBase<*>> rxEditing(
    deps: HasDbKills,
    editable: FsEditable<T>,
    triggers: Copier<EditingTriggers<T>> = identity()
): RxEditing<T> {
    val initial = editable.toFsDoc().live(deps)

    return RxEditing(
        deps.kills,
        initial,
        canDelete = rx(deps) { initial.id.state().exists },
        triggers = triggers(
            EditingTriggers(
                delete = { initial.delete(deps) },
                saveCurrent = { current ->
                    FsDoc(
                        initial.id,
                        current
                    ).save(deps)
                }
            )
        )
    )
}

