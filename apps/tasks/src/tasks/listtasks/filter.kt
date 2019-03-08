package tasks.listtasks

import firebase.firestore.QuerySettingsBuilder
import taskslib.Task
import taskslib.TaskStatus
import taskslib.multiTags

sealed class StatusFilter {
    abstract val label: String
    abstract val key: String

    object All: StatusFilter() {
        override val key = "all"
        override val label = "All"
    }

    data class Single(val status: TaskStatus): StatusFilter() {
        override val label = status.name
        override val key = status.name

        companion object {
            val values = TaskStatus.values().map { Single(it) }
        }
    }

    data class Completed(val value: Boolean): StatusFilter() {
        override val label = run {
            val list = TaskStatus.values().filter { it.completed == value }
            "${if (value) "Finished" else "Not Finished"} (${list.joinToString(", ") { s -> s.name }})"
        }

        override val key = value.toString()

        companion object {
            val values = listOf(
                Completed(true),
                Completed(false)
            )
        }
    }

    companion object {
        val values by lazy {
            listOf(
                listOf(All),
                Single.values,
                Completed.values
            ).flatten()
        }

        private val byKey by lazy { values.associateBy { it.key } }
        fun valueOf(key: String) = byKey.getValue(key)
    }
}

data class FilterValues(
    val status: StatusFilter,
    val tags: List<String>
)

fun QuerySettingsBuilder<Task>.setup(fv: FilterValues) {
    when (fv.status) {
        is StatusFilter.Single -> Task.status eq fv.status.status
        is StatusFilter.Completed -> Task.completed eq fv.status.value
        else -> {}
    }
    if (fv.tags.isNotEmpty()) {
        if (fv.tags.size == 1) {
            Task.tags arrayContains fv.tags.first()
        } else {
            Task.tagsx arrayContains fv.tags.multiTags
        }
    }
}
