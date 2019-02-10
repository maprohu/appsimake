package commonui.widget

import bootstrap.column
import bootstrap.flexGrow1
import commonshr.invoke
import domx.cls
import kotlin.browser.document

class Screen(sp: Parent): ScreenWrap(sp)  {
    override val node = document.column {
        cls.flexGrow1
    }

    inner class Slots {
        val top = slot
        val main = slot
        val bottom = slot
    }
    val slots = Slots()

    val main = slots.main.insert

    val topbar by lazy { slots.top.insert.topbar }

    inner class ToastsSlots {
        private val stack = slots.main.insert.stack {
            cls.flexGrow1
        }
        val content = stack.fill
        val toasts = stack.fill.toasts.visible()
    }
    val toastSlots by lazy {
        ToastsSlots()
    }



}

