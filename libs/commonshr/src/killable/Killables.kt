package killable

import common.EmitterIface
import common.toRxSet
import commonshr.*
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Job
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import rx.*

typealias KillSet = AddRemove<Trigger>

val Noop: Trigger = {}
val NoKill : KillSet = { Noop }

object HasNoKill: KillsApi {
    override val kills = NoKill
}

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

class Killables: KillsApi {

    val killSet: KillSet = ::add
    override val kills = killSet

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


class WrapKillSet(
    override val kills: KillSet
): KillsApi, InvokeApply
val KillSet.wrap get() = WrapKillSet(this)

suspend fun KillSet.join() {
    val cd = CompletableDeferred<Unit>()
    this += { cd.complete(Unit) }
    cd.await()
}