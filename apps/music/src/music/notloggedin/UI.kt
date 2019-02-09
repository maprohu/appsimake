package music.notloggedin

import commonshr.invoke
import commonui.*
import fontawesome.bars
import fontawesome.signInAlt
import killable.KillSet

fun UI(
    kills: KillSet,
    panel: Slot,
    bind: Bind
) = ui(panel, bind) {
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
                        item(SignIn) {
                            fa.signInAlt
                            text %= "Sign In"
                        }
                    }
                }
            }
        }
    }
}
