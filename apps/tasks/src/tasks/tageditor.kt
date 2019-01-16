package tasks

import bootstrap.*
import commonfb.*
import commonui.RootPanel
import domx.*
import killable.Killable
import killable.Killables
import styles.widthAuto
import taskslib.Tag
import kotlin.browser.document


fun LoggedIn.editTag(
    killables: Killables,
    panel: RootPanel,
    tag: Tag,
    close: () -> Unit
) {
    return EditScreenConfig<Tag>(
        "Tag"
    ) { item, eks ->
        FormConfig {
            scrollForm {
                formGroup("Tag Name") { lbl ->
                    input {
                        lbl()
                        cls {
                            formControl
                            m1
                            widthAuto
                        }
                        type = "text"
                        eks += textProp(item.name)
                    }
                }
            }
        }

    }.build(
        killables,
        panel,
        tag,
        close,
        db
    )

}
