package music.loggedin

import commonshr.*
import commonui.widget.*
import fontawesome.bars
import fontawesome.signOutAlt
import killable.KillSet

fun UI(
    kills: KillSet,
    top: Factory,
    main: Factory,
    bind: Bind
) = with(bind) {
    ui {
        it += with(top) {
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
        it += main.empty
    }
}

