package commonfb

import bootstrap.*
import commonui.RootPanel
import commonui.faButton
import commonui.faTab
import commonui.screenLayout
import domx.*
import firebase.firestore.QueryWrap
import firebaseshr.HasProps
import fontawesome.Fa
import fontawesome.filter
import fontawesome.plus
import killable.Killable
import killable.Killables
import org.w3c.dom.HTMLDivElement
import rx.Var
import styles.scrollVertical

data class FilterConfig(
    val panel: HTMLDivElement.() -> Unit
)

data class ListScreenConfig<T: HasProps<*, String>>(
    val title: String,
    val create: () -> T,
    val view: (RootPanel, T, () -> Unit) -> Killable,
    val edit: (RootPanel, T, () -> Unit) -> Killable,
    val query: QueryWrap<T>,
    val itemText: (T) -> String,
    val filter: FilterConfig? = null
)

fun <T: HasProps<*, String>> ListScreenConfig<T>.build(
    panel: RootPanel,
    close: () -> Unit
) : Killable {

    val isBusy = Var(false)
    val killables = Killables()

    panel.newRoot {
        fun displayList() {
            panel.setRoot(this)
        }

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

                if (filter != null) {
                    tabs {
                        faTab(
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
                        killables += clickEventSeq {
                            edit(panel.sub(), create(), ::displayList)
                        }
                    }
                }
            }
            main {
                cls {
                    flexColumn
                }
                if (filter != null) {
                    div {
                        cls {
                            flexFixedSize()
                            scrollVertical
                            borderBottom
                        }

                        rxDisplayed(filterOpen)

                        div {
                            cls {
                                p2
                            }

                            filter.panel(this)
                        }
                    }
                }

                div {
                    cls {
                        flexGrow1
                        dFlex
                        flexColumn
                    }

                    val listRoot = RootPanel(this)
                    killables += query.showClosableList(
                        redisplay = { displayList() },
                        page = { item ->
                            { close  ->
                                view(panel.sub(), item, close)
                            }
                        },
                        config = {  show ->
                            ListUIConfig(
                                root = listRoot,
                                create = create,
                                ulDecor = {
                                    cls {
                                        listGroupFlush
                                        borderBottom
                                    }
                                },
                                itemFactory = stringListClick(
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

    return killables
}
