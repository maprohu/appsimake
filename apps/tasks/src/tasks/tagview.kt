package tasks

import bootstrap.*
import commonfb.ViewScreenConfig
import commonfb.build
import commonui.RootPanel
import domx.cls
import domx.*
import killable.Killables
import styles.scrollVertical
import taskslib.Tag

fun LoggedIn.viewTag(
    killables: Killables,
    panel: RootPanel,
    tag: Tag,
    close: () -> Unit
) {
    ViewScreenConfig(
        "Tag",
        ::editTag
    ) { state, item ->

        cls {
            flexColumn
            scrollVertical
        }
        div {
            cls {
                p1
            }
            dl {
                cls {
                    m1
                }
                dt { innerText = "Name" }
                dd { state.killables += rxTextOrEmpty { item.name.initial() } }
            }
        }

    }.build(killables, panel, tag, close)

}