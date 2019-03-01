package commonshr

import common.EmitterIface
import common.None
import common.Optional
import common.Some
import killable.HasKillSet
import killable.KillSet
import killable.Killables
import killable.killables
import rx.Var

fun hasOwnProperty(d: dynamic, prop: String) = d.hasOwnProperty(prop).unsafeCast<Boolean>()
fun <T> opt(d: dynamic, name: String) = if (hasOwnProperty(d, name)) Some(d[name].unsafeCast<T>()) else None

data class SetDiff<T>(
    val removed: Set<T> = setOf(),
    val added: Set<T> = setOf()
) {
    companion object {
        fun <T> of(
            old: Optional<Set<T>>,
            new: Optional<Set<T>>
        ) = SetDiff(
            removed = old.map { o ->
                new.map { n -> o - n }.getOrElse { o }
            }.getOrElse { emptySet() },
            added = new.map { n ->
                old.map { o -> n - o }.getOrElse { n }
            }.getOrElse { emptySet() }
        )
        fun <T> of(
            old: Set<T>,
            new: Set<T>
        ) = SetDiff(
            removed = old - new,
            added = new - old
        )

        fun <T> added(vararg e: T) = SetDiff(added = setOf(*e))
        fun <T> removed(vararg e: T) = SetDiff(removed = setOf(*e))

    }


}

fun <T> T.toLazy() = lazyOf(this)

sealed class SetMove<out T> {
    abstract val value: T
    fun <S> map(fn: (T) -> S) = when(this) {
        is SetAdded -> SetAdded(fn(value))
        is SetRemoved -> SetRemoved(fn(value))
    }
    fun applyTo(set: MutableSet<@UnsafeVariance T>) = when(this) {
        is SetAdded -> set += value
        is SetRemoved -> set -= value
    }
    fun applyTo(set: MutableList<@UnsafeVariance T>) = when(this) {
        is SetAdded -> set += value
        is SetRemoved -> set -= value
    }
    fun applyTo(set: Var<Set<@UnsafeVariance T>>) = when(this) {
        is SetAdded -> set.transform { it + value }
        is SetRemoved -> set.transform { it - value }
    }
}
data class SetAdded<T>(override val value: T): SetMove<T>()
data class SetRemoved<T>(override val value: T): SetMove<T>()

interface InvokeApply
inline operator fun <T: InvokeApply> T.invoke(fn: T.() -> Unit) = apply(fn)

interface InvokeWith
inline operator fun <T: InvokeWith, O> T.invoke(fn: T.() -> O) = with(this, fn)

fun <T> EmitterIface<SetDiff<T>>.toMoves() : EmitterIface<SetMove<T>> = object: EmitterIface<SetMove<T>> {
    override fun add(listener: (SetMove<T>) -> Unit): Trigger {
        return this@toMoves.add { diff ->
            diff.removed.forEach { listener(SetRemoved(it)) }
            diff.added.forEach { listener(SetAdded(it)) }
        }
    }
}

fun <T> EmitterIface<SetMove<T>>.process(ks: KillSet, fn: HasKillSet.(T) -> Unit) {
    val map = mutableMapOf<T, Trigger>()

    ks += {
        map.values.forEach { it() }
        map.clear()
    }

    ks += add { m ->
        val v = m.value
        when (m) {
            is SetAdded -> {
                val vks = ks.killables().also {
                    it += { map -= v }
                }
                vks.fn(v)
                map[v] = vks.kill
            }
            is SetRemoved -> {
                map.getValue(v)()
            }
        }
    }
}

fun <T, S> EmitterIface<SetMove<T>>.toMap(ks: KillSet, fn: HasKillSet.(T) -> S): Map<T, S> {
    val map = mutableMapOf<T, Pair<S, Trigger>>()

    ks += {
        map.values.forEach { it.second() }
        map.clear()
    }

    add { m ->
        val v = m.value
        when (m) {
            is SetAdded -> {
                val vks = ks.killables().also {
                    it += { map -= v }
                }
                map[v] = Pair(
                    vks.fn(v),
                    vks.kill
                )
            }
            is SetRemoved -> {
                map.getValue(v).second()
            }
        }
    }

    return object: AbstractMap<T, S>() {
        override val entries: Set<Map.Entry<T, S>>
            get() = map.mapValues { it.value.first }.entries
    }
}