package commonui

import common.insertAt
import common.removeAt
import commonshr.ListEvent
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import org.w3c.dom.Node
import org.w3c.dom.get


fun Node.nodeList(
    deps: CoroutineScope,
    nodes: ReceiveChannel<ListEvent<Node>>
) {
    require(!hasChildNodes()) { "List container node must be empty!" }

    deps.launch {
        for (e in nodes) {
            when (e) {
                is ListEvent.Add -> {
                    insertAt(e.index, e.item)
                }
                is ListEvent.Move -> {
                    insertAt(e.to, removeAt(e.from))
                }
                is ListEvent.Remove -> {
                    removeAt(e.index)
                }
            }

        }

    }
}