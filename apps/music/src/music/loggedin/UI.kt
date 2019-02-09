package music.loggedin

import bootstrap.btnSecondary
import bootstrap.column
import bootstrap.flexGrow1
import bootstrap.m1
import commonui.*
import domx.clickEvent
import domx.cls
import domx.div
import domx.invoke
import fontawesome.Fa
import fontawesome.signOutAlt
import killable.KillSet
import music.loggedin.Bind
import org.w3c.dom.Node
import kotlin.browser.document

class UI(
    kills: KillSet,
    parent: Slot,
    bind: Bind
): ScreenWrap(parent, bind) {
    override val node = with(bind) {
        document.screen {
            top {
                left 

            }
        }

        document.column {
            cls {
                flexGrow1
            }
            topbar {
                dropdown {
                    node {
                        cls.m1
                    }
                }
                faButton(Fa.signOutAlt) {
                    cls {
                        btnSecondary
                        m1
                    }
                    clickEvent {
                        inbox += SignOut
                    }
                }
            }
        }
    }
}
