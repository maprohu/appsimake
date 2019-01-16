package tasks

import bootstrap.*
import commonfb.*
import commonlib.CollectionWrap
import commonui.RootPanel
import domx.*
import killable.Killables
import styles.widthAuto
import taskslib.Note


fun LoggedIn.editNote(
    killables: Killables,
    panel: RootPanel,
    coll: CollectionWrap<Note>,
    note: Note,
    close: () -> Unit
) {
    return EditScreenConfig<Note>(
        "Note"
    ) { item, eks ->
        FormConfig {
            cls {
                dFlex
                flexColumn
            }
            textarea {
                cls {
                    formControl
                    m1
                    widthAuto
                    flexGrow1
                }
                eks += textProp(item.text)
            }
        }
    }.build(
        killables,
        panel,
        note,
        close,
        coll,
        db
    )

}
