package common

import commonshr.Trigger
import commonshr.once
import org.w3c.dom.WindowOrWorkerGlobalScope

fun WindowOrWorkerGlobalScope.onInterval(timeout: Int, fn: () -> Unit): Trigger {
    val handle = setInterval(fn, timeout)
    return {
        clearInterval(handle)
    }.once()
}

