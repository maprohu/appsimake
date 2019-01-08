package tasks

import bootstrap.*
import commonfb.*
import commonlib.private
import commonui.RootPanel
import commonui.screenLayout
import commonui.showClosable
import domx.*
import firebase.User
import firebase.firestore.query
import fontawesome.faFw
import fontawesome.faPlus
import fontawesome.faSearch
import fontawesome.fas
import killable.Killables
import rx.Var
import styles.scrollVertical
import taskslib.Task
import taskslib.tasks

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
                                p2
                            }
                            span {
                                cls {
                                    fas
                                    faFw
                                    faPlus
                                }
                            }
                            val ks = killables.seq()
                            clickEvent {
                                ks += showClosable(
                                    { close -> editTask(root.sub(), close = close) },
                                    ::showHome
                                )
                            }
                        }
                        button {
                            cls {
                                btn
                                btnPrimary
                                p2
                            }
                            span {
                                cls {
                                    fas
                                    faFw
                                    faSearch
                                }
                            }
                            val ks = killables.seq()
                            clickEvent {
                                homeActive.now = false
                                ks += showClosable(
                                    { close -> listTasks(root.sub(), close) },
                                    ::showHome
                                )
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

                        val recentSeq = killables.seq()
                        homeActive.forEach { ha ->
                            if (ha) {
                                recentSeq += recent(
                                    ::showHome,
                                    root
                                )
                            } else {
                                recentSeq.clear()
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
    redisplay: () -> Unit,
    panel: RootPanel
): () -> Unit {
    return userTasks
        .query(db) {
            Task::completed eq false
            Task::ts.desc()
        }
        .showClosableList(
            redisplay = redisplay,
            page = { dit -> { close -> viewTask(root.sub(), dit, close )}},
            config = { onClick ->
                ListUIConfig(
                    panel,
                    extract = { Task(it.data()) },
                    hourglassDecor = { cls.cardBody },
                    emptyDivDecor = { cls.cardBody },
                    listDivDecor = {},
                    ulDecor = { cls.listGroupFlush },
                    itemFactory = stringListClick(
                        { it.title },
                        onClick
                    )
                )
            }
        )
}



