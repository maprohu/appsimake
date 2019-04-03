package tictactoe.board

data class Coords(
    val x: Int,
    val y: Int
)

typealias Player = Any
typealias Mark = String

sealed class FieldState {
    object Free: FieldState()
    class Taken(val player: Player): FieldState()
}

sealed class TurnState {
    data class Playing(val player: Player): TurnState()
    object Waiting: TurnState()
    object Draw: TurnState()
    data class GameOver(val winner: Player): TurnState()
}

class Highlight(
    val from: Coords,
    val to: Coords
)

fun validCoords(w: Int, h: Int) = (0 until w)
    .flatMap { x -> (0 until h).map { y -> Coords(x, y) } }
