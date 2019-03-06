package checklist.loggedin

import bootstrap.*
import checklist.Checklist
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import kotlin.browser.document

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Checklists"
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
            fa.plus
            primary
            click {
                new()
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p1
            insert.listGroup {
                cls.m1
                node.list(
                    checklists
                        .listEvents { Checklist.ts.desc }
                        .map { cl ->
                            factory.listGroupButton {
                                middle %= { cl().name() }
                                click {
                                    viewChecklist(cl)
                                }
                            }.node
                        }
                )

            }
        }
    }.node
)