package music.template

import commonui.NodeWrap
import domx.div
import domx.invoke
import killable.KillSet
import kotlin.browser.document

class UI(
    kills: KillSet,
    bind: Bind
): NodeWrap(
    with(bind) {
        document.div {

        }
    }
)