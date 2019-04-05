package tictactoe.active

import bootstrap.*
import common.copyToClipboard
import commonshr.*
import commonui.*
import commonui.progress.*
import commonui.view.*
import commonui.widget.*
import domx.*
import fontawesome.copy
import kotlin.browser.document
import kotlin.browser.window

open class Waiting(
    parent: HasBackKillsRoutingTC
): ViewTC(parent), BackKillsUixApi, HasBack by parent {
    override val rawView = TopAndContent(
        topbar = factory.topbar {
            left.backButton
            title %= "Waiting Room"
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
}