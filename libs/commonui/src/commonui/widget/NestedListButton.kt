package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import styles.*
import kotlin.browser.document

class NestedListButton: ScreenWrap() {
    override val node = document.div {
        cls {
            listGroupItem
            positionRelative
            p0
        }
    }

    val anchor = node.a {
        cls {
            positionAbsolute
            leftRightTopBottom0
            listGroupItemAction
        }
        href = "#"
    }

    val glassPane = node.div {
        cls {
            flexGrow1
            positionRelative
            pointerEventsNone
            zIndex1
        }
    }

    val glassRow by lazy {
        glassPane.cls {
            row()
        }
    }

    val glassP1 by lazy {
        glassRow
        glassPane.cls {
            p1
        }
    }


    inner class Slots {
        val left = glassPane.slots
        val middle = glassPane.widget
        val right = glassPane.slots
    }

    val slots by lazy {
        glassRow
        Slots()
    }

    val middle by lazy {
        slots.middle.insert.wraps.div {
            cls.flexGrow1
        }
    }

    val text by lazy {
        glassP1
        middle {
            cls {
                m1
                alignSelfCenter
            }
        }.node
    }

    val Factory.solid get() = withElement { cls.pointerEventsAll }

    val left get() = slots.left.slot.insert.solid
    val right get() = slots.right.slot.insert.solid

}

