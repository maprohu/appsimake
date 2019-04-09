package tictactoe.active

import bootstrap.*
import commonshr.*
import commonui.*
import commonui.progress.*
import commonui.view.*
import commonui.widget.*
import domx.*
import firebase.auth.uid
import firebase.firestore.inboxOf
import firebase.firestore.listEvents
import firebase.firestore.txTry
import fontawesome.copy
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.map
import tictactoe.board.*
import tictactoe.loggedin.LoggedInPath
import tictactoelib.GameStatus
import tictactoelib.Move
import tictactoelib.moves
import tictactoelib.tictactoeLib
import kotlin.browser.document
import kotlin.reflect.KMutableProperty

class OnlineBoardControl(
    val board: Board,
    gs: GS.Playing
): BoardControlBase(
    title = "Playing Online"
), LoggedInPath by board {

    val playerUids = listOf(
        loggedIn.uid,
        gs.opponent
    )

    val outgoing = tictactoeLib.app.inbox.doc(gs.opponent).public.moves

    class MovesItem(
        val seq: Int,
        var move: Move<*>? = null,
        var next: MovesItem? = null,
        var abandon: Boolean = false
    )

    inner class Moves {

        var head = MovesItem(1)

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
                if (moveSeq <= head.seq) {
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

        private fun ifOngoing(fn: () -> Unit) {
            if (gameState.now == GameState.Ongoing) {
                fn()
            }
        }

        private fun process() = ifOngoing {
            process(head) { head = it }
        }

        private fun process(item: MovesItem, setter: Assign<MovesItem>) {
            fun abandonOrElse(fn: () -> Unit) {
                if (item.abandon) {
                    states.gameState %= GameState.Abandoned
                } else {
                    fn()
                }
            }

            val m = item.move

            if (m == null) {
                abandonOrElse {}
            } else {
                process(m)

                ifOngoing {
                    abandonOrElse {
                        val next = item.following
                        setter(item.following)
                        process(next) { next.next = it }
                    }
                }
            }
        }

        private fun process(move: Move<*>) {
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
                    val playerIndex = playerUids.indexOf(move.player.now)
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
                        Move.seq.asc
                        limit(1)
                    }
                    .filterIsInstance<ListEvent.Add<FsDoc<Move<*>>>>()
                    .map { it.item.rxv.now }

                for (move in moves) {
                    moveProc.add(move)
                }
            }

            // TODO wait for all moves to be loaded

            launchReport {
                for (click in clicks) {
                    states.click(click) {
                        txTry {
                            val gameDoc = loggedIn.statusDoc.getOrFail()
                            val game = gameDoc.doc as GameStatus.Playing
                            require(
                                game.opponent.now == gs.opponent &&
                                        game.game.now == gs.game
                            ) { "Obsolete game." }
                            val newSeq = game.seq.now + 1
                            val move = Move.Placement().apply {
                                this.player %= uid
                                this.game %= gs.game
                                this.seq %= newSeq
                                this.x %= click.x
                                this.y %= click.y
                            }

                            loggedIn.statusDoc.set(
                                game.apply {
                                    this.seq %= newSeq
                                }
                            )

                            outgoing.randomDoc.set(move)
                            loggedIn.inboxMoves.randomDoc.set(move)
                        }
                    }
                }
            }
        }
    }
}
