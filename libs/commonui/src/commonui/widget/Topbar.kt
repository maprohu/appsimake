package commonui.widget

import bootstrap.*
import common.Listeners
import commonshr.Action
import commonshr.invoke
import domx.*
import commonshr.KillsApi
import commonui.HasKillsUix
import commonui.HasUix
import killable.HasNoKill
import killable.NoKill
import rx.Var
import rx.rx
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

    val active = Var<Tab?>(null).apply {
        forEach(NoKill) { it?.let { t -> t.onActivate.fire() } }
    }
    val tab get() = Tab(this).setTo(slot)
}


class Tab(val owner: Tabs): ScreenWrap() {

    val isActive = rx(HasNoKill) { owner.active() == this@Tab }
    val onActivate = Listeners()

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
            rxClass(HasNoKill, active) { isActive() }
        }
        href = "#"
    }

    val icon = anchor.insert.icon { fw }

    fun activate() {
        owner.active %= this
    }

    fun toggle() {
        owner.active %= if (owner.active.now == this) null else this
    }

    fun click(deps: HasKillsUix, action: Action) = anchor.click(deps, action)


}

fun Tab.clickActivate(deps: HasKillsUix) = click(deps) { activate() }
fun Tab.clickToggle(deps: HasKillsUix) = click(deps) { toggle() }



