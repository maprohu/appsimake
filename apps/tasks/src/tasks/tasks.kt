package tasks

import bootstrap.*
import common.orEmpty
import commonfb.*
import commonlib.private
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import commonui.showClosable
import domx.*
import firebase.User
import firebase.firestore.query
import fontawesome.*
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import rx.Var
import styles.scrollVertical
import taskslib.Task
import taskslib.usertags
import taskslib.tasks

fun main(args: Array<String>) {
    TasksMain().let { tm ->
        GlobalScope.launch {
            tm.fbCtx.db.enablePersistence().await()

            tm.start()
        }
    }
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
) : HasDB by base.fbCtx {
    val loggedInCtx = LoggedInCtx(base.fbCtx, user)
    val fbCtx = loggedInCtx.fbCtx
    val root = base.appCtx.root

    val userPrivate = tasks.app.private.doc(user.uid)
    val userTasks = userPrivate.tasks
    val userTags = userPrivate.usertags


    val userTasksRef = userTasks.ref

    val killables = Killables()

    val tagSource = TagSource(userTags, db).also { killables += it }

    fun main(): () -> Unit {

        root.newRoot {
            val homeActive = Var(true)
            fun showHome() {
                homeActive.now = true
                root.setRoot(this)
            }
            screenLayout(killables) {
                top {
                    middleTitle {
                        innerText = loggedInCtx.appCtx.title
                    }
                    right {
                        div {
                            cls {
                                m1
                                btnGroup
                            }
                            faButton(Fa.plus) {
                                cls.btnPrimary
                                killables += clickEventSeq {
                                    showClosable(
                                        { close -> editTask(root.sub(), Task(), close = close) },
                                        ::showHome
                                    )
                                }
                            }
                            faButton(Fa.search) {
                                cls.btnPrimary
                                killables += clickEventSeq {
                                    homeActive.now = false
                                    showClosable(
                                        { close -> listTasks(root.sub(), close) },
                                        ::showHome
                                    )
                                }
                            }
                            dropdownGroup(Cls.btnPrimary) {
                                menu {
                                    cls.dropdownMenuRight
                                    dropdownItemAnchor {
                                        icon.cls.fa.tags
                                        text.innerText = "Tags"
                                        killables += anchor.clickEventSeq {
                                            showClosable(
                                                { c -> listTags(root.sub(), c) },
                                                ::showHome
                                            )
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
                main {
                    cls {
                        flexColumn
                        scrollVertical
                    }

                    div {
                        cls {
                            p2
                        }
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
            Task.completed eq false
            Task.ts.desc()
        }
        .showClosableList(
            redisplay = redisplay,
            page = { dit -> { close -> viewTask(root.sub(), dit, close )}},
            config = { onClick ->
                ListUIConfig(
                    panel,
                    create = { Task() },
                    hourglassDecor = { cls.cardBody },
                    emptyDivDecor = { cls.cardBody },
                    listDivDecor = {},
                    ulDecor = { cls.listGroupFlush },
                    itemFactory = stringListClick(
                        { it.title.initial().orEmpty() },
                        onClick
                    )
                )
            }
        )
}



