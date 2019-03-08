package tasks.listtasks

import bootstrap.*
import commonshr.*
import commonui.editing.saveDeleteButton
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.*
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document

fun ListTasks.ui() = TopAndContent(
    topbar = factory.topbar {
        backButton
        title %= "Tags"
        tabs {
            tab {
                icon.fa.filter
                clickToggle
            }
        }
        right.button {
            m1p2
            primary
            fa.plus
            click {
                newTask()
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p1
            }
            insert.listGroup {
                list(
                    loggedIn.tasksCollection.listEvents().mapLive { t ->
                        factory.listGroupButton {
                            text %= { t().title() }
                            click {
                                t.edit()
                            }
                        }.node
                    }
                )
            }
        }
    }.node
)