package music.boot

import bootstrap.column
import bootstrap.flexGrow1
import commonshr.invoke
import commonui.NodeWrap
import commonui.widget
import domx.cls
import kotlin.browser.document

class UI(
    bind: Bind
): NodeWrap(

    with(bind) {
        document.column {
            cls {
                flexGrow1
            }
            widget(mainWidget)
            widget(playerWidget)
        }
    }

)

