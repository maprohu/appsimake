package commonlib

import common.EmitterIface
import killable.Killable
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.SendChannel
import kotlinx.coroutines.launch

interface LoopT<in T> {
    suspend fun process(e: T)
}

val Ignore = object : LoopT<Any?> {
    override suspend fun process(e: Any?) {}
}

abstract class Actor<Event>(
    killables: Killables
) {

    var root: LoopT<Event> = Ignore

    val channel = Channel<Event>()

    fun post(e: Event) {
        GlobalScope.launch {
            channel.send(e)
        }
    }

    init {
        GlobalScope.launch {
            for (e in channel) {
                root.process(e)
            }
        }.let { j ->
            killables += { j.cancel() }
        }
    }
}

fun <T> SendChannel<T>.post(item: T) {
    GlobalScope.launch {
        send(item)
    }
}

fun <T> EmitterIface<T>.toChannel(ks: Killables): ReceiveChannel<T> {
    val out = Channel<T>()

    val list = mutableListOf<T>()
    val inp = Channel<Unit>()

    GlobalScope.launch {
        for (e in inp) {
            for (t in list.toList()) {
                out.send(t)
            }
        }
    }.also { j ->
        ks += Killable.once { j.cancel() }
    }

    ks += add { t ->
        list += t
        inp.post(Unit)
    }

    return out
}

fun Job.addedTo(ks: Killables): Job {
    val remove = ks.add { cancel() }
    invokeOnCompletion {
        remove.kill()
    }
    return this
}
