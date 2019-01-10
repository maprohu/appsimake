package taskslib

import common.named
import common.toOptional
import commonlib.*
import commonshr.toLazy
import firebaseshr.*
import firebaseshr.firestore.Timestamp
import rx.Rx

val tasks by named { Lib(it) }

val DocWrap<Private, *>.tasks by coll<Task>()
val DocWrap<Private, *>.tags by coll<Tag>()
val DocWrap<Task, *>.notes by coll<Note>()

enum class TaskStatus(val completed: Boolean) {
    New(false),
    Started(false),
    Completed(true),
    Canceled(true)
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

    val title by o.scalar<String>().prop()
    val text by o.scalar<String>().prop()
    val status by o.scalar<TaskStatus>().withDefault(TaskStatus.New).enum().prop()
    val tags by o.array<String>().toSet().prop()

    val ts by o.scalar<Timestamp>().calculated { ops.serverTimestamp().toOptional().toLazy() }.prop()
    val completed by o.scalar<Boolean>().calculated {
        status.current.now.map { s -> s.completed }.let(::lazyOf)
    }.prop()

    val tagsx by run {
        o.scalar<Array<String>>().toList().arrayOf().toSet()
            .calculated {
                val t = tags.current()
                lazy {
                    t.map {  ts ->
                        ts.sorted().subs(2, MaxTagIndexSize).toSet()
                    }
                }
            }
            .prop()
    }

    companion object : Task()
}

class Tag : Base<Tag>()
class Note : Base<Note>() {
    val text by o.scalar<String>().prop()
    val ts by o.scalar<Timestamp>().withDefault { ops.serverTimestamp() }.prop()
}
