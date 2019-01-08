package tasks

import bootstrap.*
import commonfb.stringClickListUI
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
                            editTask(panel.sub()) {
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
                        Task::title.asc()
                    }
                    .stringClickListUI(
                        listRoot,
                        extract = { Task(it.data()) },
                        itemText = { it.title },
                        ulDecor = {
                            cls {
                                listGroupFlush
                                borderBottom
                            }
                        },
                        onClick = {
                            viewTask(panel.sub(), it) {
                                displayList()
                            }
                        }
                    )

            }
        }
    }

    return { killables.kill() }
}
