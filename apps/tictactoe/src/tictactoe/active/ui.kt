package tictactoe.active

import bootstrap.*
import common.*
import commonshr.*
import commonui.HasKillsUix
import commonui.HasUix
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
        right.resetButton(this@ui, loggedIn)
    }.node,
    content = document.column {
        cls {
            p1
            flexGrow1
        }
        div {
            cls {
                m1
                flexGrow1
                flexCenter()
            }
            div {
                this %= "Waiting for Opponent..."
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

fun Playing.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
        title %= "Playing Online"
        right.resetButton(this@ui, loggedIn)
    }.node,
    content = document.column {
    }
)

fun Factory.resetButton(deps: HasKillsUix, loggedIn: LoggedIn) = button {
    m1p2
    fa.redoAlt
    secondary
    click(deps) {
        loggedIn.statusDoc.delete(loggedIn)
    }
}