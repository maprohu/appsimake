package commonfb.editing

import commonshr.*
import commonshr.properties.RxBase
import commonui.editing.CreatingTriggers
import commonui.editing.EditingTriggers
import commonui.editing.RxCreating
import commonui.editing.RxEditing
import firebase.HasDbKills
import firebase.firestore.delete
import firebase.firestore.live
import firebase.firestore.save

fun <T: RxBase<*>> rxEditing(
    deps: HasDbKills,
    editable: FsEditable<T>,
    triggers: Copier<EditingTriggers<T>> = identity()
): RxEditing<T> {
    val initial = editable.toFsDoc().live(deps)

    return RxEditing(
        deps.kills,
        initial,
        triggers = triggers(
            EditingTriggers(
                delete = { initial.delete(deps) },
                save = { current ->
                    FsDoc(
                        initial.id,
                        current
                    ).save(deps)
                }
            )
        )
    )
}

fun <T: RxBase<*>> rxCreating(
    deps: HasDbKills,
    initial: FsEditable<T>,
    triggers: Copier<CreatingTriggers<T>> = identity()
): RxCreating<T> {
    return RxCreating(
        deps.kills,
        initial,
        triggers = triggers(
            CreatingTriggers(
                persist = { current ->
                    FsDoc(
                        initial.id.toFsId(false),
                        current
                    ).save(deps)
                }
            )
        )
    )
}

