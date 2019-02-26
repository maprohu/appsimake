package commonui

import killable.NoKill
import rx.Var


val globalStatus = Var("Please wait...").apply {
    forEach(NoKill) { msg ->
        if (msg.isNotBlank()) console.log(msg)
    }
}