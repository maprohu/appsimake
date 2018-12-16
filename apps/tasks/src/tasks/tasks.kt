package tasks

import bootstrap.commandButton
import bootstrap.listGroup
import bootstrap.padding2
import commonfb.LoggedInCtx
import commonfb.LoggingInCtx
import domx.classes
import firebase.User
import styles.scrollVertical

fun main(args: Array<String>) {
    TasksMain().start()
}

class TasksMain : LoggingInCtx("tasks") {

    override fun loggedIn(user: User): () -> Unit {
        LoggedIn(this, user).main()
        return {}
    }

}

external interface Task {
    var title: String
    var text: String
}
fun Task.toTaskData() = TaskData(this)

class LoggedIn(
    val base: TasksMain,
    val user: User
) {
    val loggedInCtx = LoggedInCtx(base.fbCtx, user)
    val privateRef = loggedInCtx.privateRef
    val userTasksRef = privateRef.collection("tasks")
    val root = base.appCtx.root

    fun main() {
        root.newRoot {
            classes += scrollVertical
            listGroup {
                padding2()
                commandButton("New Task") {
                    editTask()
                }
                commandButton("List Tasks") {
                    listTasks()
                }
                commandButton("Task Graph") {
                    taskGraph()
                }
                commandButton("Sign Out") {
                    base.fbCtx.signOut()
                }
            }
        }
    }

}




fun LoggedIn.taskGraph() {

}
