package commonui

import bootstrap.*
import common.removeFromParent
import domx.cls
import domx.div
import domx.invoke
import fontawesome.spinner
import killable.Killable
import killable.KillableSeq
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import rx.Rx
import rx.RxVal
import kotlin.browser.document

class RootPanel(
    internal val container: Node,
    private val currentRoot : KillableSeq = KillableSeq()
) : Killable {

    private var subs = listOf<Killable>()

    private fun killSubs() {
        val s = subs
        subs = listOf()
        s.forEach { it.kill() }
    }


    private var killed = false

    override fun kill() {
        if (!killed) {
            killed = true
            killSubs()
        }
    }

    fun setRoot(node: Node) {
        if (!killed) {
            killSubs()
            currentRoot.set { node.removeFromParent() }
            container.appendChild(node)
        }
    }

    fun newRoot(fn: HTMLDivElement.() -> Unit = {}): HTMLDivElement {
        return document.column {
            setRoot(this)
            cls.flexGrow1
            fn()
        }
    }

    fun setHourglass(): HTMLDivElement {
        return newRoot {
            cls {
                dFlex
                flexColumn
                alignItemsCenter
                justifyContentCenter
            }
            div {
                cls.spinnerBorder
            }
        }
    }

    fun sub(): RootPanel {
        val s = RootPanel(container, currentRoot)
        if (killed) {
            s.kill()
        } else {
            subs += s
        }
        return s
    }

}


fun <T> Node.rxPanel(rxv: RxVal<T>, fn: (T) -> Node): () -> Unit {
    val map = mutableMapOf<T, Node>()
    val node = Rx { rxv().let { v -> map.getOrPut(v) { fn(v) } } }
    val root = RootPanel(this)
    node.forEach { root.setRoot(it) }
    return { node.kill() }
}


