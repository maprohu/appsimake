package tictactoe.board

import rx.RxIface
import rx.Var

data class Dimensions(
    val width: Int,
    val height: Int
)

data class Coords(
    val x: Int,
    val y: Int
)

interface Player {
    val index: Int
    val mark: RxIface<Mark>
}

class PlayerImpl(
    override val index: Int,
    mark: Mark
): Player {
    override val mark = Var(mark)
}

typealias Mark = String

sealed class FieldState {
    object Free: FieldState()
    data class Taken(val player: Player): FieldState()
}

sealed class TurnState {
    object Starting: TurnState()
    data class Playing(val player: Player): TurnState()
    data class Waiting(val player: Player): TurnState()
}

sealed class GameState {
    object Ongoing: GameState()
    object Draw: GameState()
    data class GameOver(val winner: Player): GameState()
    object Abandoned: GameState()
    object Corrupted: GameState()
}

class Highlight(
    val from: Coords,
    val to: Coords
)

val Dimensions.validCoords get() = (0 until width)
    .flatMap { x -> (0 until height).map { y -> Coords(x, y) } }

data class Dir(
    val dx: Int,
    val dy: Int
)
val dirs = listOf(
    Dir(1, -1),
    Dir(1, 0),
    Dir(1, 1),
    Dir(0, 1)
)

operator fun Coords.plus(dir: Dir) = Coords(x + dir.dx, y + dir.dy)

fun Dir.sequenceExcluding(from: Coords) = generateSequence(from + this) { it + this }

operator fun Dir.unaryMinus() = Dir(-dx, -dy)
fun Dir.opposite() = unaryMinus()
