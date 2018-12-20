package tictactoe

import bootstrap.*
import common.onResize
import common.removeFromParent
import commonui.shouldRequest
import domx.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLDivElement
import org.w3c.notifications.*
import rx.Var

fun PlayingCtx.notificationUI(f: HTMLDivElement) {
    f.apply {
        GlobalScope.launch {
            if (Notification.shouldRequest()) {
                column {
                    val askDiv = this
                    margin1()
                    flexFixedSize()
                    btnButton {
                        val askButton = this
                        btnPrimary()
                        innerText = "Turn on Game Notifications"
                        val canClick = Var(true)
                        rxEnabled(canClick)
                        clickEvent {
                            if (canClick.now) {
                                canClick.now = false
                                GlobalScope.launch {

                                    try {
                                        loggedInCtx.setupMessaging()
                                        askDiv.removeFromParent()
                                        onResize.fire()
                                    } catch (e: dynamic) {
                                        askButton.removeFromParent()
                                        askDiv.div {
                                            padding2()
                                            alertWarning()
                                            innerText = e.message as? String ?: "Permission for sending notifications has been denied."
                                            button {
                                                classes += "close"
                                                innerHTML = "&times;"
                                                clickEvent {
                                                    askDiv.removeFromParent()
                                                    onResize.fire()
                                                }
                                            }
                                        }
                                        onResize.fire()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
}