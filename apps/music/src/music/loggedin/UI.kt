package music.loggedin

import bootstrap.m1
import commonui.usericon.userIcon
import commonshr.*
import commonui.widget.*
import domx.invoke
import domx.remAssign
import fontawesome.bars
import fontawesome.signOutAlt
import killable.KillSet
import music.content.ContentView

fun LoggedIn.ui() = ContentView(
    topbar = Factory().topbar {
        left.dropdown {
            button {
                m1p2
                secondary
                fa.bars
            }
            menu {
                item {
                    fa.signOutAlt
                    text %= "Sign Out"
                    click {
                        path.boot.signOut.now()
                    }
                }
            }
        }
        title %= "Music"
        right.userIcon(kills, path.boot.userIcon).apply {
            node {
                cls.m1
            }
        }
    }.node,
    content = null
)
