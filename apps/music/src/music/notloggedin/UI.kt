package music.notloggedin

import bootstrap.btnSecondary
import bootstrap.column
import bootstrap.flexGrow1
import bootstrap.m1
import commonui.NodeWrap
import commonui.faButton
import commonui.plusAssign
import commonui.topbar
import domx.clickEvent
import domx.cls
import domx.div
import domx.invoke
import fontawesome.Fa
import fontawesome.signInAlt
import fontawesome.signOutAlt
import killable.KillSet
import kotlin.browser.document

class UI(
    kills: KillSet,
    bind: Bind
): NodeWrap(
    with(bind) {
        document.column {
            cls {
                flexGrow1
            }
            topbar {
                faButton(Fa.signInAlt) {
                    cls {
                        btnSecondary
                        m1
                    }
                    clickEvent {
                        inbox += SignIn
                    }
                }
            }
        }
    }
)