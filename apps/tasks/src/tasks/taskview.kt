package tasks

import bootstrap.*
import common.orEmpty
import common.removeFromParent
import commonfb.ListUIConfig
import commonfb.listUI
import commonui.RootPanel
import commonui.screenLayout
import domx.cls
import domx.*
import firebase.firestore.query
import fontawesome.faPen
import fontawesome.fas
import killable.KillableSeq
import killable.Killables
import styles.scrollVertical
import taskslib.Note
import taskslib.Task
import taskslib.notes

fun LoggedIn.viewTask(
    panel: RootPanel,
    task: Task,
    close: () -> Unit
) : () -> Unit {
    val killables = Killables()

    val taskWrap = userTasks.doc(task.props.idOrFail)
    val notesWrap = taskWrap.notes

    panel.newRoot {
        fun displayViewer() {
            panel.setRoot(this)
        }
        screenLayout {
            top {
                backButton(close)
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
                            val k = Killables().apply {
                                add { displayViewer() }
                            }
                            k += editTask(panel.sub(), task) {
                                k.kill()
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
                        dd { killables += rxTextOrEmpty { task.title.initial() } }
                        dt { innerText = "Text" }
                        dd { killables += rxTextOrEmpty { task.text.initial() } }
                        dt { innerText = "Status" }
                        dd { killables += rxTextOrEmpty { task.status.initial().map { it.name } } }
//                        dt { innerText = "Tags" }
//                        dd {
//                            val ks = KillableSeq().also { killables += it }
//                            killables += task.data.forEach {  t ->
//                                div {
//                                    cls {
//                                        dFlex
//                                    }
//                                    t.tags.forEach { tag ->
//                                        div {
//                                            cls {
//                                                border
//                                                rounded
//                                            }
//                                            innerText = tag
//                                            button {
//                                                cls {
//                                                    m1
//                                                    this.close
//                                                }
//                                            }
//                                        }
//                                    }
//                                }.also { tagsDiv -> ks.set { tagsDiv.removeFromParent() } }
//                            }
//                        }
                    }

                }
            }

        }
    }

    return { killables.kill() }

}