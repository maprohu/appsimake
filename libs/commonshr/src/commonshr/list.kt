package commonshr

import killable.KillSet
import killable.killables
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.produce
import kotlinx.coroutines.launch
import rx.*


sealed class ListEvent<out T>(val item: T) {
    class Add<out T>(
        val index: Int,
        item: T
    ): ListEvent<T>(item)
    class Move<out T>(
        val from: Int,
        val to: Int,
        item: T
    ): ListEvent<T>(item)
    class Remove<out T>(
        val index: Int,
        item: T
    ): ListEvent<T>(item)
}

fun <T, S> ListEvent<T>.map(fn: (T) -> S) =
    when (this) {
        is ListEvent.Add -> {
            ListEvent.Add(index, fn(item))
        }
        is ListEvent.Move -> {
            ListEvent.Move(from, to, fn(item))
        }
        is ListEvent.Remove -> {
            ListEvent.Remove(index, fn(item))
        }
    }


fun <T, S> ReceiveChannel<ListEvent<T>>.mapEvents(fn: (T) -> S) = map { it.map(fn) }

fun <T, S> ReceiveChannel<ListEvent<T>>.mapLive(
    deps: HasKills,
    fn: suspend KillsApi.(T) -> S
): ReceiveChannel<ListEvent<S>> {
    class Holder(
        val item: S,
        val kill: Trigger
    )
    val itemKills = mutableListOf<Holder>()

    return map { e ->
        when (e) {
            is ListEvent.Add -> {
                val ks = deps.kills.killables()
                val mapped = ks.fn(e.item)
                itemKills.add(e.index, Holder(mapped, ks.kill))
                ListEvent.Add(
                    index = e.index,
                    item = mapped
                )
            }
            is ListEvent.Move -> {
                val holder = itemKills.removeAt(e.from)
                itemKills.add(e.to, holder)
                ListEvent.Move(e.from, e.to, holder.item)
            }
            is ListEvent.Remove -> {
                val holder = itemKills.removeAt(e.index)
                holder.kill
                ListEvent.Remove(e.index, holder.item)
            }
        }
    }
}

fun <T> ListEvent<T>.applyTo(
    set: MutableSet<T>
) {
    when (this) {
        is ListEvent.Add -> {
            set += item
        }
        is ListEvent.Remove -> {
            set -= item
        }
        is ListEvent.Move -> {}
    }
}

fun <T> ReceiveChannel<ListEvent<T>>.applyTo(
    deps: CoroutineScope,
    set: MutableSet<T>
) {
    deps.launch {
        for (e in this@applyTo) {
            e.applyTo(set)
        }
    }
}

@UseExperimental(ExperimentalCoroutinesApi::class)
fun <T> ReceiveChannel<ListEvent<T>>.filter(
    deps: HasCsKills,
    fn: KillsApi.(T) -> Boolean
): ReceiveChannel<ListEvent<T>> = deps.produce(capacity = Channel.UNLIMITED) {
    abstract class Previous {
        abstract val filteredIndexAfter: RxIface<Int>
    }
    val First = object: Previous() {
        override val filteredIndexAfter = Var(0)
    }
    abstract class Item(
        initialIndex: Int,
        initialPrevious: Previous
    ): Previous(), KillsApi {
        val ks = deps.kills.killables()
        override val kills = ks.kills

        val index = Var(initialIndex)
        val previous = Var(initialPrevious)
        abstract val visible: RxIface<Boolean>

        val filteredIndex  by lazy { rx { previous().filteredIndexAfter() } }
        override val filteredIndexAfter by lazy {
            rx {
                filteredIndex().let { i ->
                    if (visible()) i + 1 else i
                }
            }
        }
        abstract fun moveTo(to: Int)
        abstract fun remove()

        abstract fun next(fn: Item.() -> Unit)
        abstract fun updatePrevious()
    }

    val items = mutableListOf<Item>()

    class Holder(
        val item: T,
        initialIndex: Int
    ): Item(
        initialIndex,
        if (initialIndex==0) First else items[initialIndex-1]
    ) {

        val alive = Var(true)

        override val visible = rx { alive() && fn(item) }

        val rxFilteredIndex = rx { filteredIndex() }

        override fun next(fn: Item.() -> Unit) {
            if (index.now < items.lastIndex) {
                items[index.now + 1].fn()
            }
        }

        override fun updatePrevious() {
            previous %= if (index.now == 0) First else items[index.now - 1]
        }

        init {
            items.add(index.now, this)
            items.drop(index.now + 1).forEach { i -> i.index.increase() }
            next { updatePrevious() }

            fun add() = ListEvent.Add(
                index = rxFilteredIndex.now,
                item = item
            )

            if (visible.now) {
                channel += add()
            }

            visible.forEachLater { v ->
                channel += if (v) {
                    add()
                } else {
                    ListEvent.Remove(
                        index = rxFilteredIndex.now,
                        item = item
                    )
                }
            }
        }

        override fun moveTo(to: Int) {
            val from = index.now
            val fromFiltered = rxFilteredIndex.now

            if (from != to) {
                items.add(to, items.removeAt(from))
                index %= to

                previous %= First // temporarily, to avoid circular reference

                if (from < to) { // from -> to
                    items.subList(from, to).forEach { it.index.decrease() }
                    items[from].updatePrevious()
                } else { // to <- from
                    items.subList(to+1, from+1).forEach { it.index.increase() }
                    items[from].next{ updatePrevious() }
                }

                next { updatePrevious() }
                updatePrevious()

                if (visible.now) {
                    val toFiltered = rxFilteredIndex.now

                    if (fromFiltered != toFiltered) {
                        channel += ListEvent.Move(
                            fromFiltered,
                            toFiltered,
                            item
                        )
                    }
                }

            }
        }

        override fun remove() {
            alive %= false
            next { previous %= this@Holder.previous.now }
            items.removeAt(index.now)
            items.drop(index.now).forEach { i -> i.index.decrease() }
            ks.kill()
        }
    }

    for (e in this@filter) {
        when (e) {
            is ListEvent.Add -> {
                Holder(e.item, e.index)
            }
            is ListEvent.Move -> {
                items[e.from].moveTo(e.to)
            }
            is ListEvent.Remove -> {
                items[e.index].remove()
            }
        }

    }
}
