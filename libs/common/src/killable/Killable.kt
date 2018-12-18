package killable

import common.Listeners

interface Killable {
    fun kill()

    fun addTo(killables: Killables) {
        killables.add(this)
    }

    companion object {
        fun of(fn: () -> Unit) = Killables().also { it += fn }
    }

}

operator fun Killable.invoke() = kill()


fun Listeners.add(killable: Killable) {
    this.add { killable.kill() }
}

class KillableValue<T>(
    val value: T,
    val killable: Killable
) {
    constructor(value: T, fn: () -> Unit) : this(value, Killable.of(fn))
}