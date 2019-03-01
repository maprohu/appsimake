package commonui.widget

import bootstrap.*
import commonshr.Action
import commonshr.InvokeApply
import commonshr.invoke
import commonshr.remAssign
import domx.*
import fontawesome.chevronLeft
import fontawesome.fa
import fontawesome.fw
import killable.HasKillSet
import killable.HasNoKill
import killable.NoKill
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import rx.Rx
import rx.Var
import rx.rxClass
import kotlin.browser.document

class Topbar(): ScreenWrap() {
    override val node = document.row {
        cls {
//            navTabs
            flexFixedSize()
            bgLight
        }
    }

    private val beforeSlot = slot
    private val tabsSlot = slot
    private val afterSlot = slot

    private val before = document.row {
        cls {
            flexGrow1
            borderBottom
        }
    }.setTo(beforeSlot)

    private val after by lazy {
        node.row {
            cls {
                flexFixedSize()
                borderBottom
            }
        }
    }

    inner class Slots {
        val left = before.slots
        val middle = before.widget
        val tabs = slot
        val right = after.slotholes
    }

    val slots = Slots()

    val left by lazy { slots.left.slot.insert }

    val middle = document.row {
        cls.flexGrow1
    }.setTo(slots.middle)


    val title by lazy {
        middle.h5 {
            cls {
                alignSelfCenter
                m1
            }
        }
    }


    val tabs by lazy { Tabs().setTo(slots.tabs) }

    val right get() = slots.right.slot.insert

}

class Tabs: ScreenWrap() {
    override val node = document.div {
        cls {
            navTabs
            row()
            px1
        }
    }

    val active = Var<Tab?>(null)
    val tab get() = Tab(this).setTo(slot)
}


class Tab(val owner: Tabs): ScreenWrap(), HasKillSet by HasNoKill {

    val isActive = rx { owner.active() == this@Tab }

    override val node = document.div {
        cls {
            mt1
            navItem
            dFlex
        }
    }

    val anchor = node.a {
        cls {
            navLink
            px2
            rxClass(active) { isActive() }
        }
        href = "#"
    }

    val icon = Icon(anchor).apply { fw }

    fun activate() {
        owner.active %= this
    }

    fun HasUIX.click(action: Action) = anchor.click(action)

    val HasUIX.clickActivate get() = click { activate() }

}

