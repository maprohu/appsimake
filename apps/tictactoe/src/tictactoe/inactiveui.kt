package tictactoe

import bootstrap.*
import common.obj
import commonui.screenLayout
import domx.*
import firebase.firestore.setOptionsMerge
import fontawesome.fas

fun PlayerInactive.inactiveUI() {
    control.appCtx.root.newRoot {
        screenLayout {

            top {
                ticTacToe()
                leftButton {
                    innerText = "Sign Out"
                    clickEvent {
                        control.fbCtx.signOut()
                    }
                }
            }

            main {
                flexCenter()
                btnButton {
                    btnPrimary()
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
    }
}

