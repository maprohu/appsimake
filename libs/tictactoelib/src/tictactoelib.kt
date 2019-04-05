package tictactoelib

import commonshr.*
import commonshr.properties.RxBase
import commonshr.properties.RxRoot
import commonshr.properties.wrapper

val tictactoeLib = Lib("tictactoe")

val <D: AppDoc> DocWrap<D>.lounge by coll<Game>()

val <D: AppDoc> DocWrap<D>.games by coll<Game>()
val <D: AppDoc> DocWrap<D>.players by coll<Player>()
val DocWrap<Game>.moves by coll<Move<*>>()

val CollectionWrap<PrivateSingleton>.status by doc(GameStatus.of)

class LoungeItem: RxBase<LoungeItem>() {
    val available by o.boolean(true)
    val gameId by o.prop<String?>(null)
}

sealed class GameStatus<T: GameStatus<T>>: RxRoot<T>(), PrivateSingleton {
    class None: GameStatus<None>()

    sealed class InGame<T: InGame<T>>: GameStatus<T>() {
        val gameId by o.string()

        class Waiting: InGame<Waiting>()
        class Playing: InGame<Playing>()
    }

    companion object {
        val of = wrapper(
            { None() },
            { InGame.Waiting() },
            { InGame.Playing() }
        )
    }
}

external interface MoveData {
    var text: String
    var fcmToken: String
}

open class Player: RxBase<Player>() {
    val active by o.boolean()
    val game by o.prop<String?>(null)
}
class Game: RxBase<Game>() {
    val players by o.set<String>()
    val originalPlayers by o.set<String>()
    val isOver by o.boolean()
//    var firstPlayer: Int
//    var lastSequence: Int?
}


sealed class Move<T: Move<T>>: RxRoot<T>() {
    val sequence by o.int()
    val player by o.int()

    companion object : Move<Nothing>() {
        val of = wrapper(
            { Start() },
            { Placement() },
            { Leave() }
        )
    }
}

class Start : Move<Start>()

class Placement : Move<Placement>() {
    val x by o.int()
    val y by o.int()
}

class Leave : Move<Leave>()

class PublicGame: Publish<PublicGame>()
