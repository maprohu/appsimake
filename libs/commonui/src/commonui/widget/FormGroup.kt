package commonui.widget

import bootstrap.*
import common.Emitter
import commonshr.*
import domx.*
import org.w3c.dom.Element
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

    private val inputEmitter = Emitter<Element>()

    val label by lazy {
        document.label {
            cls.m1
            inputEmitter.add { e ->
                htmlFor = e.ref
            }
        }.setTo(slots.label)
    }

    val input by lazy {
        slots.input.insert.input.apply {
            cls.m1
            inputEmitter.emit(node)
        }
    }

}
