package store.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Store"
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
    }.node,
    content = factory.scrollPane {
        pane {
            cls {
                p1
                column()
            }

            input {
                type = "file"
                accept = "image/*"
            }

        }
    }.node
)