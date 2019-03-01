package commonui

import common.insertAt
import common.removeAt
import commonshr.ListEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import org.w3c.dom.Node
import org.w3c.dom.get

interface NodeListApi: CoroutineScope {

    fun Node.list(
        nodes: ReceiveChannel<ListEvent<Node>>
    ) = nodeList(this, nodes)

}

fun CoroutineScope.nodeList(
    target: Node,
    nodes: ReceiveChannel<ListEvent<Node>>
) {
    require(!target.hasChildNodes()) { "List container node must be empty!" }

    launch {
        for (e in nodes) {
            when (e) {
                is ListEvent.Add -> {
                    target.insertAt(e.index, e.item)
                }
                is ListEvent.Move -> {
                    target.insertAt(e.to, target.removeAt(e.from))
                }
                is ListEvent.Remove -> {
                    target.removeAt(e.index)
                }
            }

        }

    }
}