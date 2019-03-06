package tictactoelib

import commonshr.AppDoc
import commonshr.DocWrap
import commonshr.coll
import commonshr.lib
import firebaseshr.Base
import firebaseshr.BaseRoot
import firebaseshr.initFrom
import firebaseshr.wrapper

val tictactoe by lib()

val <D: AppDoc> DocWrap<D>.games by coll<Game>()
val <D: AppDoc> DocWrap<D>.players by coll<Player>()
val DocWrap<Game>.moves by coll<Move<*>>()

external interface MoveData {
    var text: String
    var fcmToken: String
}

open class Player: Base<Player>() {
    val active by o.scalar<Boolean>().prop()
    val game by o.scalar<String?>().prop()
}
class Game: Base<Game>() {
    val players by o.array<String>().prop()
    val originalPlayers by o.array<String>().prop()
    val isOver by o.scalar<Boolean>().prop()
//    var firstPlayer: Int
//    var lastSequence: Int?
}


sealed class Move<T: Move<T>>: BaseRoot<T>() {
    val sequence by o.scalar<Int>().prop()
    val player by o.scalar<Int>().prop()

    companion object : Move<Nothing>() {
        val emptyOf = wrapper(
            { Start() },
            { Placement() },
            { Leave() }
        )
        fun of(d: dynamic) = emptyOf(d).initFrom(d)
    }
}

class Start : Move<Start>()

class Placement : Move<Placement>() {
    val x by o.scalar<Int>().prop()
    val y by o.scalar<Int>().prop()
}

class Leave : Move<Leave>()
