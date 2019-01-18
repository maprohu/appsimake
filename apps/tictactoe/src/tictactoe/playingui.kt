package tictactoe

import bootstrap.*
import common.obj
import commonui.RootPanel
import commonui.faButton
import commonui.screenLayout
import domx.*
import fontawesome.*
import killable.Killables
import tictactoelib.Player

class PlayingUI(
    playerCtx: PlayerCtx
) {
    val layout = playerCtx.appCtx.root.newRoot().screenLayout(Killables()) {
        top {
            left {
                cls {
                    m1
                    dropdown
                }
                faButton(Fa.chevronLeft) {
                    attr["data-toggle"] = "dropdown"
                }
                div {
                    cls.dropdownMenu
                    dropdownItemAnchor {
                        innerText = "Back to Waiting Room"
                        clickEvent {
                            playerCtx.playerRef
                                .set(
                                    Player().apply {
                                        active.cv = true
                                        game.cv = null
                                    }.props.write()
                                )
                        }
                    }
                    dropdownItemAnchor {
                        innerText = "Stop Playing"
                        clickEvent {
                            playerCtx.playerRef
                                .set(
                                    Player().apply {
                                        active.cv = false
                                        game.cv = null
                                    }.props.write()
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
        span {
            cls {
                spinnerBorder
                spinnerBorderSm
            }
        }
    }

    val root = RootPanel(layout.main)
}

fun PlayerCtx.playingUI() = PlayingUI(this)
