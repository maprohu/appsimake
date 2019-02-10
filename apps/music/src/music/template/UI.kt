package music.template

import bootstrap.m1
import commonshr.invoke
import commonui.widget.Slot
import commonui.widget.ui
import domx.div
import domx.h5
import domx.invoke
import fontawesome.chevronLeft
import killable.KillSet
import kotlin.browser.document

fun UI(
    kills: KillSet,
    panel: Slot,
    bind: Bind
) = ui(panel, bind) {
    with(bind) {
        screen {
            topbar {
                backTitle(Back, "Screen Title")
            }
        }
    }
}
