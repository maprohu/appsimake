package tasks

import bootstrap.*
import common.removeFromParent
import commonfb.listUI
import commonui.RootPanel
import commonui.screenLayout
import domx.cls
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.query
import fontawesome.faPen
import fontawesome.faPlus
import fontawesome.fas
import killable.KillableSeq
import killable.Killables
import styles.scrollVertical
import taskslib.Note
import taskslib.Task
import taskslib.notes

fun LoggedIn.viewTask(
    task: DocItem<Task>,
    after: () -> Unit
) {
    val killables = Killables()

    val taskWrap = userTasks.doc(task.id)
    val notesWrap = taskWrap.notes

    root.newRoot {
        fun displayViewer() {
            root.setRoot(this)
        }
        screenLayout {
            top {
                backButton(after)
                middleTitle {
                    innerText = "Task"
                }
                right {
                    btnButton {
                        cls {
                            btnPrimary
                            fas
                            faPen
                        }
                        clickEvent {
                            editTask(task) {
                                displayViewer()
                            }
                        }
                    }
                }
            }
            main {
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
                        dt { innerText = "Title" }
                        dd { killables += rxText { task.data().title } }
                        dt { innerText = "Text" }
                        dd { killables += rxText { task.data().text } }
                        dt { innerText = "Status" }
                        dd { killables += rxText { task.data().status.name } }
                        dt { innerText = "Tags" }
                        dd {

                            val ks = KillableSeq().also { killables += it }
                            killables += task.data.forEach {  t ->
                                div {
                                    cls {
                                        dFlex
                                    }
                                    t.tags.forEach { tag ->
                                        div {
                                            cls {
                                                border
                                                rounded
                                            }
                                            innerText = tag
                                            button {
                                                cls {
                                                    m1
                                                    close
                                                }
                                            }
                                        }
                                    }
                                }.also { tagsDiv -> ks.set { tagsDiv.removeFromParent() } }
                            }
                        }
                        dt { innerText = "Notes" }
                        dd {
                            div {
                                cls {
                                    border
                                }
                                val notesRoot = RootPanel(this)
                                notesWrap
                                    .query(db) {
                                        Note::ts.desc()
                                    }
                                    .listUI(
                                        root = notesRoot,
                                        extract = { Note(it.data()) },
                                        itemFactory = {
                                            li {
                                                cls {
                                                    listGroupItem
                                                }
                                                rxText { it.data().text }
                                            }

                                        }
                                    )

                            }


                        }
                    }

                }
            }

        }
    }

}