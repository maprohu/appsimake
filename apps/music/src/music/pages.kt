package music

import bootstrap.*
import commonlib.doc
import commonui.*
import domx.button
import domx.cls
import domx.div
import domx.invoke
import kotlin.browser.document

fun boot() {
    val loop = runLoop()
    val panel = runPanel()

    playerbar(
        loop.inbox,
        loop.proc.toSetProcOrElse(),
        panel
    )
}


fun playerbar(
    inbox: Inbox,
    proc: SetProcOrElse,
    panel: SetPanel
) {

    val mainWidget = widget()
    val playerWidget = widget()

    panel %= document.column {
        cls {
            flexGrow1
        }
        widget(mainWidget)
        widget(playerWidget)
        div {
            cls {
                flexFixedSize()
                flexCenter()
                p1
                borderTop
            }
            button {
                innerText = "player"
            }
        }

    }

    mainWidget %= document.div {
        cls.flexGrow1
    }

    val ps = proc.assignProcSet()
    val mainProc = ps.addProcVar()
    val playerProc = ps.addProcVar()




}

//fun userPending(): PageOut {
//    return PageOut(
//        document.hourglass,
//
//
//    )
//
//}
//
//fun signIn(): PageOut {
//
//}

fun home() {

}

fun database() {

}

fun import() {

}

fun songList() {

}





