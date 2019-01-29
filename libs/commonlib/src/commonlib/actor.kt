package commonlib

import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
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