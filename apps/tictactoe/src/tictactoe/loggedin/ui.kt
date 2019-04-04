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
                        null -> "Go Online"
                        is GameStatus.None, is GameStatus.InGame.Waiting ->  "Enter Waiting Room"
                        is GameStatus.InGame.Playing -> "Show Ongoing Game"
                    }
                }
            }
            click {
                goOnline()
            }
        }
    }
)