package commonui

import bootstrap.centerDiv
import bootstrap.flexGrow1
import bootstrap.flexRow
import bootstrap.listButton
import domx.div
import fontawesome.chevronRight
import fontawesome.spinner
import org.w3c.dom.*

fun Node.nextButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return nextButton( { innerText = label }, fn )
}

fun Node.nextButton(label: HTMLDivElement.() -> Unit, fn: () -> Unit): HTMLAnchorElement {
    return listButton(fn) {
        flexRow()
        div {
            flexGrow1()
            label()
        }
        chevronRight()
    }
}

fun Element.hourglass(): HTMLDivElement {
    return centerDiv {
        spinner()
    }
}

