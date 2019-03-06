package tasks.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import styles.leftRightTopBottom0
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
        right.button {
            m1p2
            fa.eye
            cls.btnInfo
            insert.badge {
                cls.m1
                warning
                pill
                node %= { hiddenList.sizeRx().toString() }
            }
            visible { !hiddenList.isEmptyRx() }
            click {
                unhideAll()
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
            dropdownSplit {
                primary
            }
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
                    tasksCollection
                        .listEvents {
                            Task.ts.desc
                            Task.completed eq false
                        }
                        .filter { t -> !hiddenIds.containsRx(t.idOrFail)() }
                        .mapLive { cl ->
                            factory.nestedListButton {
                                text %= { cl.rxv().title() }
                                anchor.click {
                                    cl.view()
                                }
                                right.button {
                                    p2
                                    secondary
                                    fa.eyeSlash
                                    click {
                                        cl.hide()
                                    }
                                }
                            }.node
                        }
                )

            }
        }
    }.node
)