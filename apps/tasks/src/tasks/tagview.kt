package tasks

import bootstrap.*
import common.orEmpty
import common.removeFromParent
import commonfb.ListUIConfig
import commonfb.ViewScreenConfig
import commonfb.build
import commonfb.listUI
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.cls
import domx.*
import firebase.firestore.query
import fontawesome.Fa
import fontawesome.pen
import killable.Killable
import killable.KillableSeq
import killable.Killables
import styles.scrollVertical
import taskslib.Note
import taskslib.Tag
import taskslib.Task
import taskslib.notes

fun LoggedIn.viewTag(
    panel: RootPanel,
    item: Tag,
    close: () -> Unit
) : Killable {
    return ViewScreenConfig(
        "Tag",
        ::editTag
    ) {
        val killables = Killables()

        classes += scrollVertical
        cls {
            flexColumn
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
                dd { killables += rxTextOrEmpty { item.name.initial() } }
            }
        }

        killables
    }.build(panel, item, close)

}