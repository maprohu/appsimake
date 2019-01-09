package commonshr

import common.Optional

data class SetDiff<T>(
    val removed: Set<T>,
    val added: Set<T>
) {
    companion object {
        fun <T> of(
            old: Optional<Set<T>>,
            new: Optional<Set<T>>
        ) = SetDiff(
            old.map { o ->
                new.map { o - it }.getOrElse { o }
            }.getOrElse { emptySet() },
            new.map { o ->
                old.map { o - it }.getOrElse { o }
            }.getOrElse { emptySet() }
        )

    }
}
