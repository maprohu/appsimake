package tasks.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import tasks.loggedin.LoggedIn
import taskslib.Task
import kotlin.browser.document

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Tasks"
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
        right.buttonGroup {
            cls.m1
            button {
                p2
                fa.plus
                primary
            }
            button {
                p2
                fa.search
                primary
            }
            dropdownSplit
            menu {
                right
                item {
                    fa.tags
                    text %= "Tags"
                }
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1
            insert.listGroup {
                cls.m1
                node.list(
                    tasks
                        .listEvents { Task.ts.desc }
                        .map { cl ->
                            factory.listGroupButton {
                                middle %= { cl.rxv().title() }
                            }.node
                        }
                )

            }
        }
    }.node
)