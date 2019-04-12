package common

import commonshr.*
import killable.*
import kotlinx.coroutines.*
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import rx.*

@Suppress("NOTHING_TO_INLINE")
inline fun dyn() = js("{}")
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj() = dyn().unsafeCast<T>()
@Suppress("NOTHING_TO_INLINE")
inline fun dyn(fn: dynamic.() -> Unit) = dyn().unsafeCast<Any>().apply(fn)
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)
@Suppress("NOTHING_TO_INLINE")
inline fun dynAlso(fn: (dynamic) -> Unit) = dyn().unsafeCast<Any>().also(fn)

class NamedDelegate<out T>(
    private val init : (String) -> (() -> T)
) {
    operator fun provideDelegate(
        thisRef: Any?,
        prop: KProperty<*>
    ): ReadOnlyProperty<Any?, T> {
        val value = init(prop.name)
        return object : ReadOnlyProperty<Any?, T> {
            override fun getValue(thisRef: Any?, property: KProperty<*>): T = value()
        }
    }
}

class NamedThisDelegate<in O, out T>(
    private val init : (O, String) -> T
) {
    operator fun provideDelegate(
        thisRef: O,
        prop: KProperty<*>
    ): ReadOnlyProperty<O, T> {
        val value = init(thisRef, prop.name)
        return object : ReadOnlyProperty<O, T> {
            override fun getValue(thisRef: O, property: KProperty<*>): T = value
        }
    }
}

fun <T> named(fn: (String) -> T) = NamedDelegate { n -> fn(n).funs.constant }
fun <T> namedFn(fn: (String) -> () -> T) = NamedDelegate(fn)
fun <T> namedLazy(fn: (String) -> T) = namedFn { name ->
    lazy {
        fn(name)
    }.let { l ->
        { l.value }
    }
}
fun <O, T> namedThis(fn: (O, String) -> T) = NamedThisDelegate(fn)
val varName get() = named { it }

@Suppress("UNUSED_PARAMETER", "SpellCheckingInspection", "NOTHING_TO_INLINE")
inline fun <T : Any> jsNew(
    constr: JsClass<T>
) : T = js("new constr()") as T

@Suppress("UNUSED_PARAMETER", "SpellCheckingInspection", "NOTHING_TO_INLINE")
inline fun <T : Any> jsNew(
    constr: JsClass<T>,
    param: dynamic
) : T = js("new constr(param)") as T


open class Listeners: AddRemoveImpl<Trigger>() {

    val trigger : Trigger = { fire() }

//    protected var listeners = listOf<() -> Unit>()
//
//    operator fun invoke(listener: () -> Unit) {
//        add(listener)
//    }
//
//    operator fun plusAssign(listener: () -> Unit) {
//        add(listener)
//    }
//
//    open fun add(listener: () -> Unit) : () -> Unit {
//        listeners += listener
//
//        return {
//            listeners -= listener
//        }
//    }

    open fun fire() {
        items.forEach { it() }
    }

    val first: Deferred<Unit>
        get() {
            val cd = CompletableDeferred<Unit>()
            val ks = Killables()
            ks += add {
                cd.complete(Unit)
                ks.kill()
            }
            return cd
        }


}


interface EmitterIface<T> {

    operator fun plusAssign(listener: (T) -> Unit) {
        add(listener)
    }

    fun add(listener: (T) -> Unit) : Trigger

}

fun <T> EmitterIface<T>.withInitial(vararg initial: T) = withInitial { initial.toList() }
fun <T> EmitterIface<T>.withInitial(initial: () -> Iterable<T>) = object: EmitterIface<T> {
    override fun add(listener: (T) -> Unit): Trigger {
        initial().forEach(listener)
        return this@withInitial.add(listener)
    }
}


open class Emitter<T>(
    val first: () -> Iterable<T> = ::emptyList
): EmitterIface<T> {

    protected var listeners = listOf<(T) -> Unit>()

    override fun add(listener: (T) -> Unit) : Trigger {
        first().forEach(listener)

        listeners += listener

        return {
            listeners -= listener
        }
    }

    open fun emit(t: T) {
        listeners.forEach { it(t) }
    }

}

class MappedEmitter<T, S>(
    private val emitter: EmitterIface<T>,
    private val map: (T) -> S
): EmitterIface<S> {
    override fun add(listener: (S) -> Unit): Trigger {
        return emitter.add { t ->
            listener(map(t))
        }
    }
}

fun <T, S> EmitterIface<T>.map(fn: (T) -> S) = MappedEmitter(this, fn)

fun <T> EmitterIface<SetMove<T>>.feedTo(set: MutableSet<T>): Trigger {
    return add { m ->
        m.applyTo(set)
    }
}

fun <T> EmitterIface<SetMove<T>>.filtered(ks: Killables, rxfn: (T) -> Boolean): Emitter<SetMove<T>> {

    val current = mutableSetOf<T>()
    val kills = mutableMapOf<T, Trigger>()

    val f = Emitter<SetMove<T>> {
        current.map(::SetAdded)
    }

    fun add(v: T) {
        current += v
        f.emit(SetAdded(v))
    }
    fun remove(v: T) {
        current -= v
        f.emit(SetRemoved(v))
    }

    ks += add { m ->
        val v = m.value
        when (m) {
            is SetAdded -> {
                val vks = ks.killables()
                val rxv = Rx(vks.killSet) { rxfn(v) }
                kills[v] = vks.kill
                rxv.forEach(vks.killSet) { fv ->
                    if (fv) add(v)
                    else remove(v)
                }
            }
            is SetRemoved -> {
                kills.remove(v)?.invoke()

                if (v in current) {
                    remove(v)
                }
            }
        }
    }

    return f
}

fun <T> EmitterIface<SetMove<T>>.feedTo(ks: killable.KillSet, list: MutableSet<T>) {
    ks += add { m ->
        m.applyTo(list)
    }
}

fun <T> EmitterIface<SetMove<T>>.toRxSet(ks: KillSet): RxSet<T> {
    val set = RxMutableSet<T>()

    feedTo(ks, set)

    return set
}

interface SetSource<T> {
    val current: Set<T>
    fun listen(
        ks: KillSet,
        fn: (SetMove<T>) -> Unit
    ): Set<T>
}

fun <T> SetSource<T>.toRx(ks: KillSet): RxIface<Set<T>> {
    val items = Var(emptySet<T>())

    fun process(m: SetMove<T>) {
        m.applyTo(items)
    }

    listen(ks) { process(it) }.forEach { process(SetAdded(it)) }

    return items
}

class CircularList<T> {

    private class Holder<T>(
        val item: T,
        var next: Holder<T>? = null,
        var prev: Holder<T>? = null
    )
    private val map = mutableMapOf<T, Holder<T>>()
    private var head: Holder<T>? = null

    val next: T
        get() {
            val h = head!!
            head = h.next
            return h.item
        }

    private fun Holder<T>.removeNohead() {
        val n = next!!
        val p = prev!!
        n.prev = p
        p.next = n
        next = null
        prev = null
    }
    private fun Holder<T>.remove() {
        if (head == this) {
            val pr = prev!!
            removeNohead()
            head = pr.next
        } else {
            removeNohead()
        }
    }

    fun remove(item: T) {
        map.getValue(item).remove()
    }

    fun insertItem(item: T, after: (Set<T>) -> T = { it.random() }) {
        val holder = Holder(item)
        if (head == null) {
            head = holder
            holder.next = holder
            holder.prev = holder
        } else {
            val afterId = after(map.keys)
            val prev = map.getValue(afterId)
            val next = prev.next!!

            holder.prev = prev
            holder.next = next
            prev.next = holder
            next.prev = holder
        }
        map[item] = holder
    }

    fun moveHead(fn: (Set<T>) -> T = { it.random() }) {
        if (map.keys.isNotEmpty()) {
            head = map.getValue(fn(map.keys))
        }
    }


}

class RandomSource<T>(
    val available: RxIface<Boolean>,
    val next: () -> T
) {
    companion object {
        operator fun <T> invoke(
            ks: KillSet,
            source: SetSource<T>,
            exclude: RxIface<Set<T>>
        ): RandomSource<T> {

            class Holder(
                val item: T,
                var next: Holder? = null,
                var prev: Holder? = null
            )
            val map = mutableMapOf<T, Holder>()
            var head: Holder? = null

            fun Holder.removeNohead() {
                val n = next!!
                val p = prev!!
                n.prev = p
                p.next = n
                next = null
                prev = null
            }
            fun Holder.remove() {
                if (head == this) {
                    val pr = prev!!
                    removeNohead()
                    head = pr.next
                } else {
                    removeNohead()
                }
            }

            fun remove(item: T) {
                map.getValue(item).remove()
            }

            fun insert(item: T) {
                val holder = Holder(item)
                map[item] = holder
                if (head == null) {
                    head = holder
                    holder.next = holder
                    holder.prev = holder
                } else {
                    val prev = map.values.random()
                    val next = prev.next!!

                    holder.prev = prev
                    holder.next = next
                    prev.next = holder
                    next.prev = holder
                }
            }

            val total = Var(emptySet<T>())
            fun updateTotal() {
                total.now = map.keys.toSet()
            }

            source.listen(ks) { m ->
                val v = m.value
                when (m) {
                    is SetRemoved -> {
                        remove(v)
                    }
                    is SetAdded -> {
                        insert(v)
                    }
                }
                updateTotal()
            }.forEach { insert(it) }

            val available = Rx(ks) {
                val tot = total()
                val ex = exclude()

                val av = tot - ex

                if (av.isEmpty()) {
                    tot
                } else {
                    av
                }
            }

            return RandomSource(
                Rx(ks) { available().isNotEmpty() }
            ) {
                var h = head!!
                do {
                    h = h.next!!
                } while (h.item !in available.now)
                head = h
                h.item
            }
        }
    }
}


fun <T> SetSource<T>.random(ks: KillSet, globalExclude: Set<T>): ReceiveChannel<T> {
    val channel = Channel<T>(Channel.RENDEZVOUS)
    ks += { channel.close() }

    val total = mutableSetOf<T>()
    val exclude = mutableSetOf<T>()

    var cd: CompletableDeferred<T>? = null

    total += listen(ks) { m ->
        val v = m.value
        when (m) {
            is SetRemoved -> {
                total -= v
            }
            is SetAdded -> {
                total += v
                if (v !in exclude && v !in globalExclude) {
                    cd?.let { d ->
                        d.complete(v)
                        cd = null
                    }
                }
            }
        }
    }

    GlobalScope.launch {
        suspend fun wait(): T {
           return CompletableDeferred<T>().also { cd = it }.await()
        }

        while (true) {
            val available = total - exclude - globalExclude
            val next = if (available.isEmpty()) {
                val restart = total - globalExclude

                if (restart.isNotEmpty()) {
                    exclude.clear()
                    restart.random()
                } else {
                    wait()
                }
            } else {
                available.random()
            }
            exclude += next
            channel.send(next)
        }
    }.addedTo(ks)

    return channel
}

open class AddRemoveImpl<T> {

    private val mutableItems = mutableListOf<T>()

    val items: List<T> = mutableItems

    val add: AddRemove<T> = { item ->
        mutableItems += item

        {
            mutableItems -= item
        }
    }

    operator fun plusAssign(item: T) { add(item) }
    operator fun invoke(item: T) { add(item) }

}

fun <T> AddRemoveImpl<T>.register(deps: HasKills, item: T) {
    deps.kills += add(item)
}

class AsyncListeners: AddRemoveImpl<Action>() {

    suspend fun fire() {
        coroutineScope {
            for (action in items) {
                launch {
                    action()
                }
            }
        }
    }

}
