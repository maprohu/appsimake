package commonlib.commonlib

import common.*
import commonlib.addedTo
import commonlib.post
import commonlib.toChannel
import commonshr.SetMove
import killable.Killable
import killable.Killables
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.toChannel
import kotlinx.coroutines.launch

class RandomChooser<I, O>(
    emitters: List<SetSource<I>>,
    val recentSize: Int = 1,
    val cacheSize: Int = 1,
    val fn: suspend (I, Killables) -> Optional<O>
): AsyncEmitter<O> {

    val ks = Killables()

    override fun kill() {
        ks.kill()
    }

    open inner class Event
    inner class Input(
        val source: Source,
        val move: SetMove<I>
    ): Event()
    val FillCache = Event()

    val waiting = mutableListOf<CompletableDeferred<O>>()

    inner class Cache(
        val input: I,
        val output: O,
        val onEvict: Killable,
        val onServe: Killable
    )

    val eventChannel = Channel<Event>()
    val cached = mutableListOf<Cache>()
    val recent = mutableListOf<I>()


    fun fillCache() {
        eventChannel.post(FillCache)
    }

    inner class Source(
        s: SetSource<I>
    ) {
        val alreadyChosen = mutableSetOf<I>()
        val items = mutableSetOf<I>()
        init {
            val e = Emitter<SetMove<I>>()
            val sourceChannel = e.toChannel(ks.killSet)
            s.listen(ks.killSet, e::emit).also { items += it }
            GlobalScope.launch {
                sourceChannel.map { i -> Input(this@Source, i) }.toChannel(eventChannel)
            }.addedTo(ks)
        }
        suspend fun tryFillCache(): Boolean {
            return attemptFillCache() || run {
                alreadyChosen.clear()
                attemptFillCache()
            }
        }
        suspend fun attemptFillCache(): Boolean {
            loop@ while (cached.size < cacheSize) {
                val nextSet = (items - alreadyChosen - cached.map { it.input } - recent)

                if (nextSet.isEmpty()) {
                    return false
                }

                val nextInput = nextSet.random()
                alreadyChosen += nextInput

                val onEvict = Killables()
                val outputOpt = fn(nextInput, onEvict)

                when (outputOpt) {
                    is Some -> {
                        val onServe = Killables()
                        onServe += ks.add(onEvict)
                        onServe += Killable.once {
                            recent += nextInput
                            while (recent.size > recentSize) {
                                recent.removeAt(0)
                            }
                        }

                        val output = outputOpt.value

                        val c = Cache(
                            nextInput,
                            output,
                            onEvict = onEvict,
                            onServe = onServe
                        )

                        cached += c
                    }
                    else -> {
                        continue@loop
                    }
                }

            }
            return true
        }
    }

    val sources = emitters.map(::Source)

    init {
        GlobalScope.launch {
            suspend fun tryFillCache() = sources.any { it.tryFillCache() }

            fun doServe() {
                while (waiting.isNotEmpty() && cached.isNotEmpty()) {
                    val c = cached.removeAt(0)
                    val w = waiting.removeAt(0)
                    c.onServe.kill()
                    w.complete(c.output)
                }
            }
            suspend fun doFillCache() {
                val all = sources.fold(emptySet<I>()) { acc, s -> acc + s.items }
                val iter = cached.iterator()
                while (iter.hasNext()) {
                    val next = iter.next()
                    if (next.input !in all) {
                        iter.remove()
                        next.onEvict.kill()
                    }
                }
                tryFillCache()
                doServe()
                tryFillCache()
            }

            doFillCache()

            for (e in eventChannel) {
                when (e) {
                    FillCache -> doFillCache()
                    is Input -> {
                        e.move.applyTo(e.source.items)
                        doFillCache()
                    }
                }
            }
        }.addedTo(ks)
    }

    override fun poll(): O? {
        return if (cached.isNotEmpty()) {
            val c = cached.removeAt(0)
            fillCache()
            c.onServe.kill()
            c.output
        } else {
            null
        }
    }

    override suspend fun receive(): O {
        val polled = poll()
        return if (polled != null) {
            polled
        } else {
            val cd = CompletableDeferred<O>()
            waiting += cd
            cd.await()
        }
    }

}