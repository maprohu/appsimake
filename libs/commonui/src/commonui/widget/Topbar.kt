package commonui.widget

import bootstrap.*
import commonshr.InvokeApply
import commonshr.invoke
import domx.*
import fontawesome.chevronLeft
import fontawesome.fa
import fontawesome.fw
import org.w3c.dom.Element
import org.w3c.dom.Node
import kotlin.browser.document

class Topbar(): ScreenWrap {
    override val node = document.row {
        cls {
            navTabs
            flexFixedSize()
            bgLight
        }
    }

    val alignItemsCenter by lazy {
        node.cls {
            alignItemsCenter
        }
    }


    private val slots = object {
        val left = slot
        val middle = slot
        val right = slot
    }

    val left = slots.left.insert

    val middle = document.div {
        cls.flexGrow1
    }.setTo(slots.middle)

    val title by lazy {
        alignItemsCenter
        middle.h5 {
            cls {
                m1
            }
        }
    }

    val right = slots.right.insert

//    fun backTitle(msg: Any, label: String) {
//        left.button(msg) {
//            m1p2
//            secondary
//            fa.chevronLeft
//        }
//        middle {
//            h5 {
//                cls.m1
//                innerText = label
//            }
//        }
//    }
}

