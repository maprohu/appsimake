package tictactoe.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import kotlin.browser.document

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Tic Tac Toe"
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
    }.node,
    content = null
)