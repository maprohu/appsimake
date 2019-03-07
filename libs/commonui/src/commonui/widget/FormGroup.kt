package commonui.widget

import bootstrap.*
import common.Emitter
import commonshr.*
import domx.*
import killable.NoKill
import org.w3c.dom.Element
import rx.Var
import kotlin.browser.document

class FormGroup: ScreenWrap() {
    override val node = document.div {
        cls {
            formGroup
            column()
        }
    }

    inner class Slots {
        val label = slot
        val input = slot
    }
    val slots = Slots()

    private val inputEmitter = Var<Element?>(null)

    val label by lazy {
        document.label {
            cls.m1
            inputEmitter.forEach(NoKill) {
                it?.let { e -> htmlFor = e.ref }
            }
        }.setTo(slots.label)
    }

    val input by lazy {
        slots.input.insert.input.apply {
            cls.m1
            inputEmitter %= node
        }
    }
    val textArea by lazy {
        slots.input.insert.textArea.apply {
            cls.m1
            inputEmitter %= node
        }
    }
    val select by lazy {
        slots.input.insert.select.apply {
            cls.m1
            inputEmitter %= node
        }
    }

}
