package killable

import common.Listeners

class Killables : Listeners(), Killable {
    private var killed = false

    override fun kill() {
        fire()
    }

    override fun fire() {
        if (!killed) {
            killed = true
            super.fire()
            listeners = listOf()
        }
    }

    override fun add(listener: () -> Unit): () -> Unit {
        if (killed) {
            listener()
            return {}
        } else {
            return super.add(listener)
        }
    }

    operator fun plusAssign(killable: Killable) {
        add(killable)
    }


    fun killables() = Killables().also { add(it) }
    fun seq() = KillableSeq().also { add(it) }

}