package commonui.widget

import bootstrap.btnGroup
import bootstrap.m1
import bootstrap.p1
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

    val button get() = node.widget.insert.button
}

