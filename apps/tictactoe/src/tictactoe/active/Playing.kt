package tictactoe.active

import commonfb.KillsMessagingUixApi
import commonshr.*
import commonui.*
import commonui.widget.Topbar
import domx.remAssign
import firebase.auth.uid
import firebase.firestore.rollback
import firebase.firestore.txTry
import fontawesome.redoAlt
import fontawesome.times
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.map
import tictactoe.board.*
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus
import tictactoelib.Move

class OnlineBoardControl(
    val board: Board,
    val gs: GS.Playing,
    val goOffline: () -> Unit,
    val restart: () -> Unit
): BoardControlBase(), LoggedInPath by board, KillsMessagingUixApi, HasKillsUix by board {

    override val topbar: Topbar.() -> Unit = {
        with (board) {
            title %= "Playing Online"
            right.buttonGroup {
                m1
                button {
                    p2
                    secondary
                    icon.fa.redoAlt
                    click {
                        restart()
                    }
                }
                dropdownSplit {
                    secondary
                }
                menu {
                    right
                    item {
                        text %= "Stop Playing Online"
                        icon.fa.times
                        click {
                            goOffline()
                        }
                    }
                    messagingMenu
                }
            }
        }
    }

    val playerUids = listOf(
        loggedIn.uid,
        gs.opponent
    )


    class MovesItem(
        val seq: Int,
        var move: Move<*>? = null,
        var next: MovesItem? = null,
        var abandon: Boolean = false
    )

    inner class Moves {

        var head = MovesItem(GameStatus.Playing.FirstSeq)

        val MovesItem.following get() = next.let { n ->
            n ?: MovesItem(
                seq = seq + 1
            ).also {
                next = it
            }
        }


        fun add(move: Move<*>) {
            val moveSeq = move.seq.now
            if (move is Move.Leave) {
                var curr = head
                while (curr.seq < moveSeq) {
                    curr = curr.following
                }
                curr.abandon = true
                process()
            } else {
                if (moveSeq < head.seq) {
                    report("Sequence $moveSeq alread porcessed. Current: ${head.seq}")
                    states.gameState %= GameState.Corrupted
                } else {
                    var curr = head

                    while (curr.seq < moveSeq) {
                        curr = curr.following
                    }

                    if (curr.move != null) {
                        report("Duplicate sequence item: $moveSeq")
                        states.gameState %= GameState.Corrupted
                    } else {
                        curr.move = move
                        process()
                    }
                }
            }
        }

        val isOngoing get() = gameState.now == GameState.Ongoing

        private fun ifOngoing(fn: () -> Unit) {
            if (isOngoing) {
                fn()
            }
        }

        private fun checkAbandon() {
            if (head.abandon) {
                states.gameState %= GameState.Abandoned
            }
        }

        private fun process() {
            while (isOngoing && head.move != null) {
                process(head.move!!)
                checkAbandon()
                head = head.following
            }

            ifOngoing {
                checkAbandon()
            }
        }

        private fun process(move: Move<*>) {
//            globalStatus %= "Processing move: ${move.type.now}"

            when (move) {
                is Move.Start -> {
                    if (turnState.now != TurnState.Starting) {
                        report("Start should be the first move")
                        states.gameState %= GameState.Corrupted
                    } else {
                        val firstPlayer = players[playerUids.indexOf(move.firstPlayer.now)]
                        states.turnState %= TurnState.Playing(firstPlayer)
                    }
                }
                is Move.Placement -> {
                    val playerIndex = playerUids.indexOf(move.from.now)
                    val player = players[playerIndex]

                    if (
                        turnState.now != TurnState.Playing(player) &&
                        turnState.now != TurnState.Waiting(player)
                    ) {
                        report("Move from the wrong player.")
                        states.gameState %= GameState.Corrupted
                    } else {
                        states.take(
                            Coords(move.x.now, move.y.now),
                            player
                        )

                        states.turnState %= TurnState.Playing(
                            players[1-playerIndex]
                        )
                    }

                }
                else -> {}
            }
        }
    }

    val moveProc = Moves()

    var clicks = Channel<Coords>(capacity = Channel.UNLIMITED)

    override fun Coords.click() {
        clicks.offer(this)
    }

    init {
        with (board) {
            launchReport {
                val moves = loggedIn
                    .inboxMoves
                    .listEvents {
                        Move.game eq gs.game
                    }
                    .filterIsInstance<ListEvent.Add<FsDoc<Move<*>>>>()
                    .map { it.item.rxv.now }

                for (move in moves) {
//                    globalStatus %= "Received move: ${move.type.now}"
                    moveProc.add(move)
                }
            }

            // TODO wait for all moves to be loaded

            launchReport {
                for (click in clicks) {
                    states.click(click) {
                        txTry {
                            val game = loggedIn.statusDoc.getOrFail().doc

                            if (
                                game is GameStatus.Playing &&
                                game.opponent.now == gs.opponent &&
                                game.game.now == gs.game
                            ) {

                                val newSeq = moveProc.head.seq

                                if (game.seq.now >= newSeq) {
                                    rollback("move already made.")
                                }

                                val move = Move.Placement().apply {
                                    this.x %= click.x
                                    this.y %= click.y
                                }

                                loggedIn.statusDoc.txSet(
                                    game.apply {
                                        this.seq %= newSeq
                                    }
                                )

                                postMove(
                                    loggedIn,
                                    gs,
                                    newSeq,
                                    move
                                )
                            } else {
                                rollback("obsolete game.")
                            }
                        }
                    }
                }
            }
        }
    }

}
