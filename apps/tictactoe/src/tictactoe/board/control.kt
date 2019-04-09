package tictactoe.board

import common.Emitter
import commonshr.EmitterFn
import commonshr.fn
import commonshr.report
import killable.HasNoKill
import rx.RxIface
import rx.Var
import rx.rx

interface BoardTurns {
    val turnState: RxIface<TurnState>
    val gameState: RxIface<GameState>
    val thisPlayer: RxIface<Player>
    val highlights: EmitterFn<Highlight>
    fun ourTurn() = gameState() == GameState.Ongoing && turnState() == TurnState.Playing(thisPlayer())
}
interface BoardControl: BoardTurns {
    val title: String
    val dimensions: Dimensions
    val Coords.state: RxIface<FieldState>
    fun Coords.click()
}


class BoardState(
    val dimensions: Dimensions,
    thisPlayer: Player,
    val winBy: Int
): BoardTurns {
    val fields = mutableMapOf<Coords, Var<FieldState>>().also { f ->
        dimensions.validCoords.forEach { c -> f[c] = Var<FieldState>(FieldState.Free) }
    }

    val highlightsEmitter = Emitter<Highlight>()
    override val highlights = highlightsEmitter.fn
    override val turnState = Var<TurnState>(TurnState.Starting)
    override val gameState = Var<GameState>(GameState.Ongoing)
    override val thisPlayer = Var(thisPlayer)

    val ourTurnRx = rx(HasNoKill) { ourTurn() }

    fun state(coords: Coords) = fields.getValue(coords)
    inline fun click(coords: Coords, fn: () -> Unit) {
        if (ourTurnRx.now && state(coords).now == FieldState.Free) {
            turnState %= TurnState.Waiting(thisPlayer.now)
            fn()
        }
    }

    val Coords.withinBoard
        get() = x >= 0 && y >= 0 && x < dimensions.width && y < dimensions.height

    val hasFree = rx(HasNoKill) {
        fields.values.any { it() == FieldState.Free }
    }

    fun Coords.checkGameOver() : Boolean {
        val winner = state(this).now

        if (winner == FieldState.Free) return false

        fun Dir.reach() =
            listOf(this@checkGameOver) +
                    sequenceExcluding(this@checkGameOver)
                        .takeWhile { c ->
                            c.withinBoard && state(c).now == winner
                        }
                        .toList()

        val hs = dirs.mapNotNull { d ->
            val s1 = d.reach()
            val s2 = d.opposite().reach()

            if (s1.size + s2.size - 1 >= winBy) {
                Highlight(s1.last(), s2.last())
            } else {
                null
            }
        }

        hs.forEach { highlightsEmitter.emit(it) }

        return hs.isNotEmpty()
    }

    fun take(coords: Coords, player: Player) {
        val st = state(coords)

        if (st.now != FieldState.Free) {
            report("Field already taken: $coords")
            gameState %= GameState.Corrupted
        } else {
            st %= FieldState.Taken(player)

            if (coords.checkGameOver()) {
                gameState %= GameState.GameOver(player)
            } else if (!hasFree.now) {
                gameState %= GameState.Draw
            }
        }
    }
}

abstract class BoardTurnsDelegate(
    val states: BoardState
): BoardTurns by states

abstract class BoardControlBase(
    override val title: String,
    thisPlayerIndex: Int = 0,
    val players: List<Player> = standardMarks.mapIndexed { index, s ->  PlayerImpl(index, s) } ,
    override val dimensions: Dimensions = Dimensions(3, 3),
    winBy: Int = 3
): BoardTurnsDelegate(BoardState(dimensions, players[thisPlayerIndex], winBy)), BoardControl {
    val numPlayers = players.size

    override val Coords.state: RxIface<FieldState> get() = states.state(this)
}

class SinglePlayerControl: BoardControlBase("Single Player", 0) {
    override fun Coords.click() = states.click(this) {
        with (states) {
            take(this@click, thisPlayer.now)
            if (gameState.now == GameState.Ongoing) {
                thisPlayer.transform { players[(it.index + 1) % numPlayers] }
                turnState %= TurnState.Playing(thisPlayer.now)
            }
        }
    }

    init {
        states.turnState %= TurnState.Playing(players[0])
    }
}


