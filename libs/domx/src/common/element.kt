package common

import org.w3c.dom.Element
import org.w3c.dom.Node

fun Element.insertAt(position: Int, element: Node) {
    val length = this.children.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.children.item(position))
    }
}

fun Element.removeAt(position: Int): Node {
    return removeChild(children.item(position)!!)
}


fun Element.replaceAt(position: Int, element: Element) {
    replaceChild(children.item(position)!!, element)
}
