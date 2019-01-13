package killable

import killable.Killable.Companion.empty
import killable.Killable.Companion.once

class Killables : Killable {

    protected var list = listOf<Killable>()

    operator fun plusAssign(listener: () -> Unit) {
        add(listener)
    }

    fun add(fn: () -> Unit) = add(once(fn))
    fun add(listener: Killable) : Killable {
        return if (!killed) {
            list += listener

            once {
                list -= listener
            }
        } else {
            listener.kill()

            empty
        }
    }

    private var killed = false

    override fun kill() {
        if (!killed) {
            killed = true
            val l = list
            list = listOf()
            l.forEach { it.kill() }
        }
    }

    operator fun plusAssign(killable: Killable) {
        add(killable)
    }


    fun killables() = Killables().also { it += add(it) }
    fun seq() = KillableSeq().also { it.onKill += add(it) }

}