package tasks.viewtask

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.fontSize100
import styles.leftRightTopBottom0
import tasks.loggedin.LoggedIn
import taskslib.Note
import taskslib.Task
import kotlin.browser.document

fun ViewTask.ui() = TopAndContent(
    topbar = factory.topbar {
        backButton
        title %= "Task"
        right.buttonGroup {
            m1
            button {
                p2
                primary
                fa.comment
                click {
                    newComment()
                }
            }
            button {
                p2
                primary
                fa.pen
                click {
                    edit()
                }
            }
            dropdownSplit.primary
            menu {
                right
                item {
                    fa.clipboardCheck
                    text %= "Mark as Completed"
                    click {
                        markAsCompleted()
                    }
                }
            }

        }

    }.node,
    content = factory.scrollPane {
        pane {
            cls.bgLight
            div {
                cls {
                    p1
                    bgWhite
                    borderBottom
                }
                dl {
                    cls.m1
                    dt %= "Title"
                    dd %= { item().title() }
                    dt %= "Text"
                    dd %= { item().text() }
                    dt %= "Status"
                    dd %= { item().status().name }
                    dt %= "Tags"
                    dd {
                        widget %= {
                            document.div {
                                item().tags().forEach { id ->
                                    insert.badge {
                                        cls {
                                            m1
                                            fontSize100
                                        }
                                        pill
                                        secondary
                                        text %= { loggedIn.tags.lookup.get(id)().name() }
                                    }
                                }
                            }
                        }
                    }
                    dt %= "Notes"
                }

                div {
                    cls.m1
                    insert.listGroup {
                        list(
                            notes
                                .listEvents { Note.ts.desc }
                                .mapLive { n ->
                                    factory.listGroupButton {
                                        text %= { n().text() }
                                        click {
                                            n.edit()
                                        }
                                    }.node
                                }
                        )
                    }
                }
            }


        }

    }.node
)