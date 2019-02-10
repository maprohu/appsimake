package commonui.widget

import bootstrap.*
import commonshr.*
import commonui.faButtonSpan
import domx.*
import fontawesome.*
import org.w3c.dom.*
import styles.*
import kotlin.browser.document

class Toasts(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls {
            dFlex
            flexColumn
            alignItemsEnd
            justifyContentStart
            pointerEventsNone
            p1
        }
    }

    val toast get() = Toast(node.append.child).visible()

}


class Toast(sp: Parent): ScreenWrap(sp) {
    override val node = document.a {
        cls {
            alert
            pointerEventsAll
            textDecorationNone
            hoverColorInherit
            m1
            p1
        }
        href = "#"
        clickEvent {
            hide()
        }
    }


    private val slots = object {
        val text = slot
        val close = slot
    }

    val warning by lazy {
        cls.alertWarning
    }
    val danger by lazy {
        cls.alertDanger
    }

    val text by lazy {
        document.span {
            cls {
                m1
            }
        }.setTo(slots.text)
    }
    val close by lazy {
        document.span {
            cls {
                m1
                fa {
                    sm
                    times
                }
            }
        }.setTo(slots.close)
    }

    fun warning(txt: String) {
        warning
        close
        text %= txt
    }

    fun danger(txt: String) {
        danger
        close
        text %= txt
    }


}
class ToastHeader(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls {
            toastHeader
        }
    }


    private val slots = object {
        val icon = slot
        val text = slot
        val close = slot

    }

    val flex by lazy {
        cls {
            p1
            dFlex
            flexRow
            alignItemsCenter
        }
    }

    val text by lazy {
        flex
        document.div {
            cls {
                flexGrow1
            }
        }.setTo(slots.text)
    }

    val close by lazy {
        text
        document.button {
            attr["data-dismiss"] = "toast"
            cls {
                btn
                m1
                p0
            }
            span {
                cls {
                    fa {
                        sm
                        times
                    }
                }
            }
        }.setTo(slots.close)
    }

    val strong by lazy {
        text.strong {
            cls {
                m1
            }
        }
    }

    fun strongClose(label: String) {
        strong %= label
        close
    }

}

