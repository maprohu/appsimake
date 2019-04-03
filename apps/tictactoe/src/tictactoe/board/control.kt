package tictactoe.board

import common.Emitter
import commonshr.EmitterFn
import commonshr.KillsApi
import commonshr.fn
import commonui.KillsUixApi
import killable.HasNoKill
import killable.NoKill
import rx.RxIface
import rx.Var
import rx.rx

//class BoardControl(board: Board): KillsUixApi by board {
//
//    val fields = mutableMapOf<Coords, Var<FieldState>>()
//    fun state(coords: Coords) = fields.getOrPut(coords) { Var(FieldState.Free) }
//    fun state(x: Int, y: Int) = state(Coords(x, y))
//
//    val ourMark = Var(Mark.X)
//    val turn = Var(Turn.Check)
//    val ourTurn = rx { turn() == Turn.Here }
//
//}

interface BoardTurns {
    val turnState: RxIface<TurnState>
    val thisPlayer: RxIface<Player>
    fun ourTurn() = turnState() == TurnState.Playing(thisPlayer())
}
interface BoardControl: BoardTurns {
    val title: String
    val width: Int
    val height: Int
    val Coords.state: RxIface<FieldState>
    val highlights: EmitterFn<Highlight>
    fun Coords.click()
    fun mark(player: Player): Mark

}

class BoardState(
    val control: BoardControl
): BoardTurns {
    val fields = mutableMapOf<Coords, Var<FieldState>>()
    val highlights = Emitter<Highlight>()
    override val turnState = Var<TurnState>(TurnState.Waiting)
    override val thisPlayer = Var(0)
    val ourTurnRx = rx(HasNoKill) { ourTurn() }

    fun state(coords: Coords) = fields.getValue(coords)
    fun click(coords: Coords) {
        state(coords) %= FieldState.Taken(thisPlayer.now)
    }

    init {
        validCoords(control.width, control.height).forEach { c -> fields[c] = Var<FieldState>(FieldState.Free) }
    }
}

class SinglePlayerControl(
    override val width: Int = 3,
    override val height: Int = 3,
    val winBy: Int = 3,
    val marks: List<Mark> = standardMarks
): BoardControl {
    val numPlayers = marks.size
    override val title = "Single Player"
    val states = BoardState(this)

    override val Coords.state: RxIface<FieldState> get() = states.state(this)
    override val highlights = states.highlights.fn
    override val turnState: RxIface<TurnState> = states.turnState

    override val thisPlayer: RxIface<Player> = states.thisPlayer

    override fun Coords.click() = with(states) {
        if (ourTurnRx.now) {
            click(this@click)
            thisPlayer.transform { (it + 1) % numPlayers }
            turnState %= TurnState.Playing(thisPlayer.now)
        }
    }

    override fun mark(player: Player) = marks[player.unsafeCast<Int>()]

}


