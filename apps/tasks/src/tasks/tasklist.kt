package tasks

import bootstrap.*
import common.ListenableMutableList
import commonfb.stringClickListUI
import commonui.RootPanel
import commonui.screenLayout
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.docItems
import firebase.firestore.query
import fontawesome.faChevronLeft
import fontawesome.faPlus
import fontawesome.fas
import fontawesome.spinner
import killable.Killables
import rx.Var
import styles.scrollVertical
import taskslib.Task
import kotlin.browser.document

fun LoggedIn.listTasks(after: () -> Unit) {

    val isBusy = Var(false)

    val killables = Killables()


    root.newRoot {

        fun displayList() {
            root.setRoot(this)
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
                            editTask {
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
                            viewTask(it) {
                                displayList()
                            }
                        }
                    )

            }
        }
    }
}
