package killable

import commonshr.AddRemove
import commonshr.Trigger
import commonshr.plusAssign
import killable.Killable.Companion.empty
import killable.Killable.Companion.once
import kotlinx.coroutines.Job
import org.w3c.dom.Element
import rx.Rx
import rx.RxIface
import rx.rxClass

typealias KillSet = AddRemove<Trigger>

val Noop: Trigger = {}
val NoKill : KillSet = { Noop }

fun Job.addedTo(ks: KillSet): Job {
    val remove = ks.add { cancel() }
    invokeOnCompletion {
        remove()
    }
    return this
}

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

interface HasKillSet {
    val kills: KillSet

    fun <T> rx(fn: () -> T) = Rx(kills, fn)
    fun <T> RxIface<T>.forEach(fn: (T) -> Unit) = forEach(kills, fn)
    fun Element.rxClass(fn: () -> String) = rxClass(kills, fn)

}