package commonui.widget

import bootstrap.inputGroup
import bootstrap.inputGroupAppend
import commonshr.*
import domx.*
import org.w3c.dom.HTMLElement
import styles.widthAuto
import kotlin.browser.document

class InputGroup: ScreenWrap() {

    override val node = document.div {
        cls {
            inputGroup
            widthAuto
        }
    }

    inner class Slots {
        val prepend = node.slots
        val input = slot
        val append = node.slots
        val submit = slot
    }
    val slots = Slots()

    val input = slots.input.insert.input

    val append get() = slots.append.slot.insert.wraps.div {
        cls.inputGroupAppend
    }





}