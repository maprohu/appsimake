package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import fontawesome.*
import org.w3c.dom.*
import kotlin.browser.document

class Button(): ScreenWrap {
    override val node = document.button {
        cls {
            btn
        }
    }

    private val slots = object {
        val icon = slot
        val text = slot
    }

    val p2 by lazy {
        cls.p2
    }
    val m1 by lazy {
        cls.m1
    }
    val m1p2 by lazy {
        m1
        p2
    }
    val primary by lazy {
        cls.btnPrimary
    }
    val secondary by lazy {
        cls.btnSecondary
    }

    val icon by lazy {
        document.span.setTo(slots.icon)
    }

    val fa by lazy {
        icon.cls.fa {
            fw
        }
    }

    val text by lazy {
        document.span.setTo(slots.text)
    }

}

