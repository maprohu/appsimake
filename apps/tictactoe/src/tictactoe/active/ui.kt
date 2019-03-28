package tictactoe.active

import commonshr.*
import commonui.widget.*
import domx.*

fun Active.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Active Room"
        left.backButton
    }.node,
    content = null
)