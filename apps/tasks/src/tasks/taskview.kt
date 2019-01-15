package tasks

import bootstrap.*
import common.ListenableMutableList
import commonfb.*
import commonui.RootPanel
import domx.cls
import domx.*
import killable.Killables
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLSpanElement
import org.w3c.dom.Node
import rx.diffs
import styles.fontSize100
import taskslib.Task

fun LoggedIn.viewTask(
    killables: Killables,
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) {
    ViewScreenConfig(
        "Task",
        ::editTask
    ) { vks, item ->
        scrollPanel {
            cls {
                dFlex
                flexColumn
            }
            vks += viewTextField("Title") { item.title.initial() }
            vks += viewTextField("Text") { item.text.initial() }
            vks += viewTextField("Status") { item.status.initial().map { it.name } }

            viewFieldLabel("Tags")
            div {
                val list = ListenableMutableList<String>()
                item.tags.initial.diffs { diff ->
                    diff.removed.forEach { list.remove(it) }
                    diff.added.forEach { list.add(it) }
                }

                listenableList(list, vks) { id, ks ->
                    span {
                        tagBadge(ks, id, tagSource)
                    }
                }

            }

        }
    }.build(
        killables,
        panel,
        task,
        close
    )
}

fun HTMLElement.tagBadge(
    ks: Killables,
    tagId: String,
    tagSource: TagSource
) {
    cls {
        m1
        badge
        badgePill
        badgeSecondary
        fontSize100
    }
    ks += rxText {
        tagSource.tag(tagId)().name.initial().getOrElse { tagId }
    }
}

