package tictactoe

import bootstrap.*
import common.obj
import commonui.RootPanel
import domx.clickEvent

fun PlayerCtx.playingUI(): RootPanel {
    lateinit var root : RootPanel
    appCtx.root.newRoot {
        row {
            flexFixedSize()
            bgLight()
            borderBottom()
            padding1()
            btnButton {
                btnSecondary()
                margin1()
                innerText = "Back to Waiting Room"
                clickEvent {
                    playerRef
                        .set(
                            obj<Player> {
                                active = true
                                game = null
                            }
                        )
                }
            }
            btnButton {
                btnSecondary()
                margin1()
                innerText = "Stop Playing"
                clickEvent {
                    playerRef
                        .set(
                            obj<Player> {
                                active = false
                                game = null
                            }
                        )
                }
            }
        }
        root = RootPanel(column { flexGrow1() })
    }
    return root
}