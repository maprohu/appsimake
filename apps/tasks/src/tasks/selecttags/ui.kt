package tasks.selecttags

import bootstrap.*
import commonshr.*
import commonui.editing.saveDeleteButton
import commonui.widget.*
import domx.*
import fontawesome.*
import rx.rxClass
import styles.*
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document

fun SelectTags.ui() = TopAndContent(
    topbar = factory.topbar {
        backButton
        title %= "Filter Tags"
        left.button {
            m1p2
            secondary
            fa.times
            click {
                cancel()
            }
        }
        right.button {
            m1p2
            success
            fa.check
            click {
                submit()
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
                            val id = tag.idOrFail
                            val selected = rx { id in current() }
                            leftIcon {
                                fafw
                                rxClass(Fa.check, selected)
                            }
                            text %= { tag().name() }
                            click {
                                if (selected.now) {
                                    current.transform { it - id }
                                } else {
                                    current.transform { it + id }
                                }
                            }
                        }.node
                    }
                )
            }
        }
    }.node
)