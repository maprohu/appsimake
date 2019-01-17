package common

import killable.Killable
import killable.Killables
import org.w3c.dom.*
import rx.Rx
import rx.RxIface
import rx.RxVal
import rx.Var
import kotlin.browser.window
import kotlin.dom.addClass
import kotlin.dom.removeClass



val onResize by lazy {
    val listeners = Listeners()

    window.onresize = {
        listeners.fire()
    }

    listeners
}

fun Window.resizeEvent(fn: () -> Unit) : () -> Unit {
    window.setTimeout(fn, 0)
    fn()
    return onResize.add(fn)
}

fun Element.insertAt(position: Int, element: Node) {
    val length = this.children.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.children.item(position))
    }
}

fun Node.insertAt(position: Int, element: Node) {
    val length = this.childNodes.length

    require(position <= length) { "Requested position: $position is more than length: $length" }

    if (length == position) {
        this.appendChild(element)
    } else {
        this.insertBefore(element, this.childNodes.item(position))
    }
}

fun Element.removeAt(position: Int): Node {
    return removeChild(children.item(position)!!)
}

fun Node.removeAt(position: Int): Node {
    return removeChild(childNodes.item(position)!!)
}

fun Element.replaceAt(position: Int, element: Element) {
    replaceChild(children.item(position)!!, element)
}

fun Node.removeFromParent() {
    parentElement?.removeChild(this)
}






fun HTMLAnchorElement.attachEnabler(enabled: Rx<Boolean>) : Killable {
    return enabled.forEach { en ->
        if (en) {
            this.removeClass("disabled")
            this.style.cursor = "pointer"
        } else {
            this.addClass("disabled")
            this.style.cursor = "default"
        }
    }
}



fun <T> linkedIterable(first: T?, next: (T) -> T?) : Iterable<T> {
    return object : Iterable<T> {
        override fun iterator(): Iterator<T> {
            return object : Iterator<T> {
                var current = first

                override fun next(): T {
                    val tmp = current
                    if (tmp == null) {
                        throw NoSuchElementException()
                    } else {
                        current = next(tmp)
                        return tmp
                    }
                }

                override fun hasNext(): Boolean {
                    return current != null
                }
            }
        }
    }
}

interface ListenableList<out T> : List<T> {

    fun addListener(listener: Listener<T>) : Killable

    data class Listener<in T>(
        val added: (Int, T) -> Unit = { _, _ -> },
        val removed: (Int, T) -> Unit = { _, _ -> },
        val moved: (Int, Int) -> Unit = { _, _ ->}
    )

    val isEmptyRx: RxIface<Boolean>
//    interface Listener<in T> {
//        fun added(index: Int, element: T)
//        fun removed(index: Int)
//        fun moved(from: Int, to: Int)
//
//        companion object {
//            fun <T> of(
//            ) : Listener<T> {
//                return object : Listener<T> {
//                    override fun added(index: Int, element: T) {
//                        added(index, element)
//                    }
//                    override fun removed(index: Int) {
//                        removed(index)
//                    }
//                    override fun moved(from: Int, to: Int) {
//                        moved(from, to)
//                    }
//                }
//            }
//        }
//    }
//
//    fun addListener(
//            added: (Int, T) -> Unit,
//            removed: (Int) -> Unit,
//            moved: (Int, Int) -> Unit
//    ): () -> Unit {
//        return addListener(
//                Listener.of(added, removed, moved)
//        )
//    }



}

class ListenableMutableList<T> : AbstractMutableList<T>(), ListenableList<T> {

    private val sizeVar = Var(0)

    val sizeRx : RxVal<Int>
        get() = sizeVar

    override val isEmptyRx = Rx { sizeVar() == 0 }

    override fun addListener(listener: ListenableList.Listener<T>): Killable {
        listeners += listener

        forEachIndexed(listener.added)

        return Killable.once {
            listeners -= listener
        }
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

                ks += krx.forEachLater { k ->
                    val from = sortedIndex
                    sorted.removeAt(sortedIndex)
                    val to = find(k)
                    currentKey = k
                    sorted.add(to, this)
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


data class MappedListenableListConfig<T, U>(
    val list: ListenableList<T>,
    val killables: Killables,
    val mapper: (T, Killables) -> U
) {
//    data class Lifecycle<T, U>(
//        val create: (T, Killables) -> U,
//        val kill: (U) -> Unit
//    ) {
//        companion object {
//            fun <T, U: Killable> killable(
//                killables: Killables,
//                create: (T, Killables) -> U
//            ) = Lifecycle<T, U>(
//                create = { t ->
//                    val ks = killables.killables()
//                    create(t, ks)
//                },
//                kill = Killable::kill
//            )
//            fun <T, U> killableValue(
//                killables: Killables,
//                create: (T, Killables) -> U
//            ) = killable<T, KillableValue<U>>(
//                killables
//            ) { t, ks ->
//                KillableValue(create(t, ks), ks)
//            }
//        }
//    }
    fun build(): ListenableList<U> {
        val result = ListenableMutableList<U>()
        class Holder(
            val killable: Killable
        )
        val holders = mutableListOf<Holder>()

        killables += list.addListener(
            ListenableList.Listener(
                added = { index, element ->
                    val ks = killables.killables()
                    val node = mapper(element, ks)
                    result.add(index, node)
                    holders.add(index, Holder(ks))
                },
                removed = { index, _ ->
                    result.removeAt(index)
                    val holder = holders.removeAt(index)
                    holder.killable.kill()
                },
                moved = { from, to ->
                    result.move(from, to)
                    holders.add(to, holders.removeAt(from))
                }
            )
        )

        return result
    }
}


data class FilteredListenableListConfig<T, K, I>(
    val list: ListenableList<T>,
    val killables: Killables,
    val filterKey: (T, Killables) -> RxIface<K>,
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
            val key = filterKey(item, ks)


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

                ks += key.forEach { k ->
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

        killables += input.forEachLater { i ->
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


