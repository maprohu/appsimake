package index.home.notloggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import firebase.User
import index.home.appListUi

fun NotLoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        left.dropdown {
            bars
            menu {
                signIn {
                    home.signIn()
                }
            }
        }
        topbarUi()
    }.node,
    content = appListUi()
)

