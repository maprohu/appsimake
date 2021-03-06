package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import fontawesome.*
import kotlin.browser.document

class Button(): ScreenWrap() {
    override val node = document.button {
        cls {
            btn
            dFlex
            flexRow
        }
    }

    inner class Slots {
        val icon = slot
        val separator = slot
        val text = slot
    }
    val slots = Slots()

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
    val outlineSecondary by lazy {
        cls.btnOutlineSecondary
    }
    val secondary by lazy {
        cls.btnSecondary
    }
    val warning by lazy {
        cls.btnWarning
    }
    val danger by lazy {
        cls.btnDanger
    }
    val success by lazy {
        cls.btnSuccess
    }

    val submit: Unit get() { node.type = "submit" }

    val icon by lazy {
        slots.icon.insert.icon {
            fw
        }
//        document.span.setTo(slots.icon)
    }

    val fa by lazy {
        icon.fa
//        icon.cls.fa {
//            fw
//        }
    }

    val text by lazy {
        document.div {
        }.setTo(slots.text)
    }

    val back by lazy {
        m1p2
        fa.chevronLeft
        secondary
    }

    fun enabled(deps: HasKills, fn: KillsApi.() -> Boolean) = node.rxEnabled(deps, fn)

    val separator by lazy {
        document.div {
        }.setTo(slots.separator)
    }
    val iconAndText by lazy {
        cls.alignItemsCenter
        separator {
            cls.ml1
        }
    }

}

