package commonui

import commonshr.*
import commonui.widget.*
import domx.rxEnabled
import killable.HasKillSet
import org.w3c.dom.Node

inline val HasKillSet.uiapi : UiKillsApi get() = object : HasKillSet by this, UiKillsApi {}

interface UiKillsApi: HasKillSet, InvokeWith {

    fun Slot.visibility(fn: () -> Boolean) = visibility(kills, fn)

    fun Button.enabled(fn: () -> Boolean) = node.rxEnabled(kills, fn)

    operator fun Slot.remAssign(fn: () -> Node?) {
        rx { fn() }.forEach { this@remAssign %= it }
    }

}

interface UiCoroutinesApi: NodeListApi

interface UiApi: UiKillsApi, UiCoroutinesApi