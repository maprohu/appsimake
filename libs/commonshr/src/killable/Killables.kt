package killable

import commonshr.*
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Job

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

class Killables: KillsApi, HasKillKilledKills {

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

        return if (!killedFlag) {
            list += listener

            { list -= listener }.once()
        } else {
            listener()

            Noop
        }
    }

    private var killedFlag = false
    override val killed = { killedFlag}

    override val kill: Trigger = {
        if (!killedFlag) {
            killedFlag = true
            val l = list
            list = listOf()
            l.forEach { it() }
        }
    }


    fun killables() = toKillSet().killables()
    fun seq() = KillableSeq().also { it.onKill += add(it.kill) }

}



suspend fun KillSet.join() {
    val cd = CompletableDeferred<Unit>()
    this += { cd.complete(Unit) }
    cd.await()
}

fun HasKilled.perform(action: Trigger) {
    if (!killed()) {
        action()
    }
}

class KillableValue<T>(
    val value: T,
    val kill: Trigger
)
