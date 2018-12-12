package killable

import common.removeFromParent
import org.w3c.dom.Node

class KillableSeq(initial: () -> Unit = {}) : Killable {

    private var current = initial
    private var killed = false

    override fun kill() {
        if (!killed) {
            killed = false
            current()
            current = {}
        }
    }

    fun set(fn: () -> Unit) {
        if (killed) {
            fn()
        } else {
            current()
            current = fn
        }
    }
}

fun Node.setTo(killableSeq: KillableSeq) {
    killableSeq.set { removeFromParent() }
}