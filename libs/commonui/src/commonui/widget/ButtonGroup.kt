package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import kotlin.browser.document

class ButtonGroup: ScreenWrap() {
    override val node = document.div {
        cls {
            btnGroup
        }
    }

    val m1 by lazy {
        cls.m1
    }

    inner class Slots {
        val buttons = node.slots
        val split = slot
        val menu = slot
    }
    val slots = Slots()

    val button get() = slots.buttons.slot.insert.button

    val dropdownSplit by lazy {
        slots.split.insert.button {
            node {
                dataToggleDropdown()
                dataReferenceParent()
            }
            cls {
                dropdownToggle
                dropdownToggleSplit
            }
        }
    }

    val menu by lazy { slots.menu.insert.dropdownMenu }
}

