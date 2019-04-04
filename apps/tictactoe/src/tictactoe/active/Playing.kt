package tictactoe.active

import bootstrap.*
import commonshr.*
import commonui.*
import commonui.progress.*
import commonui.view.*
import commonui.widget.*
import domx.*
import fontawesome.copy
import kotlin.browser.document

open class Playing(
    parent: HasBackKillsRoutingTC
): ViewTC(parent), BackKillsUixApi, HasBack by parent {
    override val rawView = TopAndContent(
        topbar = factory.topbar {
            left.backButton
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
                input {
                    cls {
                        m1
                        flexGrow1
                    }
                    readOnly = true
                }
                insert.button {
                    cls {
                        m1
                        flexFixedSize()
                    }
                    secondary
                    fa.copy
                }
            }


        }
    )
}