package killable

import common.Listeners

interface Killable {
    fun kill()

    companion object {
        fun once(fn: () -> Unit) = OnceKillable(fn)
        fun of(fn: () -> Unit) = object : Killable {
            override fun kill() {
                fn()
            }
        }

        val empty = object : Killable {
            override fun kill() {}
        }
    }

}

fun <K: Killable> K.addedTo(killables: Killables): K {
    killables.add(this)
    return this
}

class OnceKillable(private val fn: () -> Unit) : Killable {
    private var killed = false
    override fun kill() {
        if (!killed) {
            killed = true
            fn()
        }
    }

}

operator fun Killable.invoke() = kill()


fun Listeners.add(killable: Killable): () -> Unit {
    return this.add { killable.kill() }
}

class KillableValue<T>(
    val value: T,
    val killable: Killable
): Killable by killable {
    constructor(value: T, fn: () -> Unit) : this(value, Killable.once(fn))
}