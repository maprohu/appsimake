package tasks.listtags

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

fun ListTags.ui() = TopAndContent(
    topbar = factory.topbar {
        backButton
        title %= "Tags"
        right.button {
            m1p2
            primary
            fa.plus
            click {
                newTag()
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
                    loggedIn.tags.list.events().mapLive { tag ->
                        factory.listGroupButton {
                            text %= { tag().name() }
                            click {
                                tag.edit()
                            }
                        }.node
                    }
                )
            }
        }
    }.node
)