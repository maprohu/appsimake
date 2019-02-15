package domx

import common.*
import commonshr.*
import killable.*
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node

fun <T> Node.listenableList(
    ks: KillSet,
    list: ListenableList<T>,
    create: (T) -> Node
) {
    ks += list.addListener(
        ListenableList.Listener(
            added = { index, element ->
                insertAt(index, create(element))
            },
            removed = { index, _ -> removeAt(index) },
            moved = { from, to -> insertAt (to, removeAt(from)) }
        )
    )
}

fun <T> Node.listenableList(
    ks: KillSet,
    list: ListenableList<T>,
    create: (T, KillSet) -> Node
) {
    val kills = mutableListOf<Trigger>()
    ks += list.addListener(
        ListenableList.Listener(
            added = { index, element ->
                val iks = ks.killables()
                val node = create(element, iks.killSet)
                insertAt(index, node)
                kills.add(index, iks.kill)
            },
            removed = { index, _ ->
                removeAt(index)
                val ks = kills.removeAt(index)
                ks()
            },
            moved = { from, to ->
                insertAt (to, removeAt(from))
                kills.add(to, kills.removeAt(from))
            }
        )
    )
}

inline fun <T> HasKillSet.domx(fn: DomxHasKillSet.() -> T): T {
    return unsafeCast<DomxHasKillSet>().run { fn() }
}

abstract class DomxHasKillSet: HasKillSet {


}