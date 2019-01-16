package tasks

import bootstrap.*
import common.orEmpty
import commonfb.*
import commonui.RootPanel
import commonui.showClosable
import domx.*
import firebase.firestore.QueryBuilder
import firebase.firestore.query
import fontawesome.*
import killable.Killable
import killable.Killables
import rx.Rx
import rx.Var
import styles.*
import tasks.StatusFilter.Companion.completedOf
import tasks.StatusFilter.Companion.valueOf
import taskslib.Task
import taskslib.TaskStatus
import taskslib.multiTags
import kotlin.browser.document

sealed class StatusFilter {
    abstract val label: String
    abstract val key: String

    object All: StatusFilter() {
        override val key = "all"
        override val label = "All"
    }

    data class Single private constructor(val status: TaskStatus): StatusFilter() {
        override val label = status.name
        override val key = status.name

        companion object {
            val values =
                TaskStatus.values().map { Single(it) }

            val byEnum = values.associateBy { it.status }
        }
    }

    data class Completed private constructor(
        val value: Boolean
    ): StatusFilter() {
        override val label = run {
            val list = TaskStatus.byCompleted.getValue(value)

            "${if (value) "Finished" else "Not Finished"} (${list.joinToString(", ") { s -> s.name }})"
        }
        override val key = value.toString()

        companion object {
            val values =
                TaskStatus.byCompleted.keys.sorted().map { Completed(it) }

            val byValue = values.associateBy { it.value }
        }
    }

    companion object {

        val values =
            listOf(
                listOf(All),
                Single.values,
                Completed.values
            ).flatten()

        val byKey = values.associateBy { it.key }

        fun valueOf(key: String) = byKey.getValue(key)

        fun completedOf(v: Boolean) =
            Completed.byValue.getValue(v)

    }
}

data class FilterValues(
    val status: StatusFilter,
    val tags: List<String>
)

fun QueryBuilder<Task>.setup(fv: FilterValues) {
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


fun LoggedIn.listTasks(killables: Killables, panel: RootPanel, after: () -> Unit)  {

    ListScreenConfig(
        "Task List",
        userTasks,
        { Task() },
        ::viewTask,
        ::editTask,
        { it.title.initial().orEmpty() },
        filter = { lks, redisplay ->
            val status = Var<StatusFilter>(completedOf(false))
            val tags = Var(emptyList<String>())
            val filterValue = Rx {
                FilterValues(
                    status = status(),
                    tags = tags()
                )
            }
            val query = Rx {
                userTasks.query(db) {
                    setup(filterValue())
                    Task.title.asc()
                }
            }

            FilterConfig(
                query = query
            ) {
                cls {
                    p2
                }
                div {

                    cls {
                        border
                        rounded
                        bgLight
                        dGrid
                        alignContentCenter
                        justifyContentCenter
                        alignItemsCenter
                    }
                    style.cssText = """
                        grid-template-columns: auto auto;
                    """.trimIndent()

                    div {
                        cls {
                            m1
                            justifySelfEnd
                        }
                        innerText = "Status"
                    }
                    select {
                        cls {
                            m1
                            justifySelfStart
                            customSelect
                            widthAuto
                        }

                        StatusFilter.values.forEach {
                            option {
                                value = it.key
                                innerText = it.label
                            }
                        }

                        changeEvent {
                            status.now = valueOf(value)
                        }

                        value = status.now.key

                    }
                    div {
                        cls {
                            m1
                            justifySelfEnd
                        }
                        innerText = "Tags"
                    }
                    div {
                        cls {
                            m1
                            justifySelfStart
                            dFlex
                            flexRow
                            alignItemsCenter
                        }
                        div {
                            val tagsRoot = RootPanel(this)

                            tags.fold(Killable.empty) { old, tgs ->
                                old.kill()
                                val tks = lks.killables()

                                document.div {
                                    cls {
                                        dFlex
                                        flexWrap
                                    }

                                    tgs.forEach { tagId ->
                                        a {
                                            tagBadge(tks, tagId, tagSource)
                                            href = "#"
                                            clickEvent {
                                                tags.transform { s -> s - tagId }
                                            }
                                        }
                                    }

                                }.also { tagsRoot.setRoot(it) }

                                tks
                            }
                        }
                        button {
                            cls {
                                ml1
                                p1
                                btn
                                btnPrimary
                            }
                            span {
                                cls {
                                    fa {
                                        fw
                                        ellipsisH
                                    }
                                }
                            }
                            lks += clickEventSeq { ks, _ ->
                                showClosable(
                                    ks,
                                    { pks, close ->
                                        val tgs = Var(tags.now.toSet())
                                        selectTags(pks, root.sub(), tgs) { submit ->
                                            if (submit) {
                                                tags.now = tgs.now.sorted()
                                            }
                                            close()
                                        }
                                    },
                                    redisplay
                                )
                            }
                        }
                    }
                }
            }
        }

    ).build(
        killables,
        panel,
        db,
        after
    )

}
