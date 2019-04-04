package tictactoe.board

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.redoAlt
import kotlin.browser.document

fun Board.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= control.title
        left.backButton
        right.button {
            m1p2
            fa.redoAlt
            warning
            click {
                restart()
            }
        }
    }.node,
    content = document.column {
        cls {
            flexGrow1
        }

        boardNode(this@ui)
    }
)


