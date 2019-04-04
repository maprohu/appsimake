package common

import org.w3c.dom.Window
import kotlin.browser.window

val onResize by lazy {
    val listeners = Listeners()

    window.onresize = {
        listeners.fire()
    }

    listeners
}

fun Window.resizeEvent(fn: () -> Unit) : () -> Unit {
    window.setTimeout(fn, 0)
    fn()
    return onResize.add(fn)
}
