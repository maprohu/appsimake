package music.notloggedin

import bootstrap.m1
import commonui.user.userIcon
import commonshr.invoke
import commonui.widget.TopAndContent
import commonui.widget.factory
import domx.invoke
import domx.remAssign
import fontawesome.bars
import fontawesome.signInAlt

fun NotLoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
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
                    click {
                        signIn()
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
