package commonfb

import bootstrap.column
import bootstrap.flexCenter
import bootstrap.flexGrow1
import fontawesome.spinner
import killable.KillableSeq
import killable.setTo
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import kotlin.browser.document

class RootPanel(
    private val container: Node
) {
    private val currentRoot = KillableSeq()

    private fun Node.setAsRoot() {
        setRoot(this)
    }

    fun setRoot(node: Node) {
        node.setTo(currentRoot)
        container.appendChild(node)
    }

    fun newRoot(fn: HTMLDivElement.() -> Unit = {}): HTMLDivElement {
        return document.column {
            setAsRoot()
            flexGrow1()
            fn()
        }
    }

    fun setHourglass() {
        newRoot {
            flexCenter()
            spinner()
        }
    }

}

fun Node.setToRoot(panel: RootPanel) {
    panel.setRoot(this)
}

