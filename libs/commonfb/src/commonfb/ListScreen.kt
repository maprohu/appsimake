package commonfb

import bootstrap.*
import commonshr.CollectionWrap
import commonshr.invoke
import commonui.RootPanel
import commonui.faButton
import commonui.faTab
import commonui.screenLayout
import domx.*
import firebase.firestore.Firestore
import firebase.firestore.QueryWrap
import firebaseshr.HasFBProps
import fontawesome.Fa
import fontawesome.filter
import fontawesome.plus
import killable.KillSet
import killable.Killables
import org.w3c.dom.HTMLDivElement
import rx.RxIface
import rx.Var
import styles.scrollVertical

class FilterConfig<T>(
    val query: RxIface<QueryWrap<T>>,
    val filter: Boolean = true,
    val panel: HTMLDivElement.() -> Unit
) {
    companion object {

        @Suppress("RedundantLambdaArrow")
        fun <T> of(queryWrap: QueryWrap<T>) = { _:Killables, _:() -> Unit ->
            FilterConfig(
                query = Var(queryWrap),
                filter = false,
                panel = {}
            )
        }

    }
}

data class ListScreenConfig<T: HasFBProps<*>>(
    val title: String,
    val collectionWrap: CollectionWrap<T>,
    val create: () -> T,
    val view: (KillSet, RootPanel, T, () -> Unit) -> Unit,
    val edit: (KillSet, RootPanel, T, () -> Unit) -> Unit,
    val itemText: (T) -> String,
    val filter: (KillSet, redisplay: () -> Unit) -> FilterConfig<T>
)

fun <T: HasFBProps<*>> ListScreenConfig<T>.build(
    killables: KillSet,
    panel: RootPanel,
    db: Firestore,
    close: () -> Unit
) {

    val isBusy = Var(false)

    panel.newRoot {
        fun displayList() {
            panel.setRoot(this)
        }
        val filterConfig = filter(killables, ::displayList)

        screenLayout(killables) {
            val filterOpen = Var(false)

            top {
                spinner.visibility.now = isBusy
                backButton(close)
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

                        innerText = this@build.title
                    }
                }


                if (filterConfig.filter) {
                    tabs {
                        faTab(
                            killables,
                            Fa.filter,
                            filterOpen
                        ) {
                            clickEvent {
                                filterOpen.transform { act -> !act }
                            }
                        }
                    }
                }


                right {
                    faButton(Fa.plus) {
                        cls {
                            m1
                            btnPrimary
                        }
                        clickEventSeq(killables) { ks, _ ->
                            edit(ks, panel.sub(), create(), ::displayList)
                        }
                    }
                }
            }
            main {
                cls {
                    dFlex
                    flexColumn
                }
                if (filterConfig.filter) {
                    div {
                        cls {
                            flexFixedSize()
                            scrollVertical
                            borderBottom
                        }

                        rxDisplayed(killables, filterOpen)

                        div {
                            cls {
                                p2
                            }

                            filterConfig.panel(this)
                        }
                    }
                }

                div {
                    cls {
                        flexGrow1
                        dFlex
                        flexColumn
                        bgLight
                    }

                    val listRoot = RootPanel(this)

                    showClosableList<T>(
                        killables,
                        redisplay = { displayList() },
                        page = { ks, item, close ->
                            item.keepAlive(ks, db)
                            view(ks, panel.sub(), item, close)
                        },
                        config = { show ->
                            ListUIConfig(
                                root = listRoot,
                                query = filterConfig.query,
                                collectionWrap = collectionWrap,
                                create = create,
                                listDivDecor = {
                                    cls {
                                        scrollVertical
                                    }
                                },
                                ulDecor = {
                                    cls {
                                        m2
                                        dBlock
                                    }
                                },
                                itemFactory = stringListClick(
                                    killables,
                                    itemText = itemText,
                                    onClick = show
                                )
                            )

                        }
                    )
                }
            }
        }
    }

}
