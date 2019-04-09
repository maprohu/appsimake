package tictactoe.loggedin

import bootstrap.*
import commonshr.*
import commonui.widget.*
import domx.*
import fontawesome.*
import tictactoelib.GameStatus
import kotlin.browser.document

fun LoggedIn.ui() = TopAndContent(
    topbar = factory.topbar {
        title %= "Tic Tac Toe"
        left.dropdown {
            bars
            menu {
                item {
                    text %= "Play Against Yourself"
                    icon.fa.user
                    click {
                        singlePlayer()
                    }
                }
                signOut {
                    signOut()
                }
            }
        }
    }.node,
    content = document.div {
        cls {
            flexGrow1
            flexCenter()
        }
        insert.button {
            primary
            text %= {
                gameStatus().let { gs ->
                    when (gs) {
                        is GameStatus.Online, is GameStatus.Waiting ->  "Enter Waiting Room"
                        is GameStatus.Playing -> "Show Ongoing Game"
                        else -> "Go Online"
                    }
                }
            }
            click {
                goOnline()
            }
        }
    }
)