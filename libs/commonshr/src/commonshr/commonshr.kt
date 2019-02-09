package commonshr

import common.Optional
import rx.Var

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
operator fun <T: InvokeApply> T.invoke(fn: T.() -> Unit) = apply(fn)
