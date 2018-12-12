package ideas

import bootstrap.*
import common.ListenableMutableList
import domx.*
import firebase.firestore.DocItem
import firebase.firestore.docItems
import fontawesome.spinner
import killable.Killables
import rx.Var
import styles.scrollVertical
import kotlin.browser.document

fun LoggedIn.listIdeas() {

    val isBusy = Var(false)

    val killables = Killables()

    val list = ListenableMutableList<DocItem<Idea>>()

    killables += userIdeasRef.docItems(list)

    base.newRoot {
        flexColumn()
        div {
            flexFixedSize()
            flexRow()
            padding2()
            borderBottom()
            bgLigth()
            btn {
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
            btn {
                flexFixedSize()
                btnPrimary()
                innerText = "New"
                clickEvent { }
            }
        }
        div {
            classes += scrollVertical
            flexGrow1()
            padding2()
            listGroup {
                listenableList(list) { item ->
                    document.listGroupItem {
                        rxText { item.data().title }
                    }
                }
            }
        }
    }

}
