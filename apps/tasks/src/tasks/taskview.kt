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
import firebaseshr.withCollection
import fontawesome.*
import killable.Killables
import killable.addedTo
import org.w3c.dom.HTMLElement
import rx.Rx
import rx.Var
import rx.diffs
import rx.set
import styles.fontSize100
import taskslib.Note
import taskslib.Task
import taskslib.TaskStatus
import taskslib.notes

fun LoggedIn.viewTask(
    ks: Killables,
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) {
    val notesWrap = task.props.docWrapOrFail.notes

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
                                    Note().withCollection(notesWrap),
                                    state.redisplay
                                )

                            }

                        }
                        editButton(killables, edit)
                        val canComplete = Rx { !task.completed.initial().getOrDefault(false) }.addedTo(killables)
                        dropdownSplit {
                            cls.btnPrimary
                            rxDisplayed(canComplete)
                        }
                        div {
                            rxDisplayed(canComplete)
                            cls {
                                dropdownMenu
                                dropdownMenuRight
                            }
                            dropdownItemAnchor {
                                icon.cls.fa.clipboardCheck
                                text.innerText = "Mark as Completed"
                                clickEvent {
                                    task.props.rollback()
                                    task.status.current.set(TaskStatus.Completed)
                                    task.props.save()
                                    close()
                                }
                            }
                        }

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
                            notesWrap,
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

