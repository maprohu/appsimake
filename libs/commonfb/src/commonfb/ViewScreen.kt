package commonfb

import bootstrap.*
import common.Optional
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
import org.w3c.dom.Node
import styles.scrollVertical

data class ViewScreenConfig<T: HasProps<*, String>>(
    val title: String,
    val edit: (Killables, RootPanel, T, () -> Unit) -> Unit,
    val view: HTMLDivElement.(Killables, T) -> Unit

)

fun <T: HasProps<*, String>> ViewScreenConfig<T>.build(
    killables: Killables,
    panel: RootPanel,
    item: T,
    close: () -> Unit
) {

    panel.newRoot {
        fun displayViewer() {
            panel.setRoot(this)
        }
        screenLayout(killables) {
            top {
                backButton(close)
                middleTitle {
                    innerText = this@build.title
                }
                right {
                    faButton(Fa.pen) {
                        cls {
                            m1
                            btnPrimary
                        }
                        clickEventSeq { ks, _ ->
                            edit(ks, panel.sub(), item, ::displayViewer)
                        }
                    }
                }
            }
            main {
                view(this, killables, item)
            }

        }
    }

}


fun Element.scrollPanel(fn: HTMLDivElement.() -> Unit) {
    cls {
        scrollVertical
        flexColumn
    }
    div {
        cls {
            p1
        }
        fn()
    }
}

fun Node.viewFieldLabel(title: String) {
    span {
        cls {
            m1
            fontWeightBold
        }
        innerText = title
    }
}

fun Node.viewTextField(label: String, fn: () -> Optional<String>): Killable {
    viewFieldLabel(label)
    return span {
        cls.m1
    }.rxTextOrEmpty(fn)
}