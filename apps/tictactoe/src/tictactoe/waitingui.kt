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

fun PlayerActiveWaiting.waitingUI() {
    control.appCtx.root.newRoot {
        padding2()
        column {
            flexGrow1()
            flexCenter()
                span {
                    margin1()
                    innerText = "Waiting for opponent..."
                }
                btnButton {
                    margin1()
                    innerText = "Cancel"
                    clickEvent {
                        control.playerRef.set(
                            obj<Player> { active = false},
                            setOptionsMerge()
                        )
                    }
                }
        }
        div {
            flexFixedSize()
            flexCenter()
            row {
                border()
                padding2()
                alignItemsCenter()
                div {
                    paddingRight2()
                    innerText = window.location.href
                }
                btnButton {
                    btnSecondary()
                    innerText = "Copy"
                    clickEvent {
                        val t = document.textarea()
                        t.value = window.location.href
                        document.body!!.appendChild(t)
                        t.select()
                        document.execCommand("copy")
                        t.removeFromParent()
                    }
                }
            }
        }
    }
}

