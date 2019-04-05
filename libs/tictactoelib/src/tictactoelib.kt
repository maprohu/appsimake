package tictactoelib

import commonshr.*
import commonshr.properties.RxBase
import commonshr.properties.RxRoot
import commonshr.properties.wrapper

val tictactoeLib = Lib("tictactoe")


val <D: AppDoc> DocWrap<D>.players by coll<Player>()

val CollectionWrap<PrivateSingleton>.status by docRoot(GameStatus.of)

val CollectionWrap<Tmp>.lounge by doc { Lounge() }

val CollectionWrap<InboxPublic>.moves get() = toSource(Move.of)

class Lounge: RxBase<Lounge>(), Tmp {
    val user by o.prop<String?>(null)
}

sealed class GameStatus<T: GameStatus<T>>: RxRoot<T>(), PrivateSingleton {
    class None: GameStatus<None>()
    class Waiting: GameStatus<Waiting>()
    class Playing: GameStatus<Playing>() {
        val opponent by o.string()
        val seq by o.int(0)
    }

    companion object {
        val of = wrapper(
            { None() },
            { Waiting() },
            { Playing() }
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


sealed class Move<T: Move<T>>: RxRoot<T>(), InboxPublic {
    val seq by o.int()
    val player by o.string()

    class Start : Move<Start>()
    class Placement : Move<Placement>() {
        val x by o.int()
        val y by o.int()
    }
    class Leave : Move<Leave>()

    companion object : Move<Nothing>() {
        val of = wrapper(
            { Start() },
            { Placement() },
            { Leave() }
        )
    }
}

