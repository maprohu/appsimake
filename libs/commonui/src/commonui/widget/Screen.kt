package commonui.widget

import bootstrap.column
import bootstrap.flexGrow1
import commonshr.invoke
import domx.cls
import kotlin.browser.document

class Screen(): ScreenWrap()  {
    override val node = document.column {
        cls.flexGrow1
    }

    inner class Slots {
        val top = hole
        val main = hole
        val bottom = hole
    }
    val slots = Slots()

    val main = slots.main

    val topbar by lazy { slots.top.insert.topbar }

    inner class ToastsSlots {
        private val stack = slots.main.insert.stack {
            cls.flexGrow1
        }

        val content = stack.fill
        val toasts = stack.fill.insert.toasts
    }
    val toastSlots by lazy {
        ToastsSlots()
    }



}

