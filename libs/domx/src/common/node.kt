package common

import commonshr.HasKills
import killable.HasNoKill
import org.w3c.dom.Node
import rx.forEach
import rx.rx

fun Node.insertAt(position: Int, element: Node) {
    val length = this.childNodes.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.childNodes.item(position))
    }
}

fun Node.insertAfter(what: Node, afterWhat: Node?) {
    insertBefore(
        what,
        if (afterWhat == null) firstChild
        else afterWhat.nextSibling
    )
}

fun Node.removeAt(position: Int): Node {
    return removeChild(childNodes.item(position)!!)
}

fun Node.removeFromParent() {
    parentElement?.removeChild(this)
}

fun Node.replaceWith(node: Node) {
    parentNode!!.apply {
        insertBefore(node, this@replaceWith)
        removeChild(this@replaceWith)
    }
}

fun Node.attached(deps: HasKills, fn: () -> Boolean) {
    requireNotNull(parentNode) { "Dynamically attached element must have a parent to start with." }
    val p = parentNode!!

    rx(deps) { fn() }.forEach(HasNoKill) { v ->
        if (v) {
            p.appendChild(this@attached)
        } else {
            removeFromParent()
        }
    }
}
