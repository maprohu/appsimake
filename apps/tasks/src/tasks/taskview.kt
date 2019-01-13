package tasks

import bootstrap.*
import common.ListenableMutableList
import common.orEmpty
import common.removeFromParent
import commonfb.*
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
import rx.diffs
import styles.fontSize100
import styles.scrollVertical
import taskslib.Note
import taskslib.Task
import taskslib.notes

fun LoggedIn.viewTask(
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) : Killable {
    return ViewScreenConfig(
        "Task",
        ::editTask
    ) { item ->
        val killables = Killables()
        scrollPanel {
            cls {
                dFlex
                flexColumn
            }
            killables += viewTextField("Title") { item.title.initial() }
            killables += viewTextField("Text") { item.text.initial() }
            killables += viewTextField("Status") { item.status.initial().map { it.name } }

            viewFieldLabel("Tags")
            div {
                val list = ListenableMutableList<String>()
                item.tags.initial.diffs { diff ->
                    diff.removed.forEach { list.remove(it) }
                    diff.added.forEach { list.add(it) }
                }

                listenableList(list, killables) { id, ks ->
                    span {
                        cls {
                            m1
                            badge
                            badgeSecondary
                            fontSize100
                        }
                        ks += rxText {
                            tagSource.tag(id)().name.initial().getOrElse { id }
                        }
                    }
                }

            }

        }
        killables
    }.build(
        panel,
        task,
        close
    )
}