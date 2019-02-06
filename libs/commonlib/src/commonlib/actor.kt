package commonlib

import common.*
import commonlib.commonlib.RandomChooser
import commonshr.SetAdded
import commonshr.SetMove
import killable.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.*
import rx.RxIface
import rx.RxIfaceKillable
import rx.Var

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

fun <T> EmitterIface<T>.toChannel(ks: KillSet): ReceiveChannel<T> {
    val out = Channel<T>()

    val list = mutableListOf<T>()
    val inp = Channel<Unit>()

    GlobalScope.launch {
        for (e in inp) {
            for (t in list.toList()) {
                out.send(t)
            }
        }
    }.addedTo(ks)

    ks += add { t ->
        list += t
        inp.post(Unit)
    }

    return out
}

fun Job.addedTo(ks: Killables): Job {
    return addedTo(ks.killSet)
}


fun <T> toAsync(
    vararg emitters: EmitterIface<SetMove<T>>
): AsyncEmitter<T> {
    val killables = Killables()

    val waiting = mutableListOf<CompletableDeferred<T>>()

    val currents = emitters.map { emitter ->
        val current = mutableListOf<T>()

        killables += emitter.add { m ->
            when {
                m is SetAdded && waiting.isNotEmpty()  -> {
                    waiting.removeAt(0).complete(m.value)
                }
                else -> m.applyTo(current)
            }
        }

        current
    }

    return object : AsyncEmitter<T>, Killable by killables {
        override fun poll(): T? {
            return currents.find { it.isNotEmpty() }?.removeAt(0)
        }

        override suspend fun receive(): T {
            val polled = poll()

            return if (polled != null) {
                polled
            } else {
                val cd = CompletableDeferred<T>()
                waiting += cd
                val rk = killables.add {
                    waiting -= cd
                    cd.cancel()
                }
                val res = cd.await()
                rk.kill()
                res
            }
        }
    }

}

fun <T> EmitterIface<SetMove<T>>.toAsync(): AsyncEmitter<T> = toAsync(this)


fun <T> Deferred<T>.toRx(): RxIface<Optional<T>> {
    val rxv = Var<Optional<T>>(None)
    GlobalScope.launch {
        rxv.now = Some(await())
    }
    return rxv
}



