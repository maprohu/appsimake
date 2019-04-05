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

interface PlayingPath: ActivePath {
    val playing: Playing
}

class Playing(
    parent: Active
): ViewTC(parent), PlayingPath, ActivePath by parent, BackKillsUixApi, HasBack by parent {
    override val playing = this
    override val rawView = ui()
}