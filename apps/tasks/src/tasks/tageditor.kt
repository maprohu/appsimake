package tasks

import bootstrap.*
import commonfb.EditScreenConfig
import commonfb.build
import commonfb.scrollForm
import commonfb.textProp
import commonui.RootPanel
import domx.*
import killable.Killable
import killable.Killables
import taskslib.Tag


fun LoggedIn.editTag(
    panel: RootPanel,
    tag: Tag,
    close: () -> Unit
) : Killable {
    return EditScreenConfig<Tag>(
        "Tag"
    ) { item ->
        val killables = Killables()

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
                    textProp(item.name)
                }
            }
        }

        killables
    }.build(
        panel,
        tag,
        close,
        userTags,
        db
    )

}
