package killable

import killable.Killable.Companion.empty
import killable.Killable.Companion.once

typealias Trigger = () -> Unit
typealias KillSet = (Trigger) -> Trigger

infix fun Trigger.with(trigger: Trigger): Trigger = {
    this()
    trigger()
}

operator fun KillSet.plusAssign(trigger: Trigger) { this(trigger) }
fun KillSet.add(killable: Killable): Trigger = this(killable::kill)
fun KillSet.add(killable: Trigger): Trigger = this(killable)

fun KillSet.killables() = Killables().also { it += add(it) }
fun KillSet.seq() = KillableSeq().also { it += add(it) }

fun Trigger.addedTo(ks: KillSet) = apply { ks += this }

class Killables : Killable {

    val killSet: KillSet = { k ->
        add(k).toTrigger()
    }

    @Suppress("NOTHING_TO_INLINE")
    inline fun toKillSet() = killSet

    protected var list = listOf<Killable>()

    operator fun plusAssign(listener: () -> Unit) {
        add(listener)
    }

    fun add(fn: () -> Unit) = add(once(fn))
    fun add(listener: Killable) : Killable {
        if (listener == empty) {
            return empty
        }

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


    fun killables() = toKillSet().killables()
    fun seq() = KillableSeq().also { it.onKill += add(it) }

}