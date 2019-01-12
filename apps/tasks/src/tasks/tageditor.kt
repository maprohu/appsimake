package tasks

import bootstrap.*
import commonfb.*
import commonui.RootPanel
import domx.*
import killable.Killable
import killable.Killables
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
                div {
                    cls.formGroup
                    label {
                        innerText = "Name"
                    }
                    input {
                        cls {
                            formControl
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
