package tasks

import bootstrap.*
import common.ListenableMutableList
import common.orEmpty
import commonfb.*
import commonfb.ViewScreenConfig.Companion.editButton
import commonfb.ViewScreenConfig.Companion.leftMiddle
import commonui.RootPanel
import commonui.faButton
import domx.cls
import domx.*
import firebase.firestore.query
import fontawesome.Fa
import fontawesome.comment
import fontawesome.comments
import killable.Killables
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLSpanElement
import org.w3c.dom.Node
import rx.Var
import rx.diffs
import styles.fontSize100
import taskslib.Note
import taskslib.Task
import taskslib.notes

fun LoggedIn.viewTask(
    ks: Killables,
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) {
    val notesWrap = userTasks.doc(task.props.idOrFail).notes

    ViewScreenConfig(
        "Task",
        ::editTask,
        top = { cfg ->
            with(cfg) {
                leftMiddle(title, close)
                right {
                    div {
                        cls {
                            btnGroup
                            m1
                        }
                        faButton(Fa.comment) {
                            cls.btnPrimary
                            clickEvent {
                                editNote(
                                    state.killables,
                                    state.panel.sub(),
                                    notesWrap,
                                    Note(),
                                    state.redisplay
                                )

                            }

                        }
                        editButton(killables, edit)
                    }
                }
            }

        }

    ) { st, item ->
        with(st) {
            cls {
                bgLight
            }
            scrollPanel {
                cls {
                    dFlex
                    flexColumn
                    bgWhite
                    borderBottom
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
                            tagBadge(ks, id, tagSource)
                        }
                    }

                }

                viewFieldLabel("Notes")
                div {
                    val notesRoot = RootPanel(this)
                    showClosableList<Note>(
                        killables,
                        redisplay,
                        { ks, item, close ->
                            editNote(
                                ks,
                                st.panel.sub(),
                                notesWrap,
                                item,
                                close
                            )
                        }
                    ) { show ->
                        ListUIConfig(
                            notesRoot,
                            Var(
                                notesWrap.query(db) {
                                    Note.ts.desc()
                                }
                            ),
                            { Note() },
                            itemFactory = stringListClick(
                                { it.text.initial().orEmpty() },
                                show
                            )
                        )

                    }
                }

            }
        }
    }.build(
        ks,
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

