package commonui

import commonshr.Action
import commonshr.reportd
import killable.NoKill
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import rx.Var


val globalStatus = Var("Please wait...").apply {
    forEach(NoKill) { msg ->
        if (msg.isNotBlank()) console.log(msg)
    }
}

fun launchGlobal(action: Action) {
    GlobalScope.launch {
        try {
            action()
        } catch (e: CancellationException) {
            throw e
        } catch (e: dynamic) {
            globalStatus %= "Error: $e"
            reportd(e)
            throw e
        }
    }
}