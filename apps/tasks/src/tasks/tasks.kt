package tasks

import bootstrap.*
import common.orEmpty
import commonfb.*
import commonfb.ListUIConfig.Companion.standardEmptyDiv
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
                                killables += clickEventSeq { ks, _ ->
                                    showClosable(
                                        ks,
                                        { pks, close -> editTask(pks, root.sub(), Task(), close = close) },
                                        ::showHome
                                    )
                                }
                            }
                            faButton(Fa.search) {
                                cls.btnPrimary
                                killables += clickEventSeq { ks, _ ->
                                    homeActive.now = false
                                    showClosable(
                                        ks,
                                        { pks, close -> listTasks(pks, root.sub(), close) },
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
                                        killables += anchor.clickEventSeq { ks, _ ->
                                            showClosable(
                                                ks,
                                                { pks, c -> listTags(pks, root.sub(), c) },
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
                                    recent(
                                        ::showHome,
                                        root,
                                        recentSeq.killables()
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
    panel: RootPanel,
    killables: Killables
) {
    showClosableList<Task>(
        killables = killables,
        redisplay = redisplay,
        page = { ks, dit, close ->
            dit.keepAlive(ks, userTasks, db)
            viewTask(ks, root.sub(), dit, close )
        },
        config = { onClick ->
            ListUIConfig(
                root = panel,
                query = Var(
                     userTasks.query(db) {
                        Task.completed eq false
                        Task.ts.desc()
                    }
                ),
                create = { Task() },
                hourglassDecor = { cls.cardBody },
                emptyDivDecor = {
                    standardEmptyDiv()
                    cls.cardBody
                },
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



