package tictactoe.board

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import kotlin.browser.document

fun Board.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= control.title
        left.backButton
    }.node,
    content = document.column {
        cls {
            flexGrow1
            p1
        }

        appendChild(boardNode())
    }
)


