package commonfb.loginbase

import commonshr.Exec
import commonshr.invoke
import commonui.widget.*


fun LoginBase.ui() = Factory().run {
    val boot = slots
    screen {
        boot.top = slots.top
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


