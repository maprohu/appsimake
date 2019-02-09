package music.boot

import bootstrap.column
import bootstrap.flexColumn
import bootstrap.flexGrow1
import commonshr.invoke
import commonui.NodeWrap
import commonui.Slot
import commonui.ui
import commonui.widget
import domx.cls
import domx.invoke
import kotlin.browser.document

fun UI(
    panel: Slot,
    bind: Bind
) = ui(panel, bind) {

    with(bind) {
        div {
            cls {
                column()
                flexGrow1
            }
            widget(mainWidget)
            widget(playerWidget)
        }.wrapped
    }

}

