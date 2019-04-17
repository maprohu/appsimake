package admin.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import kotlin.browser.document

fun LoggedInNoAdmin.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Admin"
        left.dropdown {
            bars
            menu {
                signOut {
                    loggedIn.signOut()
                }
                reload
            }
        }
    }.node,
    content = document.div {
        cls {
            flexCenter()
        }
        div {
            cls {
                textMuted
            }
            this %= "You need admin privileges to run this app."
        }
    }
)

fun LoggedInAdmin.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Admin"
        left.dropdown {
            bars
            menu {
                signOut {
                    loggedIn.signOut()
                }
                reload
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p1
                column()
            }

            insert.listGroup {
                cls.m1
                item.listGroupButton {
                    text %= "Index"
                    click {
                        loggedIn.index()
                    }
                }
            }

        }
    }.node
)