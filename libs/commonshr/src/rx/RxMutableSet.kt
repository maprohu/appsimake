package rx

import common.*
import commonshr.*
import killable.KillSet

interface RxSet<out E>: Set<E> {
    val sizeRx: RxIface<Int>
    val isEmptyRx: RxIface<Boolean>
    val isNotEmptyRx: RxIface<Boolean>
    val diffs: EmitterIface<SetDiff<@UnsafeVariance E>>
    fun containsRx(ks: KillSet, value: @UnsafeVariance E): RxIface<Boolean>
}

class RxMutableSet<E>(
    private val delegate: MutableSet<E> = mutableSetOf()
): AbstractMutableSet<E>(), RxSet<E>, MutableSet<E> by delegate {

    override fun contains(element: E): Boolean {
        return delegate.contains(element)
    }

    override fun containsAll(elements: Collection<E>): Boolean {
        return delegate.containsAll(elements)
    }

    override fun isEmpty(): Boolean {
        return delegate.isEmpty()
    }

    private var iteratorRemoveImpl = chain { _:E -> }
    override fun iterator() = RxMutableIterator(delegate.iterator()) { iteratorRemoveImpl(it) }

    private var addImpl = chain(delegate::add)
    override fun add(element: E) = addImpl(element)

    private var addAllImpl = chain(delegate::addAll)
    override fun addAll(elements: Collection<E>) = addAllImpl(elements)

    private var removeImpl = chain(delegate::remove)
    override fun remove(element: E) = removeImpl(element)

    private var removeAllImpl = chain(delegate::removeAll)
    override fun removeAll(elements: Collection<E>) = removeAllImpl(elements)

    private var retainAllImpl = chain(delegate::retainAll)
    override fun retainAll(elements: Collection<E>) = retainAllImpl(elements)

    private var clearChain = chain(delegate::clear)
    override fun clear() = clearChain()

    override val diffs: Emitter<SetDiff<E>> by lazy {
        val emitter = Emitter<SetDiff<E>>()
        fun SetDiff<E>.emit() = emitter.emit(this)
        fun added(vararg e: E) { emitter.emit(SetDiff.added(*e)) }
        fun removed(vararg e: E) { emitter.emit(SetDiff.removed(*e)) }
        fun FunChain1<Collection<E>, Boolean>.compare(cmp: (before: Set<E>) -> SetDiff<E>) {
            this += { fn ->
                { es ->
                    val before = toSet()
                    fn(es).also { ch ->
                        if (ch) { cmp(before).emit() }
                    }
                }
            }
        }

        iteratorRemoveImpl thenIn { added(it) }
        addImpl thenInOut { e, b -> if (b) added(e) }
        removeImpl thenInOut { e, b -> if (b) removed(e) }
        addAllImpl.compare { before ->
            SetDiff(added = this - before)
        }
        removeAllImpl.compare { before ->
            SetDiff(removed = before - this)
        }
        retainAllImpl.compare { before ->
            SetDiff(removed = before - this)
        }
        clearChain += { fn ->
            {
                val diff = SetDiff(removed = this.toSet())
                fn()
                diff.emit()
            }
        }

        emitter
    }


    private val updated: Listeners by lazy {
        val ls = Listeners()
        fun FunChain0<Unit>.updated()= then { ls.fire() }
        fun <T> FunChain1<T, Boolean>.updated() = then { it.also { b -> if (b) ls.fire() } }
        fun <T> FunChain1<T, Unit>.updated() = then { it.also { ls.fire() } }

        iteratorRemoveImpl.updated()
        addAllImpl.updated()
        addImpl.updated()
        removeImpl.updated()
        removeAllImpl.updated()
        retainAllImpl.updated()
        clearChain.updated()

        ls
    }

    private fun <T> rxProperty(fn: () -> T): RxIface<T> {
        val rxv = Var(fn())
        inline fun update() { rxv.now = fn() }
        updated.add { update() }
        return rxv
    }

    override val sizeRx by lazy { rxProperty { size } }

    override val isEmptyRx by lazy { rxProperty { isEmpty() } }

    override val isNotEmptyRx by lazy { rxProperty { isNotEmpty() } }


    private val containsRxs by lazy {
        RefCountMap<E, Var<Boolean>> {
            Var(contains(it))
        }.apply {
            diffs += { d ->
                d.removed.forEach { id -> apply(id) { now = false } }
                d.added.forEach { id -> apply(id) { now = true } }
            }
        }
    }

    override fun containsRx(ks: KillSet, value: @UnsafeVariance E): RxIface<Boolean> {
        return containsRxs.get(ks, value)
    }
}

class RxMutableIterator<T>(
    private val delegate: MutableIterator<T>,
    private val removed: (T) -> Unit
): MutableIterator<T> by delegate {
    private var latest: Optional<T> = None

    override fun next(): T {
        return delegate.next().also { latest = Some(it) }
    }

    override fun remove() {
        delegate.remove()
        latest.forEach(removed)
    }

}

typealias FunDelegate0<T> = (() -> T) -> (() -> T)
class FunChain0<T>(private val delegate: () -> T) {
    private val fns = mutableListOf<FunDelegate0<T>>()
    fun add(fn: FunDelegate0<T>) { fns += fn}

    operator fun invoke(): T {
        return fns.fold(delegate) { acc, fn ->
            fn(acc)
        }.invoke()
    }

    operator fun plusAssign(fn: FunDelegate0<T>) { add(fn) }
    infix fun then(fn: (T) -> Unit) = add { d -> { d().also(fn) } }
}
fun <T> chain(delegate: () -> T) = FunChain0(delegate)

typealias FunDelegate1<P1, T> = ((P1) -> T) -> ((P1) -> T)
class FunChain1<P1, T>(private val delegate: (P1) -> T) {
    private val fns = mutableListOf<FunDelegate1<P1, T>>()
    fun add(fn: FunDelegate1<P1, T>) { fns += fn}

    operator fun invoke(p1: P1): T {
        return fns.fold(delegate) { acc, fn ->
            fn(acc)
        }.invoke(p1)
    }

    operator fun plusAssign(fn: FunDelegate1<P1, T>) { add(fn) }
    infix fun then(fn: (T) -> Unit) = add { d -> { p1 -> d(p1).also(fn) } }
    infix fun thenIn(fn: (P1) -> Unit) = add { d -> { p1 -> d(p1).also { fn(p1) } } }
    infix fun thenInOut(fn: (P1, T) -> Unit) = add { d -> { p1 -> d(p1).also { fn(p1, it) } } }
}
fun <P1, T> chain(delegate: (P1) -> T) = FunChain1(delegate)



fun <T, S> RxSet<T>.toMap(ks: KillSet, fn: (T, KillSet) -> S): Map<T, S> {
    return diffs.withInitial(SetDiff(added = this.toSet())).toMoves().toMap(ks, fn)
}
fun <T> RxSet<T>.process(ks: KillSet, fn: (T, KillSet) -> Unit) {
    toMap(ks, fn)
}
