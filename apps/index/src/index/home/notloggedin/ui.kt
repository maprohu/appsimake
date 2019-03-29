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
        title %= "Apps I Make"
        right.userIcon {
            cls.m1
        }
    }.node,
    content = appListUi()
)

