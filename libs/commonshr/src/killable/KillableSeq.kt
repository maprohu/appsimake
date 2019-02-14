package killable

import commonshr.Assign
import commonshr.Trigger


class KillableSeq private constructor(
    private var current: Trigger = Noop,
    internal val onKill: Killables
) {

    constructor(initial: Trigger = Noop): this(initial, Killables())

    private var killed = false

    val kill = {
        if (!killed) {
            killed = true
            current()
            current = Noop
            onKill.kill()
        }
    }

    fun set(k: Trigger) {
        if (killed) {
            k()
        } else {
            current()
            current = k
        }
    }

    val assign: Assign<Trigger> = { t -> set(t) }

    operator fun remAssign(fn: Trigger) = set(fn)
    operator fun plusAssign(fn: () -> Unit) = set(fn)
    fun clear() = set(Noop)

    fun killables() = Killables().also { set(it.kill) }
    fun seq() = KillableSeq().also { set(it.kill) }
    fun killSet() = killables().killSet

}

