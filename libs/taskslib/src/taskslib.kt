package taskslib

import common.Wrap
import common.auto
import common.named
import commonlib.*
import firebaseshr.firestore.Timestamp

val tasks by named { TasksLib(it) }

class TasksLib(name: String) : Lib(name) {
}

val <P: Private> DocWrap<P, *>.tasks by coll<Task>()
val <P: Private> DocWrap<P, *>.tags by coll<Tag>()
val <P: Task> DocWrap<P, *>.notes by coll<Note>()

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


class Task(o: dynamic = null) : Wrap(o) {
    var title : String by dyn()
    var text : String by dyn()
    var status: TaskStatus by enum(TaskStatus.New)
    var tags: Array<String> by dyn(arrayOf())
    var ts: Timestamp by dyn()

    val completed by auto { ::status.rxv().completed }
    val tagsx by auto { ::tags.rxv().subs(2, MaxTagIndexSize).toTypedArray() }
}

class Tag(o: dynamic = null) : Wrap(o)
class Note(o: dynamic = null) : Wrap(o) {
    val text : String by dyn()
    val ts: Timestamp by dyn()
}
