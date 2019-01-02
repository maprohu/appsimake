package tictactoe

import bootstrap.*
import common.obj
import commonui.RootPanel
import commonui.screenLayout
import domx.clickEvent
import domx.div
import fontawesome.chevronLeft
import fontawesome.spinner

class PlayingUI(
    playerCtx: PlayerCtx
) {
    val layout = playerCtx.appCtx.root.newRoot().screenLayout {
        top {
            left.dropdown {
                element {
                    margin1()
                }

                button {
                    chevronLeft()
                }

                menu {
                    dropdownItemAnchor {
                        innerText = "Back to Waiting Room"
                        clickEvent {
                            playerCtx.playerRef
                                .set(
                                    obj<Player> {
                                        active = true
                                        game = null
                                    }
                                )
                        }
                    }
                    dropdownItemAnchor {
                        innerText = "Stop Playing"
                        clickEvent {
                            playerCtx.playerRef
                                .set(
                                    obj<Player> {
                                        active = false
                                        game = null
                                    }
                                )
                        }
                    }
                }
            }

        }
    }

    val spinner = layout.top.right {
        flexRow()
    }.div {
        margin1()
        flexCenter()
        spinner()
    }

    val root = RootPanel(layout.main)
}

fun PlayerCtx.playingUI() = PlayingUI(this)
