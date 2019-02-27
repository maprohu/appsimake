package commonshr

import killable.HasKillSet
import killable.KillSet
import killable.killables
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.map

interface ListApi: HasKillSet {

    fun <T, S> ReceiveChannel<ListEvent<T>>.map(
        fn: suspend HasKillSet.(T) -> S
    ) = map(kills, fn)

}

sealed class ListEvent<out T> {
    class Add<out T>(
        val index: Int,
        val item: T
    ): ListEvent<T>()
    class Move(
        val from: Int,
        val to: Int
    ): ListEvent<Nothing>()
    class Remove(
        val index: Int
    ): ListEvent<Nothing>()

}

fun <T, S> ReceiveChannel<ListEvent<T>>.map(
    kills: KillSet,
    fn: suspend HasKillSet.(T) -> S
): ReceiveChannel<ListEvent<S>> {
    val itemKills = mutableListOf<Trigger>()

    return map { e ->
        when (e) {
            is ListEvent.Add -> {
                val ks = kills.killables()
                itemKills.add(e.index, ks.kill)
                ListEvent.Add(
                    index = e.index,
                    item = ks.fn(e.item)
                )
            }
            is ListEvent.Move -> {
                itemKills.add(e.to, itemKills.removeAt(e.from))
                e
            }
            is ListEvent.Remove -> {
                itemKills.removeAt(e.index).invoke()
                e
            }
        }
    }
}
