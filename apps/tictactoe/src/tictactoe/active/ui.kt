package tictactoe.active

import bootstrap.*
import common.*
import commonfb.isFcmSupported
import commonshr.*
import commonui.HasKillsUix
import commonui.HasUix
import commonui.NotificationState
import commonui.notificationState
import commonui.widget.*
import domx.*
import firebase.firestore.delete
import fontawesome.*
import tictactoe.loggedin.LoggedIn
import kotlin.browser.document
import kotlin.browser.window

fun Waiting.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
        title %= "Waiting Room"
        right.buttonGroup {
            m1
            button {
                p2
                fa.times
                secondary
                click {
                    goOffline()
                }
            }
            dropdownSplit {
                visible {
                    messaging.hasVisibleMenuItems()
                }
                secondary
            }
            menu {
                visible {
                    messaging.hasVisibleMenuItems()
                }
                right
                messagingMenu
            }
        }
    }.node,
    content = document.column {
        cls {
            p1
            flexGrow1
        }
        div {
            cls {
                flexGrow1
                flexCenter()
            }
            column {
                cls {
                    alignItemsCenter
                }
                div {
                    cls.m1
                    this %= "Waiting for Opponent..."
                }
                messagingButton
            }

        }
        row {
            cls {
                flexFixedSize()
            }
            val url = input {
                cls {
                    m1
                    px1
                    flexGrow1
                }
                readOnly = true
                value = window.location.href
            }
            insert.button {
                cls {
                    m1
                    flexFixedSize()
                }
                secondary
                fa.copy
                click {
                    url.value.copyToClipboard()
                }
            }
        }
    }
)

//fun Playing.ui() = TopAndContent(
//    topbar = factory.topbar {
//        left.backButton
//        title %= "Playing Online"
//        right.resetButton(this@ui, active)
//    }.node,
//    content = document.column {}
//)
