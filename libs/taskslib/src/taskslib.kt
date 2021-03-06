package taskslib

import commonshr.*
import commonshr.properties.RxBase
import commonshr.properties.arrayOfScalarType
import commonshr.properties.setOfScalarType

val tasksLib = Lib("tasks")

val DocWrap<Private>.tasks by coll { Task() }
val DocWrap<Private>.usertags by coll { Tag() }
val DocWrap<Private>.hiddenTasks by coll { HiddenTask() }
val DocWrap<Task>.notes by coll { Note() }

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


open class Task : RxBase<Task>() {

    val title by o.string()
    val text by o.string()
    val status by o.enum(TaskStatus.New)

    val tags by o.set<String>()

    val ts by o.serverTimestamp()

    val completed by o.calc {
        status().completed
    }

    val tagsx by o.lazySet {
        val t = tags()
        lazy {
            t
                .sorted()
                .subs(2, MaxTagIndexSize)
                .map { ids -> ids.multiTags }
                .toSet()
        }
    }

//    init {
//        with(props) {
//            onDeleted {
//                binderOps.deleteCollection(
//                    docWrapOrFail.notes
//                )
//            }
//        }
//    }

    companion object : Task()
}

val List<String>.multiTags
    get() = joinToString(";")

open class Tag : RxBase<Tag>() {
    val name by o.string()
    companion object : Tag()
}

open class Note : RxBase<Note>() {
    val text by o.string()
    val ts by o.serverTimestamp()

    companion object : Note()

}

open class HiddenTask : RxBase<HiddenTask>()
