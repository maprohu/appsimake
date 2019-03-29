package index.home.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import firebase.User
import index.home.appListUi

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        left.dropdown {
            bars
            menu {
                signOut {
                    signOut()
                }
            }
        }
        title %= "Apps I Make"
        right.userIcon {
            cls.m1
        }
    }.node,
    content = appListUi()
)

