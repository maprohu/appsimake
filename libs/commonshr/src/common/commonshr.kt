package common

import commonshr.SetAdded
import commonshr.SetMove
import commonshr.SetRemoved
import killable.*
import rx.Rx
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var

@Suppress("NOTHING_TO_INLINE")
inline fun dyn() = js("{}")
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj() = dyn().unsafeCast<T>()
@Suppress("NOTHING_TO_INLINE")
inline fun dyn(fn: dynamic.() -> Unit) = dyn().unsafeCast<Any>().apply(fn)
@Suppress("NOTHING_TO_INLINE")
inline fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)

class NamedDelegate<out T>(
    private val init : (String) -> T
) {
    operator fun provideDelegate(
        thisRef: Any?,
        prop: KProperty<*>
    ): ReadOnlyProperty<Any?, T> {
        val value = init(prop.name)
        return object : ReadOnlyProperty<Any?, T> {
            override fun getValue(thisRef: Any?, property: KProperty<*>): T = value
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

fun <T> named(fn: (String) -> T) = NamedDelegate(fn)
fun <O, T> namedThis(fn: (O, String) -> T) = NamedThisDelegate(fn)

//abstract class DynRx<T>(
//    internal val o: dynamic,
//    val name: String,
//    internal val gs: GetSet<T>,
//    val defaultValue: Optional<T>
//) : ReadOnlyProperty<Any, T> {
//    abstract val rxv: RxVal<T>
//    fun extract(): T = gs.get(o[name])
//    override fun getValue(thisRef: Any, property: KProperty<*>): T = rxv.now
//    val original = Var(gs.opt(o, name))
//    val isDirty by lazy { Rx { rxv() != original() } }
//    fun clearDirty() { original.now = Some(rxv.now) }
//}
//
//class Dyn<T>(
//    o: dynamic,
//    name: String,
//    gs: GetSet<T>
//) : DynRx<T>(o, name, gs), ReadWriteProperty<Any, T> {
//    private var onUpdate : (T) -> Unit = {}
//    override val rxv : RxVal<T> by lazy {
//        val v = Var(getValue())
//        onUpdate = { v.now = it }
//        v
//    }
//
//    override fun setValue(thisRef: Any, property: KProperty<*>, value: T) {
//        o[property.name] = gs.set(value)
//        onUpdate(value)
//    }
//}
//
//
//class AutoDyn<T>(
//    o: dynamic,
//    name: String,
//    gs: GetSet<T>,
//    fn: () -> T
//) : DynRx<T>(o, name, gs) {
//    override val rxv: RxVal<T> by lazy {
//        val rxv = Rx { fn() }
//        rxv.forEach {
//            o[name] = gs.set(it)
//        }
//        rxv
//    }
//}
//
//class Binder<T>(
//    private val wrap: Wrap<*>,
//    private val o: dynamic,
//    private val getSet: GetSet<T> = GetSet(),
//    private val init : (String) -> Unit
//) {
//    operator fun provideDelegate(
//        thisRef: Any,
//        prop: KProperty<*>
//    ): ReadWriteProperty<Any, T> {
//        init(prop.name)
//        return Dyn(o, prop.name, getSet).also { wrap.add(it) }
//    }
//}
//
//class AutoBinder<T>(
//    private val wrap: Wrap<*>,
//    private val o: dynamic,
//    private val getSet: GetSet<T> = GetSet(),
//    private val fn : () -> T
//) {
//    operator fun provideDelegate(
//        thisRef: Any,
//        prop: KProperty<*>
//    ) = AutoDyn(o, prop.name, getSet, fn).also { wrap.add(it) }
//}
//
//interface GetSet<T> {
//    fun get(v: dynamic) : T = v.unsafeCast<T>()
//    fun set(v: T) : dynamic = v.asDynamic()
//    fun opt(o: dynamic, name: String) = if (hasOwnProperty(o, name)) Some(get(o[name])) else None
//
//    companion object : GetSet<Any>
//}
//
//@Suppress("NOTHING_TO_INLINE", "UNCHECKED_CAST", "FunctionName")
//inline fun <T> GetSet() = GetSet as GetSet<T>
//
//inline fun <reified T: Enum<T>> enumGetSet() = object : GetSet<T> {
//    override fun set(v: T) = v.name
//    override fun get(v: dynamic) = enumValueOf<T>(v.unsafeCast<String>())
//}
//
//@Suppress("unused")
//class Prop<in T, out R>(
//    val name: String
//)
//val <T, R> KProperty1<T, R>.cast
//    get() = Prop<T, R>(name)
//
//abstract class Wrap<W: Wrap<W>>(o: dynamic) {
//
//    // KProperty.getDelegate is not yet supported in javascript...
//    internal val props = mutableMapOf<String, DynRx<*>>()
//    private var isFrozen = false
//    private fun freeze() {
//        isFrozen = true
//    }
//    private val dyns by lazy {
//        freeze()
//        props.values.filterIsInstance<Dyn<*>>()
//    }
//    internal fun <T> add(p: DynRx<T>) {
//        require(!isFrozen)
//        props[p.name] = p
//    }
//
//    private val w = o ?: obj()
//
//    private val propInit : (String, GetSet<Any?>, Any?) -> Unit =
//        if (o != null) {
//            { n, gs, v ->
//                if (w[n] == null) w[n] = gs.set(v)
//            }
//        } else {
//            { n, gs, v ->
//                w[n] = gs.set(v)
//            }
//        }
//
//    protected fun <T> dyn(gs: GetSet<T> = GetSet()) = Binder(this, w, gs) {}
//    protected fun <T> dyn(v: T, gs: GetSet<T> = GetSet()) = Binder(this, w, gs) { propInit(it, gs as GetSet<Any?>, v) }
//    protected inline fun <reified T: Enum<T>> enum() = dyn<T>(enumGetSet())
//    protected inline fun <reified T: Enum<T>> enum(v: T) = dyn(v, enumGetSet())
//    fun <T> auto(gs: GetSet<T> = GetSet(), fn: Wrap<W>.() -> T) = AutoBinder(this, w, gs) { fn(this) }
//
//
//    fun <T> Prop<W, T>.prop() = props.getValue(name) as DynRx<T>
//    fun <T> KProperty1<W, T>.prop() = cast.prop()
//    fun <T> KProperty1<W, T>.rxv() = prop().rxv()
//
//
//    val type : String by dyn(this::class.simpleName!!)
//
//    val isDirty by lazy {
//        freeze()
//        Rx {
//            dyns.any { it.isDirty() }
//        }
//    }
//
//    fun clearDirty() {
//        dyns.forEach { it.clearDirty() }
//    }
//
//}
//
//fun <W: Wrap<W>, T> W.prop(p: Prop<W, T>) = props.getValue(p.name) as DynRx<T>



@Suppress("UNUSED_PARAMETER", "SpellCheckingInspection")
inline fun <T : Any> jsNew(
    constr: JsClass<T>
) : T = js("new constr()") as T

@Suppress("UNUSED_PARAMETER", "SpellCheckingInspection")
inline fun <T : Any> jsNew(
    constr: JsClass<T>,
    param: dynamic
) : T = js("new constr(param)") as T


open class Listeners {

    val trigger : Trigger = { fire() }

    protected var listeners = listOf<() -> Unit>()

    operator fun invoke(listener: () -> Unit) {
        add(listener)
    }

    operator fun plusAssign(listener: () -> Unit) {
        add(listener)
    }

    open fun add(listener: () -> Unit) : () -> Unit {
        listeners += listener

        return {
            listeners -= listener
        }
    }

    open fun fire() {
        listeners.forEach { it() }
    }

}

interface EmitterIface<T> {

    operator fun plusAssign(listener: (T) -> Unit) {
        add(listener)
    }

    fun add(listener: (T) -> Unit) : Trigger

}

interface AsyncEmitter<T>: Killable {
    fun poll(): T?
    suspend fun receive(): T
}
fun <T> emptyAsyncEmitter() = object : AsyncEmitter<T> {
    override fun poll(): T? = null

    override suspend fun receive(): T = CompletableDeferred<T>().await()

    override fun kill() {}
}

class DynamicAsyncEmitter<T>(
    initial: AsyncEmitter<T>
): AsyncEmitter<T> {
    override fun poll(): T? {
        return current.poll()
    }

    private val cds = mutableListOf<CompletableDeferred<T>>()

    private fun CompletableDeferred<T>.listen() {
        val cd = this
        val c = current
        GlobalScope.launch {
            val p = c.receive()
            if (!cd.isCompleted) {
                cd.complete(p)
            }
            cds -= cd
        }
    }
    override suspend fun receive(): T {
        val cd = CompletableDeferred<T>()
        cds += cd
        cd.listen()
        return cd.await()
    }

    override fun kill() {
        current.kill()
        current = emptyAsyncEmitter()
    }

    private var current = initial

    fun setCurrent(c: AsyncEmitter<T>) {
        current.kill()
        current = c
        cds.forEach { it.listen() }
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

fun <T> Emitter<SetMove<T>>.toSetSource(sfn: () -> Set<T>) = object : SetSource<T> {
    override val current: Set<T>
        get() = sfn()

    override fun listen(ks: KillSet, fn: (SetMove<T>) -> Unit): Set<T> {
        ks += this@toSetSource.add(fn)
        return sfn()
    }
}

class MappedEmitter<T, S>(
    private val emitter: EmitterIface<T>,
    private val fn: (T) -> S
): EmitterIface<S> {
    override fun add(listener: (S) -> Unit): Trigger {
        return emitter.add { t ->
            listener(fn(t))
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
    val kills = mutableMapOf<T, Killable>()

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
                val rxv = Rx { rxfn(v) }.addedTo(vks)
                kills[v] = rxv
                rxv.forEach { fv ->
                    if (fv) add(v)
                    else remove(v)
                }
            }
            is SetRemoved -> {
                kills.remove(v)?.kill()

                if (v in current) {
                    remove(v)
                }
            }
        }
    }

    return f
}

fun <T> combineAnd(
    ks: Killables,
    e1: EmitterIface<SetMove<T>>,
    e2: EmitterIface<SetMove<T>>
): EmitterIface<SetMove<T>> = combine(ks, e1, e2, Boolean::and)

fun <T> combineN(
    ks: Killables,
    pairs: Iterable<Pair<EmitterIface<SetMove<T>>, MutableSet<T>>>,
    fn: (T) -> Boolean
): EmitterIface<SetMove<T>> {
    val lks = ks.killables()

    val result = mutableSetOf<T>()
    val out = Emitter<SetMove<T>> {
        result.map { SetAdded(it) }
    }

    fun connect(emitter: EmitterIface<SetMove<T>>, thisSet: MutableSet<T>) {
        lks += emitter.add { m ->
            val id = m.value
            val before = m.value in result
            m.applyTo(thisSet)
            val after = fn(id)

            when {
                before && !after -> {
                    result -= id
                    out.emit(SetRemoved(id))
                }
                !before && after -> {
                    result += id
                    out.emit(SetAdded(id))
                }
            }
        }

    }
    pairs.forEach { (em, set) ->
        connect(em, set)
    }

    return out

}

fun <T> combine(
    ks: Killables,
    e1: EmitterIface<SetMove<T>>,
    e2: EmitterIface<SetMove<T>>,
    e3: EmitterIface<SetMove<T>>,
    fn: (Boolean, Boolean, Boolean) -> Boolean
): EmitterIface<SetMove<T>> {
    val set1 = mutableSetOf<T>()
    val set2 = mutableSetOf<T>()
    val set3 = mutableSetOf<T>()

    val after = { id: T ->
        val v1 = id in set1
        val v2 = id in set2
        val v3 = id in set3
        fn(v1, v2, v3)
    }

    return combineN(
        ks,
        listOf(
            Pair(e1, set1),
            Pair(e2, set2),
            Pair(e3, set3)
        ),
        after
    )
}

fun <T> combine(
    ks: Killables,
    e1: EmitterIface<SetMove<T>>,
    e2: EmitterIface<SetMove<T>>,
    fn: (Boolean, Boolean) -> Boolean
): EmitterIface<SetMove<T>> {

    val set1 = mutableSetOf<T>()
    val set2 = mutableSetOf<T>()

    val after = { id: T ->
        val v1 = id in set1
        val v2 = id in set2
        fn(v1, v2)
    }

    return combineN(
        ks,
        listOf(
            Pair(e1, set1),
            Pair(e2, set2)
        ),
        after
    )
}

fun <T> EmitterIface<SetMove<T>>.andIn(other: EmitterIface<SetMove<T>>, ks: Killables): EmitterIface<SetMove<T>> {
    return combineAnd(ks, this, other)
}

fun <T> EmitterIface<SetMove<T>>.feedTo(list: MutableList<T>): Trigger {
    return add { m ->
        m.applyTo(list)
    }
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

            val available = Rx {
                val tot = total()
                val ex = exclude()

                val av = tot - ex

                if (av.isEmpty()) {
                    tot
                } else {
                    av
                }
            }.addedTo(ks)

            return RandomSource(
                Rx { available().isNotEmpty() }.addedTo(ks)
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

//fun <T> priorityMerge(
//    kills: KillSet,
//    vararg channels: RandomSource<T>
//): ReceiveChannel<T> {
//    val channel = Channel<T>(Channel.RENDEZVOUS)
//
//    val firstAvailable = Rx {
//        channels.find { it.available() }
//    }.addedTo(kills)
//
//    val seq = channels.asSequence()
//    GlobalScope.launch {
//        suspend fun first(): T {
//            val fks = Killables()
//            val cd = CompletableDeferred<T>()
//
//            channels.forEach {  ch ->
//                launch {
//                    cd.complete(
//                        ch.receive()
//                    )
//                    fks.kill()
//                }.addedTo(fks.killSet)
//            }
//
//            return cd.await()
//        }
//
//        while (true) {
//            channel.send(
//                seq.map { it.poll() }.firstOrNull { it != null } ?: first()
//            )
//        }
//    }.addedTo(kills)
//
//
//
//    return channel
//}

interface SetSourceWithKey<T, K>: SetSource<T> {
    fun get(k: K): Deferred<T>
    suspend fun getOrPut(id: K, fn: suspend (T) -> Unit): T
}

fun <T, S> SetSource<T>.map(mfn: (T) -> S) = object : SetSource<S> {
    override val current: Set<S>
        get() = this@map.current.map(mfn).toSet()

    override fun listen(ks: KillSet, fn: (SetMove<S>) -> Unit): Set<S> {
        return this@map.listen(ks) { m -> fn(m.map(mfn)) }.map(mfn).toSet()
    }
}

fun <T> SetSource<T>.filtered(ks: KillSet, rxfn: (T) -> Boolean): SetSource<T> {

    var curr = setOf<T>()
    val kills = mutableMapOf<T, Killable>()

    val f = Emitter<SetMove<T>>()

    fun add(v: T) {
        curr += v
        f.emit(SetAdded(v))
    }
    fun remove(v: T) {
        curr -= v
        f.emit(SetRemoved(v))
    }

    fun process(m: SetMove<T>) {
        val v = m.value
        when (m) {
            is SetAdded -> {
                val vks = ks.killables()
                val rxv = Rx { rxfn(v) }.addedTo(vks)
                kills[v] = rxv
                rxv.forEach { fv ->
                    if (fv) add(v)
                    else remove(v)
                }
            }
            is SetRemoved -> {
                kills.remove(v)?.kill()

                if (v in curr) {
                    remove(v)
                }
            }
        }

    }

    listen(ks, ::process).also { it.map(::SetAdded).forEach(::process) }

    return f.toSetSource { curr }
}


fun <T> combineN(
    ks: KillSet,
    pairs: Iterable<Pair<SetSource<T>, MutableSet<T>>>,
    fn: (T) -> Boolean
): SetSource<T> {

    var result = setOf<T>()
    val out = Emitter<SetMove<T>>()

    fun connect(emitter: SetSource<T>, thisSet: MutableSet<T>) {
        fun process(m: SetMove<T>) {
            val id = m.value
            val before = m.value in result
            m.applyTo(thisSet)
            val after = fn(id)

            when {
                before && !after -> {
                    result -= id
                    out.emit(SetRemoved(id))
                }
                !before && after -> {
                    result += id
                    out.emit(SetAdded(id))
                }
            }
        }
        emitter.listen(ks, ::process).also { it.map(::SetAdded).forEach(::process) }
    }
    pairs.forEach { (em, set) ->
        connect(em, set)
    }

    return out.toSetSource { result }

}

fun <T> combine(
    ks: KillSet,
    e1: SetSource<T>,
    e2: SetSource<T>,
    e3: SetSource<T>,
    fn: (Boolean, Boolean, Boolean) -> Boolean
): SetSource<T> {
    val set1 = mutableSetOf<T>()
    val set2 = mutableSetOf<T>()
    val set3 = mutableSetOf<T>()

    val after = { id: T ->
        val v1 = id in set1
        val v2 = id in set2
        val v3 = id in set3
        fn(v1, v2, v3)
    }

    return combineN(
        ks,
        listOf(
            Pair(e1, set1),
            Pair(e2, set2),
            Pair(e3, set3)
        ),
        after
    )
}

fun <T> combine(
    ks: KillSet,
    e1: SetSource<T>,
    e2: SetSource<T>,
    fn: (Boolean, Boolean) -> Boolean
): SetSource<T> {

    val set1 = mutableSetOf<T>()
    val set2 = mutableSetOf<T>()

    val after = { id: T ->
        val v1 = id in set1
        val v2 = id in set2
        fn(v1, v2)
    }

    return combineN(
        ks,
        listOf(
            Pair(e1, set1),
            Pair(e2, set2)
        ),
        after
    )
}

fun <T> SetSource<T>.toEmitter(): EmitterIface<SetMove<T>> = object : EmitterIface<SetMove<T>> {
    override fun add(listener: (SetMove<T>) -> Unit): Trigger {
        val ks = Killables()
        listen(ks.killSet, listener).also {
            it.map(::SetAdded).forEach(listener)
        }
        return ks.toTrigger()
    }
}

fun <T> combineAnd(
    ks: KillSet,
    e1: SetSource<T>,
    e2: SetSource<T>
): SetSource<T> = combine(ks, e1, e2, Boolean::and)
