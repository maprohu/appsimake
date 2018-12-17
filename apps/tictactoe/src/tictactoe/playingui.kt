package tictactoe

import bootstrap.*
import common.obj
import commonui.RootPanel
import commonui.screenLayout
import domx.clickEvent
import fontawesome.chevronLeft

class PlayingUI(playerCtx: PlayerCtx) {
    val layout = playerCtx.appCtx.root.newRoot().screenLayout {
        top {
            left.dropdown {
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

    val root = RootPanel(layout.main)
}

fun PlayerCtx.playingUI() = PlayingUI(this)
