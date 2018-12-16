package tictactoe

import bootstrap.*
import common.obj
import common.removeFromParent
import domx.*
import firebase.firestore.setOptionsMerge
import kotlin.browser.document
import kotlin.browser.window

fun PlayerInactive.inactiveUI() {
    control.appCtx.root.newRoot {
        flexCenter()
        h1 {
            margin1()
            innerText = "Tic Tac Toe"
        }
        btnButton {
            margin1()
            innerText = "Enter Waiting Room"
            clickEvent {
                control.playerRef.set(
                    obj<Player> { active = true },
                    setOptionsMerge()
                )
            }
        }
    }
}

