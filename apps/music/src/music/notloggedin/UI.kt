package music.notloggedin

import bootstrap.m1
import commonui.usericon.userIcon
import commonshr.invoke
import commonshr.plusAssign
import commonui.widget.Factory
import domx.invoke
import domx.remAssign
import fontawesome.bars
import fontawesome.signInAlt
import killable.KillSet
import music.content.ContentView

fun NotLoggedIn.ui() = ContentView(
    topbar = Factory().topbar {
        left.dropdown {
            button {
                m1p2
                secondary
                fa.bars
            }
            menu {
                item {
                    fa.signInAlt
                    text %= "Sign In"
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
