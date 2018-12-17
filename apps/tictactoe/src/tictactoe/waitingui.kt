package tictactoe

import bootstrap.*
import common.obj
import common.removeFromParent
import commonui.screenLayout
import domx.*
import firebase.firestore.setOptionsMerge
import fontawesome.fa
import fontawesome.fas
import kotlin.browser.document
import kotlin.browser.window

fun PlayerActiveWaiting.waitingUI() {
    control.appCtx.root.newRoot {
        screenLayout {
            top {
                ticTacToe()
                leftButton {
                    innerText = "Cancel"
                    clickEvent {
                        control.playerRef.set(
                            obj<Player> { active = false},
                            setOptionsMerge()
                        )
                    }
                }
            }
            main {
                flexColumn()
                div {
                    padding2()
                    flex()
                    flexGrow1()
                    flexCenter()
                    span {
                        innerText = "Waiting for opponent..."
                    }
                }

                row {
                    padding1()
                    input {
                        margin1()
                        flexGrow1()
                        value = window.location.href
                        readOnly = true
                    }
                    btnButton {
                        btnSecondary()
                        margin1()
                        fas("copy")
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
}

