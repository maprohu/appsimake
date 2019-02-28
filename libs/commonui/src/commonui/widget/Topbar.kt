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
            navTabs
            flexFixedSize()
            bgLight
        }
    }

//    val alignItemsCenter by lazy {
//        node.cls {
//            alignItemsCenter
//        }
//    }


    inner class Slots {
        val left = slot
        val middle = slot
        val tabs = slot
        val right = node.slots
    }
    val slots = Slots()

    val left = slots.left.insert

    val middle = document.div {
        cls.flexGrow1
    }.setTo(slots.middle)

    val middleFlexRow by lazy {
        middle.cls {
            row()
        }
    }

    val title by lazy {
        middleFlexRow
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
            row()
            mx1
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

