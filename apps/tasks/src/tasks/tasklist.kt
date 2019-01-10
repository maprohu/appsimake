package tasks

import bootstrap.*
import common.orEmpty
import commonfb.ListUIConfig
import commonfb.showClosableList
import commonfb.stringListClick
import commonui.RootPanel
import commonui.screenLayout
import domx.*
import firebase.firestore.query
import fontawesome.faChevronLeft
import fontawesome.faPlus
import fontawesome.fas
import killable.Killables
import rx.Var
import taskslib.Task

fun LoggedIn.listTasks(panel: RootPanel, after: () -> Unit) : () -> Unit {

    val isBusy = Var(false)

    val killables = Killables()

    panel.newRoot {

        fun displayList() {
            panel.setRoot(this)
        }

        screenLayout {
            top {
                left{
                    button {
                        cls {
                            btn
                            btnSecondary
                            fas
                            faChevronLeft
                            clickEvent {
                                killables.kill()
                                after()
                            }
                        }

                    }
                }
                middle {

                    cls {
                        flexRow
                        alignItemsCenter
                    }

                    h5 {
                        cls {
                            flexGrow1
                            m2
                        }

                        innerText = "Task Search"
                    }
                    div {
                        cls {
                            flexGrow0
                            flexShrink0
                            spinnerBorder
                            spinnerBorderSm
                        }
                        rxDisplay(isBusy)
                    }
                }
                right {
                    btnButton {
                        cls {
                            fas
                            faPlus
                            btn
                            btnPrimary
                        }
                        clickEvent {
                            editTask(panel.sub(), Task()) {
                                displayList()
                            }
                        }
                    }
                }
            }
            main {
                val listRoot = RootPanel(this)


                killables += userTasks
                    .query(db) {
                        Task.title.asc()
                    }
                    .showClosableList(
                        redisplay = { displayList() },
                        page = { item ->
                            { close  ->
                                viewTask(panel.sub(), item, close)
                            }
                        },
                        config = {  show ->
                            ListUIConfig(
                                root = listRoot,
                                create = { Task() },
                                ulDecor = {
                                    cls {
                                        listGroupFlush
                                        borderBottom
                                    }
                                },
                                itemFactory = stringListClick(
                                    itemText = { it.title.initial().orEmpty() },
                                    onClick = show
                                )
                            )

                        }
                    )
            }
        }
    }

    return { killables.kill() }
}
