package music.notloggedin

import commonshr.invoke
import commonshr.plusAssign
import commonui.*
import commonui.widget.Factory
import commonui.widget.Slot
import commonui.widget.ui
import fontawesome.bars
import fontawesome.signInAlt
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
                        item(SignIn) {
                            fa.signInAlt
                            text %= "Sign In"
                        }
                    }
                }
            }
        }
        it += main.empty
    }
}
