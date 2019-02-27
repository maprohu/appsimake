package checklist.home

import bootstrap.border
import bootstrap.m1
import bootstrap.p1
import bootstrap.p2
import checklist.Checklist
import checklist.loggedin.LoggedIn
import commonshr.invoke
import commonui.widget.TopAndContent
import commonui.widget.factory
import commonui.widget.insert
import domx.div
import domx.invoke
import domx.remAssign
import firebase.firestore.query
import fontawesome.plus
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
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls.p2

            list(
                checklists
                    .query(db) { Checklist.ts.desc() }
                    .wrap { Checklist() }
                    .map { cl ->
                        document.div {
                            cls {
                                p1
                                m1
                                border
                            }
                        }
                    }

            )

        }
    }.node
)