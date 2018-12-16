package tasks

import bootstrap.*
import common.ListenableMutableList
import commonui.RootPanel
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.docItems
import fontawesome.spinner
import killable.Killables
import rx.Var
import styles.scrollVertical
import kotlin.browser.document

fun LoggedIn.listTasks() {

    val isBusy = Var(false)

    val killables = Killables()


    root.newRoot {
        fun displayList() {
            root.setRoot(this)
        }

        flexColumn()
        div {
            flexFixedSize()
            flexRow()
            padding2()
            borderBottom()
            bgLight()
            btnButton {
                flexFixedSize()
                btnSecondary()
                innerText = "Back"
                clickEvent {
                    killables.kill()
                    main()
                }
            }
            div {
                flexGrow1()
            }
            div {
                rxDisplay(isBusy)
                flexCenter()
                padding2()
                spinner()
            }
            btnButton {
                flexFixedSize()
                btnPrimary()
                innerText = "New"
                clickEvent {
                    editTask {
                        displayList()
                    }
                }
            }
        }

        val listOrHourglassRoot = RootPanel(
            column {
                flexGrow1()
                padding2()
            }
        )
        listOrHourglassRoot.setHourglass()

        val list = ListenableMutableList<DocItem<Task>>()

        val listOrEmptyDiv = document.column {
            flexGrow1()

            val listOrEmptyRoot = RootPanel(
                column {
                    flexGrow1()
                }
            )

            val emptyDiv = document.column {
                flexCenter()
                flexGrow1()
                span {
                    innerText = "The list is empty"
                }
            }

            val listDiv = document.column {
                classes += scrollVertical
                flexGrow1()
                listGroup {
                    listenableList(list) { item ->
                        document.listAction {
                            rxText { item.data().title }
                            clickEvent {
                                editTask(item) {
                                    displayList()
                                }
                            }
                        }
                    }
                }
            }

            list.isEmptyRx.forEach { empty ->
                listOrEmptyRoot.setRoot(
                    if (empty) emptyDiv else listDiv
                )
            }
        }

        killables += userTasksRef.docItems(
            list,
            onFirst = {
                listOrHourglassRoot.setRoot(listOrEmptyDiv)
            }
        )
    }
}
