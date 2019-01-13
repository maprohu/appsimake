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

    }
}

fun <T> T.toLazy() = lazyOf(this)