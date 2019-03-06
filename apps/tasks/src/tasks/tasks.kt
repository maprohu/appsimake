package tasks

import bootstrap.*
import common.*
import commonfb.*
import commonlib.private
import commonui.*
import commonui.widget.Body
import commonui.widget.Loading
import commonui.widget.switchToView
import domx.*
import firebase.User
import firebase.firestore.*
import fontawesome.*
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import rx.Rx
import rx.RxIface
import rx.Var
import taskslib.*
import kotlin.browser.document

fun main() {
    val loading = Loading()

    if (isServiceWorkerSupported) {
        APP.startRegisteringServiceWorker()
    }

    Body(loading.target).apply {
        launchGlobal {
            content.switchToView(Home(this@apply))
        }
    }

    launchGlobal {
        Boot.create(loading.target)
    }
    TasksMain().let { tm ->
        GlobalScope.launch {
            try {
                tm.fbCtx.db.enablePersistence().await()
            } catch (e: dynamic) {
                console.error(e.unsafeCast<Any>())
            }

            tm.start()
        }
    }
}


class TasksMain : LoggingInCtx(tasksLib, "Tasks") {

    init {
        appCtx.registerServiceWorker()
    }

    override fun loggedIn(user: User): Killable {
        return LoggedIn(this, user).main()
    }

}

class LoggedInx(
    val base: TasksMain,
    val user: User
) : HasDB by base.fbCtx {
    val loggedInCtx = LoggedInCtx(base.fbCtx, user)
    val fbCtx = loggedInCtx.fbCtx
    val root = base.appCtx.root

    val userPrivate = tasksLib.app.private.doc(user.uid)
    val userTasks = userPrivate.tasks
    val userTags = userPrivate.usertags
    val userHiddenTasks = userPrivate.hiddenTasks


    val userTasksRef = userTasks.ref

    val killables = Killables()

    val tagSource = TagSource(userTags, db).also { killables += it }

    fun main(): Killable {

        root.newRoot {
            val homeActive = Var(true)
            fun showHome() {
                homeActive.now = true
                root.setRoot(this)
            }
            val hiddenTaskIds = Var(emptySet<String>())
            val hiddenCount = Rx { hiddenTaskIds().size }

            killables += userHiddenTasks.query(db).query.idDiffs { d ->
                hiddenTaskIds.transform { h -> h - d.removed + d.added }
            }

            screenLayout(killables) {
                top {
                    middleTitle {
                        innerText = loggedInCtx.appCtx.title
                    }
                    right {
                        cls {
                            dFlex
                            flexRow
                            alignItemsCenter
                        }
                        div {
                            faButton(Fa.eye) {
                                cls {
                                    btnInfo
                                    m1
                                }
                                span {
                                    cls {
                                        ml1
                                        badgePill
                                        badgeWarning
                                    }
                                    rxText { "${hiddenCount()}" }
                                }
                                rxDisplayed { hiddenTaskIds().isNotEmpty() }
                                clickEvent {
                                    deleteCollection(
                                        userHiddenTasks.collectionRef(db),
                                        db
                                    )
                                    hiddenTaskIds.now = emptySet()
                                }
                            }
                        }
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
                                        { pks, close -> editTask(pks, root.sub(), Task().withCollection(userTasks), close = close) },
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
                    cls.dFlex
                    val root = RootPanel(this)

                    val recentSeq = killables.seq()
                    homeActive.forEach { ha ->
                        if (ha) {
                            recent(
                                recentSeq.killables(),
                                root,
                                hiddenTaskIds,
                                ::showHome
                            )
                        } else {
                            recentSeq.clear()
                        }
                    }

                }
            }
        }



        return Killable.once {
            killables.kill()
            loggedInCtx.killables.kill()
        }
    }

}


fun LoggedIn.recent(
    killables: Killables,
    panel: RootPanel,
    filter: RxIface<Set<String>>,
    redisplay: () -> Unit
) {
    showClosableList<Task>(
        killables = killables,
        redisplay = redisplay,
        page = { ks, dit, close ->
            dit.keepAlive(ks, db)
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
                collectionWrap = userTasks,
                create = { Task() },
                ulDecor = {
                    cls {
                        m1
                        flexFixedSize()
                    }
                },
                filter = { list ->
                    FilteredListenableListConfig(
                        list,
                        killables,
                        { task, _ -> Rx { task.props.idOrFail } },
                        input = filter,
                        filter = { id, ids -> id !in ids }
                    ).build()
                },
                itemFactory = { task ->
                    document.div {
                        cls {
                            listGroupItem
                            positionRelative
                            p0
                        }

                        a {
                            cls {
                                positionAbsolute
                                leftRightTopBottom0
                                listGroupItemAction
                            }
                            href = "#"
                            clickEvent {
                                onClick(task)
                            }
                        }

                        div {
                            cls {
                                p1
                                flexGrow1
                                dFlex
                                flexRow
                                alignItemsCenter
                                positionRelative
                                pointerEventsNone
                                zIndex1
                            }
                            span {
                                cls {
                                    m1
                                    flexGrow1
                                }
                                rxTextOrEmpty { task.title.initial() }
                            }
                            button {
                                cls {
                                    btn
                                    btnSecondary
                                    p2
                                    flexFixedSize()
                                    pointerEventsAll
                                }
                                span {
                                    cls.fa {
                                        fw
                                        eyeSlash
                                    }
                                }
                                clickEvent {
                                    HiddenTask()
                                        .withCollection(userHiddenTasks)
                                        .props.apply {
                                            persistedFB(task.props.idOrFail)
                                        }
                                        .save()
                                }
                            }
                        }
                    }

                }
            )
        }
    )
}



