package killable

import killable.Killable.Companion.empty
import killable.Killable.Companion.once
import kotlinx.coroutines.Job

typealias Assign<T> = (T) -> Unit

@Suppress("NOTHING_TO_INLINE")
inline operator fun <T> Assign<T>.remAssign(value: T) = this(value)

typealias Trigger = () -> Unit
typealias Add<T> = (T) -> Trigger
typealias KillSet = Add<Trigger>

fun Trigger.once(): Trigger {
    var triggered = false

    return {
        if (!triggered) {
            triggered = true
            this()
        }
    }
}

fun Job.addedTo(ks: KillSet): Job {
    val remove = ks.add { cancel() }
    invokeOnCompletion {
        remove()
    }
    return this
}

infix fun Trigger.with(trigger: Trigger): Trigger = {
    this()
    trigger()
}

operator fun <T> Add<T>.plusAssign(trigger: T) { this(trigger) }
fun KillSet.add(killable: Killable): Trigger = this(killable::kill)
operator fun KillSet.plusAssign(killable: Killable) { add(killable) }
fun KillSet.add(killable: Trigger): Trigger = this(killable)

fun KillSet.killables() = Killables().also { it += add(it) }
fun KillSet.seq() = KillableSeq().also { it.onKill += add(it) }

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