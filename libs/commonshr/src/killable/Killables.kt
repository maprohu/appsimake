package killable

import commonshr.AddRemove
import commonshr.Trigger
import commonshr.once
import commonshr.plusAssign
import kotlinx.coroutines.Job
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
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

fun KillSet.add(killable: Trigger): Trigger = this(killable)
fun KillSet.killables() = Killables().also { it += add(it.kill) }
fun KillSet.seq() = KillableSeq().also { it.onKill += add(it.kill) }

fun Trigger.addedTo(ks: KillSet) = apply { ks += this }

class Killables {

    val killSet: KillSet = ::add

    @Suppress("NOTHING_TO_INLINE")
    inline fun toKillSet() = killSet

    protected var list = listOf<Trigger>()

    operator fun plusAssign(listener: Trigger) { add(listener) }

    fun add(listener: Trigger): Trigger {
        if (listener == Noop) {
            return Noop
        }

        return if (!killed) {
            list += listener

            { list -= listener }.once()
        } else {
            listener()

            Noop
        }
    }

    private var killed = false

    val kill: Trigger = {
        if (!killed) {
            killed = true
            val l = list
            list = listOf()
            l.forEach { it() }
        }
    }


    fun killables() = toKillSet().killables()
    fun seq() = KillableSeq().also { it.onKill += add(it.kill) }

}

interface HasKillSet {
    val kills: KillSet

    fun <T> rx(fn: HasKillSet.() -> T) = Rx(kills, fn)
    fun <T> RxIface<T>.forEach(fn: HasKillSet.(T) -> Unit) = forEach(kills, fn)
    fun <T, S> RxIface<T>.map(fn: HasKillSet.(T) -> S) = map(kills, fn)
    fun Element.rxClass(fn: HasKillSet.() -> String) = rxClass(kills, fn)

    operator fun HTMLElement.remAssign(fn: () -> String) {
        rx { fn() }.forEach { this@remAssign.innerText = it }
    }

}

class WrapKillSet(
    override val kills: KillSet
): HasKillSet
val KillSet.wrap get() = WrapKillSet(this)
