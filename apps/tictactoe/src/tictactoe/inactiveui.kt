package tictactoe

import bootstrap.*
import common.obj
import common.removeFromParent
import domx.clickEvent
import domx.div
import domx.span
import domx.textarea
import firebase.firestore.setOptionsMerge
import kotlin.browser.document
import kotlin.browser.window

fun PlayerInactive.inactiveUI() {
    control.appCtx.root.newRoot {
        flexCenter()
        btnButton {
            innerText = "Enter"
            clickEvent {
                control.playerRef.set(
                    obj<Player> { active = true },
                    setOptionsMerge()
                )
            }
        }
    }
}

