package music.boot

import commonshr.Exec
import commonshr.invoke
import commonui.widget.*


fun Boot.ui() = Factory().run {
    val boot = slots
    screen {
        boot.top = slots.top
        boot.player = slots.bottom
        boot.main = toastSlots.content
        boot.toasts = toastSlots.toasts.let { tsts ->
            { fn ->
                exec {
                    tsts.toast.apply(fn)
                }
            }
        }
    }
}.node


