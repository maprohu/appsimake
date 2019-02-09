package music.loggedin

import commonshr.invoke
import commonui.*
import fontawesome.bars
import fontawesome.signOutAlt
import killable.KillSet

fun UI(
    kills: KillSet,
    parent: Slot,
    bind: Bind
) = ui(parent, bind) {
    with(bind) {
        screen {
            topbar {
                left.dropdown {
                    button {
                        m1p2
                        secondary
                        fa.bars
                    }
                    menu {
                        item(SignOut) {
                            fa.signOutAlt
                            text %= "Sign Out"
                        }
                    }
                }
            }
        }
    }
}
