package commonfb

import bootstrap.*
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import firebase.firestore.QueryWrap
import firebaseshr.HasProps
import fontawesome.Fa
import fontawesome.plus
import killable.Killable
import killable.Killables
import rx.Var

data class ListScreenConfig<T: HasProps<*, String>>(
    val title: String,
    val create: () -> T,
    val view: (RootPanel, T, () -> Unit) -> Killable,
    val edit: (RootPanel, T, () -> Unit) -> Killable,
    val query: QueryWrap<T>,
    val itemText: (T) -> String
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

        screenLayout {
            top {
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
                    faButton(Fa.plus) {
                        cls.btnPrimary
                        killables += clickEventSeq {
                            edit(panel.sub(), create(), ::displayList)
                        }
                    }
                }
            }
            main {
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

    return killables
}
