package htmlx

import common.removeFromParent
import kotlinx.html.ButtonType
import kotlinx.html.DIV
import kotlinx.html.OL
import kotlinx.html.TagConsumer
import kotlinx.html.js.*
import org.w3c.dom.*
import org.w3c.dom.events.Event


fun TagConsumer<HTMLElement>.insert(
    node: Node
) {
    span().apply {
        parentElement!!.appendChild(node)
        removeFromParent()
    }
}




fun TagConsumer<HTMLElement>.menuitem(
    label: String,
    click: (Event) -> Unit
): HTMLAnchorElement {
    return a(classes = "dropdown-item", href = "#") {
        +label
        onClickFunction = click
    }
}
