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

class ListGroup: ScreenWrap() {
    override val node = document.div {
        cls {
            listGroup
        }
    }


    val item = insert.with { cls.listGroupItem }

}

fun ListGroup.list(
    deps: CoroutineScope,
    nodes: ReceiveChannel<ListEvent<Node>>
) = node.nodeList(deps, nodes)

