package commonui.widget

import bootstrap.*
import commonshr.invoke
import domx.*
import styles.leftRightTopBottom0
import styles.pointerEventsNone
import kotlin.browser.document

class Stack(sp: Parent): ScreenWrap(sp) {
    override val node = document.div {
        cls.positionRelative
    }

    private var zIndex = 0

    val layer get(): Factory {
        val idx = zIndex++.toString()
        return slot.insert.withElement {
            style.zIndex = idx
        }
    }

    val fill get() = layer.withElement {
        cls {
            positionAbsolute
            leftRightTopBottom0
        }
    }

}

