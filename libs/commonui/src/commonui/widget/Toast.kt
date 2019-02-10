package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import fontawesome.*
import org.w3c.dom.*
import styles.pointerEventsNone
import kotlin.browser.document

class Toasts(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls {
            dFlex
            flexRow
            justifyContentEnd
            alignItemsStart
            pointerEventsNone
        }
    }

    private val toastsColumn = node.div {
        cls {
            dFlex
            flexColumn
        }
    }

    private fun callToast(node: Node) {
        js("\$(node).toast()")
    }

    val toast get() = Toast(toastsColumn.append.child).visible().apply {
        callToast(node)
        callToasts()
    }

}
private fun callToasts() {
    js("\$('.toast').toast('show')").unsafeCast<Unit>()
}

private val initToasts by lazy {
    callToasts()
}


class Toast(sp: Parent): ScreenWrap(sp) {
    init { initToasts }
    override val node = document.div {
        cls.toast
    }

    private val slots = object {
        val header = slot
        val body = slot
    }

    val header by lazy {
        ToastHeader(slots.header.child).visible()
    }
    val body by lazy {
        document.div {
            cls.toastBody
        }.setTo(slots.body)
    }
}
class ToastHeader(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls.toastHeader
    }

}

