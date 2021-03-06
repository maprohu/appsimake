package tictactoe.board

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.redoAlt
import kotlin.browser.document

fun Board.ui() = TopAndContent(
    topbar = factory.topbar {
        left.backButton
        control.topbar(this)
    }.node,
    content = document.column {
        cls {
            flexGrow1
        }

        boardNode(this@ui)
    }
)


