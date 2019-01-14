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