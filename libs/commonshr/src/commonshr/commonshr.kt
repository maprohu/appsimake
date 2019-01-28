package commonshr

import common.Optional

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
}
data class SetAdded<T>(override val value: T): SetMove<T>()
data class SetRemoved<T>(override val value: T): SetMove<T>()
