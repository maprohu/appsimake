package commonui

import bootstrap.*
import common.removeFromParent
import commonshr.Trigger
import domx.cls
import domx.div
import domx.invoke
import killable.KillableSeq
import killable.Killables
import killable.NoKill
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import rx.Rx
import rx.RxVal
import kotlin.browser.document

class RootPanel(
    internal val container: Node,
    private val currentRoot : KillableSeq = KillableSeq()
) {

    private var subs = listOf<Trigger>()

    private fun killSubs() {
        val s = subs
        subs = listOf()
        s.forEach { it() }
    }


    private var killed = false

    val kill = {
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
        return document.hourglass.also(::setRoot)
    }

    fun sub(): RootPanel {
        val s = RootPanel(container, currentRoot)
        if (killed) {
            s.kill()
        } else {
            subs += s.kill
        }
        return s
    }

}


fun <T> Node.rxPanel(rxv: RxVal<T>, fn: (T) -> Node): () -> Unit {
    val map = mutableMapOf<T, Node>()
    val ks = Killables()
    val node = Rx(ks.killSet) { rxv().let { v -> map.getOrPut(v) { fn(v) } } }
    val root = RootPanel(this)
    node.forEach(NoKill) { root.setRoot(it) }
    return { ks.kill() }

}


