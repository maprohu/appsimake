package common

import commonshr.*
import killable.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import rx.Rx
import rx.RxIface
import rx.RxVal
import rx.Var

interface ListenableApi: HasKillSet {
    fun <T> ListenableList<T>.events() = events(kills)
}
interface ListenableList<out T> : List<T> {

    fun addListener(listener: Listener<T>) = addListener(listener, true)
    fun addListener(listener: Listener<T>, all: Boolean) : Trigger

    data class Listener<in T>(
        val added: (Int, T) -> Unit = { _, _ -> },
        val removed: (Int, T) -> Unit = { _, _ -> },
        val moved: (Int, Int) -> Unit = { _, _ ->}
    )

    val isEmptyRx: RxIface<Boolean>
}

interface Collector<T> {
    operator fun plusAssign(t: T)
}

fun <T> collector(fn: (T) -> Unit): Collector<T> {
    return object: Collector<T> {
        override fun plusAssign(t: T) {
            fn(t)
        }
    }
}

fun <T> ListenableList<T>.events(ks: KillSet): ReceiveChannel<ListEvent<T>> {
    return Channel<ListEvent<T>>(Channel.UNLIMITED).apply {
        ks += events(
            collector {
                offer(it)
            }
        )
    }
}

fun <T> ListenableList<T>.eventsEmitter(all: Boolean = true): EmitterFn<ListEvent<T>> {
    return { cb ->
        events(
            collector {
                cb(it)
            },
            all
        )
    }
}

fun <T> ListenableList<T>.events(channel: Collector<ListEvent<T>>, all: Boolean = true): Trigger {
    return addListener(
        ListenableList.Listener(
            added = { i, t ->
                channel += ListEvent.Add(i, t)
            },
            moved = { from, to ->
                channel += ListEvent.Move(from, to)
            },
            removed = { i, _ ->
                channel += ListEvent.Remove(i)
            }
        ),
        all
    )
}

class ListenableMutableList<T> : AbstractMutableList<T>(), ListenableList<T> {

    private val sizeVar = Var(0)

    val sizeRx : RxVal<Int>
        get() = sizeVar

    override val isEmptyRx = Rx(NoKill) { sizeVar() == 0 }

    override fun addListener(listener: ListenableList.Listener<T>, all: Boolean): Trigger {
        listeners += listener

        if (all) forEachIndexed(listener.added)

        return {
            listeners -= listener
        }.once()
    }

    private val delegate = mutableListOf<T>()

    private var listeners = listOf<ListenableList.Listener<T>>()

    override val size: Int
        get() = delegate.size


//    override fun add(element: T): Boolean {
//        add(delegate.size, element)
//        return true
//    }

    override fun add(index: Int, element: T) {
        delegate.add(index, element)
        sizeVar.now = size
        listeners.forEach { it.added(index, element) }
    }

    override fun removeAt(index: Int): T {
        val v = delegate.removeAt(index)
        sizeVar.now = size
        listeners.forEach { it.removed(index, v) }
        return v
    }

    override fun set(index: Int, element: T): T {
        val v = delegate.set(index, element)
        listeners.forEach {
            it.removed(index, v)
            it.added(index, element)
        }
        return v
    }

    override fun get(index: Int): T {
        return delegate[index]
    }

    fun move(from: Int, to: Int) {
        val v = delegate.removeAt(from)
        delegate.add(to, v)
        listeners.forEach { it.moved(from, to) }
    }

    val emitter by lazy {
        val e = Emitter<SetMove<T>> {
            map(::SetAdded)
        }

        addListener(
            ListenableList.Listener(
                added = { _, item -> e.emit(SetAdded(item)) },
                removed = { _, item -> e.emit(SetRemoved(item)) }
            )
        )

        e
    }




}


data class SortedListenableListConfig<T, C: Comparable<C>>(
    val list: ListenableList<T>,
    val killables: Killables,
    val key: (T, Killables) -> RxIface<C>
) {
    class Move(
        val forward: Boolean,
        val range: IntRange
    ) {
        val shift = if (forward) -1 else 1

        companion object {
            fun of(from: Int, to: Int): Move {
                return if (from < to) {
                    Move(
                        true,
                        from until to
                    )
                } else {
                    Move(
                        false,
                        to+1 .. from
                    )
                }
            }
        }
    }

    fun build(): ListenableList<T> {

        val result = ListenableMutableList<T>()

        class Holder(
            val holders: MutableList<Holder>,
            val sorted: MutableList<Holder>,
            item: T,
            holdersIndex: Int
        ) {
            fun find(k: C) = sorted.binarySearchBy(k) { it.currentKey }.let { i ->
                if (i < 0) -i-1 else i
            }

            val ks = killables.killables()
            val krx = key(item, ks)
            var currentKey = krx.now
            var sortedIndex = find(currentKey)

            init {
                holders.add(holdersIndex, this)
                sorted.add(sortedIndex, this)
                sorted.listIterator(sortedIndex+1).forEach { s ->
                    s.sortedIndex ++
                }
                result.add(sortedIndex, item)

                krx.forEachLater(ks.killSet) { k ->
                    val from = sortedIndex
                    sorted.removeAt(sortedIndex)
                    val to = find(k)
                    currentKey = k
                    sorted.add(to, this@Holder)
                    if (to != from) {
                        val move = Move.of(from, to)
                        move.range.map(sorted::get).forEach { it.sortedIndex += move.shift }
                        result.move(from, to)
                    }
                }
            }

            fun move(from: Int, to: Int) {
                holders.add(to, holders.removeAt(from))
            }

            fun remove(from: Int) {
                holders.removeAt(from)
                sorted.removeAt(sortedIndex)
                sorted.listIterator(sortedIndex).forEach { h ->
                    h.sortedIndex --
                }
                ks.kill()
                result.removeAt(sortedIndex)
            }
        }

        val holders = mutableListOf<Holder>()
        val sorted = mutableListOf<Holder>()

        killables += list.addListener(
            ListenableList.Listener(
                added = { idx, item ->
                    Holder(
                        holders,
                        sorted,
                        item,
                        idx
                    )
                },
                removed = { idx, _ ->
                    holders[idx].remove(idx)

                },
                moved = { from, to ->
                    holders[from].move(from, to)
                }

            )
        )

        return result
    }
}

fun <T, U> ListenableList<T>.map(
    killables: KillSet,
    create: (T) -> KillableValue<U>
): ListenableList<KillableValue<U>> {
    return map(
        killables,
        create,
        { k -> k.kill() }
    )
}

fun <T, U> ListenableList<T>.map(
    killables: KillSet,
    create: (T) -> U,
    destroy: (U) -> Unit
): ListenableList<U> {
    val result = ListenableMutableList<U>()

    killables += {
        result.forEach { destroy(it) }
    }

    killables += addListener(
        ListenableList.Listener(
            added = { index, element ->
                result.add(index, create(element))
            },
            removed = { index, _ ->
                destroy(result.removeAt(index))
            },
            moved = { from, to ->
                result.move(from, to)
            }
        )
    )

    return result

}
fun <T, U> ListenableList<T>.map(
    killables: KillSet,
    mapper: (T, KillSet) -> U
): ListenableList<U> {
    val result = ListenableMutableList<U>()
    class Holder(
        val kill: Trigger
    )
    val holders = mutableListOf<Holder>()

    killables += addListener(
        ListenableList.Listener(
            added = { index, element ->
                val ks = killables.killables()
                val node = mapper(element, ks.killSet)
                result.add(index, node)
                holders.add(index, Holder(ks.kill))
            },
            removed = { index, _ ->
                result.removeAt(index)
                val holder = holders.removeAt(index)
                holder.kill()
            },
            moved = { from, to ->
                result.move(from, to)
                holders.add(to, holders.removeAt(from))
            }
        )
    )

    return result

}

data class MappedListenableListConfig<T, U>(
    val list: ListenableList<T>,
    val killables: KillSet,
    val mapper: (T, KillSet) -> U
) {
    fun build(): ListenableList<U> {
        return list.map(killables, mapper)
    }
}


data class FilteredListenableListConfig<T, K, I>(
    val list: ListenableList<T>,
    val killables: KillSet,
    val filterKey: (T, KillSet) -> RxIface<K>,
    val input: RxIface<I>,
    val filter: (K, I) -> Boolean
) {

    fun build(): ListenableList<T> {
        val result = ListenableMutableList<T>()

        class Holder(
            val holders: MutableList<Holder>,
            val item: T,
            var holdersIndex: Int
        ) {
            var resultIndex: Optional<Int> = None
            var resultsBefore = 0

            fun resultsIndexAfter() = resultIndex.map { it + 1 }.getOrDefault(resultsBefore)

            val ks = killables.killables()
            val key = filterKey(item, ks.killSet)


            fun recalcResultsBefore() {
                resultsBefore =
                    if (holdersIndex == 0) 0
                    else holders[holdersIndex - 1].resultsIndexAfter()
            }


            init {
                holders.add(holdersIndex, this)
                holders.listIterator(holdersIndex + 1).forEach { i ->
                    i.holdersIndex += 1
                }
                recalcResultsBefore()

                key.forEach(ks.killSet) { k ->
                    updateKey(k)
                }
            }

            fun move(to: Int) {
                val from = holdersIndex
                holders.add(to, holders.removeAt(from))
                holdersIndex = to
                val fwd = from < to
                val range = if (fwd) from until to else to+1 .. from
                fun forRange(fn: (Holder) -> Unit) = range.forEach { i ->
                    fn(holders[i])
                }

                if (fwd) forRange { h ->
                    h.holdersIndex -= 1
                } else forRange { h ->
                    h.holdersIndex += 1
                }

                resultIndex.forEach { ri ->
                    if (fwd) {
                        forRange { h ->
                            h.shift(true)
                        }

                        recalcResultsBefore()
                    } else {
                        recalcResultsBefore()

                        forRange { h ->
                            h.shift(false)
                        }
                    }

                    result.move(ri, resultIndex.get())
                }
            }

            fun shift(down: Boolean) {
                if (down) {
                    resultsBefore -= 1
                    resultIndex = resultIndex.map { it - 1 }
                } else {
                    resultsBefore += 1
                    resultIndex = resultIndex.map { it + 1 }
                }
            }

            fun updateVisibility(newVisible: Boolean) {
                resultIndex.map { ri ->
                    if (!newVisible) {
                        // hide
                        result.removeAt(ri)
                        resultIndex = None
                        holders.listIterator(holdersIndex + 1).forEach { h ->
                            h.shift(true)
                        }
                    }
                }.getOrElse {
                    if (newVisible) {
                        // show
                        result.add(resultsBefore, item)
                        resultIndex = Some(resultsBefore)
                        holders.listIterator(holdersIndex + 1).forEach { h ->
                            h.shift(false)
                        }
                    }
                }
            }

            fun updateInput(i: I) {
                updateVisibility(filter(key.now, i))
            }

            fun updateKey(k: K) {
                updateVisibility(filter(k, input.now))
            }

            fun remove() {
                updateVisibility(false)
                holders.removeAt(holdersIndex)
                holders.listIterator(holdersIndex).forEach { h ->
                    h.holdersIndex -= 1
                }
            }

        }

        val holders = mutableListOf<Holder>()

        input.forEachLater(killables) { i ->
            holders.forEach { holder ->
                holder.updateInput(i)
            }
        }

        killables += list.addListener(
            ListenableList.Listener(
                added = { idx, t ->
                    Holder(
                        holders = holders,
                        item = t,
                        holdersIndex = idx
                    )
                },
                removed = { idx, _ ->
                    holders[idx].remove()
                },
                moved = { from, to ->
                    holders[from].move(to)
                }
            )
        )


        return result
    }


}
