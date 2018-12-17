package commonui

import bootstrap.column
import bootstrap.flexCenter
import bootstrap.flexGrow1
import common.removeFromParent
import fontawesome.spinner
import killable.KillableSeq
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import rx.Rx
import rx.RxVal
import kotlin.browser.document

class RootPanel(
    private val container: Node
) {
    private val currentRoot = KillableSeq()

    fun setRoot(node: Node) {
        currentRoot.set { node.removeFromParent() }
        container.appendChild(node)
    }

    fun newRoot(fn: HTMLDivElement.() -> Unit = {}): HTMLDivElement {
        return document.column {
            setRoot(this)
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

fun <T> Node.rxPanel(rxv: RxVal<T>, fn: (T) -> Node): () -> Unit {
    val map = mutableMapOf<T, Node>()
    val node = Rx { rxv().let { v -> map.getOrPut(v) { fn(v) } } }
    val root = RootPanel(this)
    node.forEach { root.setRoot(it) }
    return { node.kill() }
}


