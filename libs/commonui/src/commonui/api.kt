package commonui

import commonshr.InvokeWith
import commonui.widget.Slot
import commonui.widget.rx
import killable.HasKillSet

inline val HasKillSet.uiapi get() = unsafeCast<UiApi>()

interface UiApi: HasKillSet, InvokeWith {

    fun Slot.rx(fn: () -> Boolean) = rx(kills, fn)

}