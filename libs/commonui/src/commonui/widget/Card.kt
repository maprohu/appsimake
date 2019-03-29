package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.nodeList
import domx.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.Node
import styles.scrollVertical
import kotlin.browser.document

class Card: ScreenWrap() {
    override val node = document.div {
        cls {
            card
        }
    }

    inner class Slots {
        val header = slot
        val body = slot
        val footer = slot
    }

    val slots = Slots()

    val header by lazy {
        slots.header.insert.wraps.div {
            cls {
                cardHeader
            }
        }.node
    }

    val body by lazy {
        slots.body.insert.wraps.div {
            cls {
                cardBody
            }
        }
    }

    val listGroup by lazy {
        slots.body.insert.listGroup {
            flush
        }
    }

}


