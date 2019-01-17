package taskslib

import common.named
import common.toOptional
import commonlib.*
import commonshr.toLazy
import firebaseshr.*
import firebaseshr.firestore.Timestamp
import rx.Rx

val tasks by named { Lib(it) }

val DocWrap<Private>.tasks by coll<Task>()
val DocWrap<Private>.usertags by coll<Tag>()
val DocWrap<Private>.hiddenTasks by coll<HiddenTask>()
val DocWrap<Task>.notes by coll<Note>()

enum class TaskStatus(val completed: Boolean) {
    New(false),
    Started(false),
    Completed(true),
    Canceled(true);


    companion object {
        val byCompleted = values().groupBy { it.completed }


    }
}

fun <T> List<T>.subs(min: Int, max: Int): List<List<T>> {
    val result = mutableListOf<List<T>>()

    fun process(head: List<T>, rest: List<T>) {
        if (head.size < max && rest.isNotEmpty()) {
            val head2 = head + rest.first()
            if (head2.size >= min) {
                result.add(head2)
            }

            val rest2 = rest.drop(1)
            process(head2, rest2)
            process(head, rest2)
        }
    }

    process(listOf(), toList())

    return result
}

val MaxTagIndexSize = 4


open class Task : Base<Task>() {

    val title by o
        .scalar<String>()
        .mandatory()
        .ifPresent(ValidationError.mandatory) {it.isBlank()}
        .prop()

    val text by o.scalar<String>().prop()
    val status by o
        .enum<TaskStatus>()
        .withDefault(TaskStatus.New)
        .mandatory()
        .prop()

    val tags by o.array<String>().toSet().prop()

    val ts by o.scalar<Timestamp>().calculated { ops.serverTimestamp().toOptional().toLazy() }.prop()
    val completed by o.scalar<Boolean>().calculated {
        status.current().map { s -> s.completed }.let(::lazyOf)
    }.prop()

    val tagsx by
        o.array<String>().toSet()
            .calculated {
                val t = tags.current()
                lazy {
                    t.map {  ts ->
                        ts
                            .sorted()
                            .subs(2, MaxTagIndexSize)
                            .map { ids -> ids.multiTags }
                            .toSet()
                    }
                }
            }
            .prop()

    init {
        with(props) {
            onDeleted {
                ops.deleteCollection(
                    docWrapOrFail.notes
                )
            }
        }
    }

    companion object : Task()
}

val List<String>.multiTags
    get() = joinToString(";")

open class Tag : Base<Tag>() {
    val name by o.scalar<String>().prop()
    companion object : Tag()
}

open class Note : Base<Note>() {
    val text by o.scalar<String>().prop()
    val ts by o.scalar<Timestamp>().calculated { ops.serverTimestamp().toOptional().toLazy() }.prop()

    companion object : Note()

}

open class HiddenTask : Base<HiddenTask>()
