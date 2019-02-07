package music.loggedin

import bootstrap.btnSecondary
import bootstrap.column
import bootstrap.flexGrow1
import bootstrap.m1
import commonui.NodeWrap
import commonui.faButton
import commonui.topbar
import domx.cls
import domx.div
import domx.invoke
import fontawesome.Fa
import fontawesome.signOutAlt
import killable.KillSet
import music.loggedin.Bind
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
                faButton(Fa.signOutAlt) {
                    cls {
                        btnSecondary
                        m1
                    }
                }
            }
        }
    }
)