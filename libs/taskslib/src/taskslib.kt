package taskslib

import common.Wrap
import common.named
import commonlib.*
import firebaseshr.firestore.Timestamp

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

fun <T> Array<T>.subs(min: Int, max: Int): List<List<T>> {
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


class Task(o: dynamic = null) : Wrap<Task>(o) {
    var title : String by dyn()
    var text : String by dyn()
    var status: TaskStatus by enum(TaskStatus.New)
    var tags: Array<String> by dyn(arrayOf())
    var ts: Timestamp by dyn()

    val completed by auto { Task::status.rxv().completed }
    val tagsx by auto { Task::tags.rxv().subs(2, MaxTagIndexSize).toTypedArray() }
}

class Tag(o: dynamic = null) : Wrap<Tag>(o)
class Note(o: dynamic = null) : Wrap<Note>(o) {
    val text : String by dyn()
    val ts: Timestamp by dyn()
}
