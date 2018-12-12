package killable

import common.Listeners

class Killables : Listeners(), Killable {
    private var killed = false

    override fun kill() {
        fire()
    }

    override fun fire() {
        super.fire()
        listeners = listOf()
        killed = true
    }

    override fun add(listener: () -> Unit): () -> Unit {
        if (killed) {
            listener()
            return {}
        } else {
            return super.add(listener)
        }
    }

    operator fun plusAssign(listener: () -> Unit) {
        add(listener)
    }

}