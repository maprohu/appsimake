package commonfb

import bootstrap.btnPrimary
import bootstrap.flexColumn
import bootstrap.p1
import commonlib.DocWrap
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import firebaseshr.HasProps
import fontawesome.Fa
import fontawesome.pen
import killable.Killable
import killable.Killables
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import styles.scrollVertical

data class ViewScreenConfig<T: HasProps<*, String>>(
    val title: String,
    val edit: (RootPanel, T, () -> Unit) -> Killable,
    val view: HTMLDivElement.(T) -> Killable

)

fun <T: HasProps<*, String>> ViewScreenConfig<T>.build(
    panel: RootPanel,
    item: T,
    close: () -> Unit
): Killable {

    val killables = Killables()

    panel.newRoot {
        fun displayViewer() {
            panel.setRoot(this)
        }
        screenLayout {
            top {
                backButton(close)
                middleTitle {
                    innerText = this@build.title
                }
                right {
                    faButton(Fa.pen) {
                        cls.btnPrimary
                        clickEventSeq {
                            edit(panel.sub(), item, ::displayViewer)
                        }
                    }
                }
            }
            main {
                killables += view(this, item)
            }

        }
    }

    return killables
}


fun Element.scrollPanel(fn: HTMLDivElement.() -> Unit) {
    classes += scrollVertical
    cls {
        flexColumn
    }
    div {
        cls {
            p1
        }
        fn()
    }
}