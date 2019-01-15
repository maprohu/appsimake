package tasks

import bootstrap.*
import common.orEmpty
import commonfb.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import firebase.firestore.query
import fontawesome.*
import killable.Killable
import killable.Killables
import rx.Var
import styles.*
import taskslib.Task
import taskslib.TaskStatus

fun LoggedIn.listTasks(panel: RootPanel, after: () -> Unit) : Killable {

    return ListScreenConfig(
        "Task List",
        { Task() },
        ::viewTask,
        ::editTask,
        userTasks.query(db) {
            Task.title.asc()
        },
        { it.title.initial().orEmpty() },
        filter = FilterConfig {
            cls {
                dGrid
                alignContentCenter
                justifyContentCenter
                alignItemsCenter
            }
            style.cssText = """
                grid-template-columns: auto auto;
            """.trimIndent()

            div {
                cls {
                    m1
                    justifySelfEnd
                }
                innerText = "Status"
            }
            select {
                cls {
                    m1
                    justifySelfStart
                    customSelect
                }

                option {
                    innerText = "All"
                }
                TaskStatus.values().forEach { s ->
                    option {
                        innerText = s.name
                    }
                }
                TaskStatus
                    .values()
                    .groupBy { it.completed }
                    .let { m ->
                        fun item(v: Boolean, label: String) {
                            option {
                                innerText = "$label (${m.getValue(v).joinToString(", ") { s -> s.name }})"
                            }
                        }
                        item(false, "Not Finished")
                        item(true, "Finished")
                    }
            }
            div {
                cls {
                    m1
                    justifySelfEnd
                }
                innerText = "Tags"
            }
            div {
                cls {
                    m1
                    justifySelfStart
                }
                button {
                    cls {
                        p1
                        btn
                        btnSecondary
                    }
                    span {
                        cls {
                            fa {
                                fw
                                tags
                            }
                        }
                    }
                }
            }
        }

    ).build(
        panel,
        after
    )

}
