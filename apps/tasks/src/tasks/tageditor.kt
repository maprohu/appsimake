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
    panel: RootPanel,
    tag: Tag,
    close: () -> Unit
) : Killable {
    return EditScreenConfig<Tag>(
        "Tag"
    ) { item, killables ->
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
                        killables += textProp(item.name)
                    }
                }
            }
        }

    }.build(
        panel,
        tag,
        close,
        userTags,
        db
    )

}
