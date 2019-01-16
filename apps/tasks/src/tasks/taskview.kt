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
import killable.Killables
import org.w3c.dom.HTMLElement
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
                val notesList = ListenableMutableList<String>()
                div {
                    rxDisplayed { notesList.isEmptyRx() }
                    cls.m1
                    innerText = "<none>"
                }
                div {
                    rxDisplayed { !notesList.isEmptyRx() }
                    killables += item.tags.initial.diffs { diff ->
                        diff.removed.forEach { notesList.remove(it) }
                        diff.added.forEach { notesList.add(it) }
                    }

                    listenableList(notesList, killables) { id, ks ->
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
                            emptyDivDecor = {
                                cls.m1
                                innerText = "<none>"
                            },
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

