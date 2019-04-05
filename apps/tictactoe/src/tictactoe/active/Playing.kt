package tictactoe.active

import bootstrap.*
import commonshr.*
import commonui.*
import commonui.progress.*
import commonui.view.*
import commonui.widget.*
import domx.*
import firebase.firestore.inboxOf
import fontawesome.copy
import tictactoelib.moves
import tictactoelib.tictactoeLib
import kotlin.browser.document

interface PlayingPath: ActivePath {
    val playing: Playing
}

class Playing(
    parent: Active,
    val opponent: String
): ViewTC(parent), PlayingPath, ActivePath by parent, BackKillsUixApi, HasBack by parent {
    override val playing = this


    override val rawView = ui()
}