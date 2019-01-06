package tasks

import bootstrap.*
import commonfb.LoggedInCtx
import commonfb.LoggingInCtx
import commonfb.stringClickListUI
import commonlib.private
import commonui.RootPanel
import commonui.screenLayout
import domx.*
import firebase.User
import firebase.firestore.DocItem
import firebase.firestore.query
import fontawesome.faPlus
import fontawesome.faSearch
import fontawesome.fas
import killable.KillableSeq
import killable.Killables
import rx.Var
import styles.scrollVertical
import taskslib.Task
import taskslib.tasks
import kotlin.browser.document

fun main(args: Array<String>) {
    TasksMain().start()
}


class TasksMain : LoggingInCtx(tasks, "Tasks") {

    init {
        appCtx.registerServiceWorker()
    }

    override fun loggedIn(user: User): () -> Unit {
        return LoggedIn(this, user).main()
    }

}

class LoggedIn(
    val base: TasksMain,
    val user: User
) {
    val loggedInCtx = LoggedInCtx(base.fbCtx, user)
    val fbCtx = loggedInCtx.fbCtx
    val db = fbCtx.db
    val root = base.appCtx.root

    val userTasks = tasks.app.private.doc(user.uid).tasks

    val userTasksRef = loggedInCtx.fbCtx.db.collection(userTasks.path)

    val killables = Killables()

    fun main(): () -> Unit {

        root.newRoot {
            val homeActive = Var(true)
            fun showHome() {
                homeActive.now = true
                root.setRoot(this)
            }
            screenLayout {
                top {
                    middleTitle {
                        innerText = loggedInCtx.appCtx.title
                    }
                    right {
                        cls {
                            btnGroup
                        }
                        button {
                            cls {
                                btn
                                btnPrimary
                                fas
                                faPlus
                            }
                        }
                        button {
                            cls {
                                btn
                                btnPrimary
                                fas
                                faSearch
                            }
                            clickEvent {
                                homeActive.now = false
                                listTasks { showHome() }
                            }
                        }
                    }
                }
                main {
                    cls {
                        flexColumn
                        p2
                    }
                    classes += scrollVertical

                    div {
                        cls.card
                        div {
                            cls.cardHeader
                            innerText = "Recent"
                        }
                        val root = RootPanel(this)

                        val killableSeq = KillableSeq()
                        homeActive.forEach {
                            if (it) {
                                killableSeq.set(
                                    recent(root) { dit ->
                                        viewTask(dit) {
                                            showHome()
                                        }
                                    }
                                )
                            } else {
                                killableSeq.set {}
                            }
                        }
                    }
                }
            }
        }



        return {
            killables.kill()
            loggedInCtx.killables.kill()
        }
    }

}

fun LoggedIn.recent(
    root: RootPanel,
    onClick: (DocItem<Task>) -> Unit
): () -> Unit {
    return userTasks
        .query(db) {
            Task::completed eq false
            Task::ts.desc()
        }
        .stringClickListUI(
            root,
            extract = { Task(it.data()) },
            hourglassDecor = { cls.cardBody },
            emptyDivDecor = { cls.cardBody },
            listDivDecor = {},
            itemText = { it.title },
            ulDecor = { cls.listGroupFlush },
            onClick = onClick
        )


}



fun LoggedIn.taskGraph() {


}
