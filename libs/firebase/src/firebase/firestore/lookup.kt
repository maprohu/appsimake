package firebase.firestore

import commonshr.*
import commonshr.properties.RxBase
import firebase.HasCsDbKills
import killable.NoKill
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.broadcast
import kotlinx.coroutines.launch
import rx.*

class FsCache<V>(
    val lookup: RxLookup<String, V>,
    val list: RxList<FsDoc<V>>
)

typealias FsLookup<V> = SimpleRxLookup<String, V>

fun <B: RxBase<*>> fsLookup(
    deps: HasCsDbKills,
    coll: CollectionSource<B>,
    factory: (String) -> B
) = FsLookup(factory).apply {
    deps.launch {
        for(e in coll.listEvents(deps)) {
            when (e) {
                is ListEvent.Add -> {
                    e.item.rxv.forEach(NoKill) { doc ->
                        put(e.item.idOrFail, doc)
                    }
                }
                is ListEvent.Remove -> {
                    e.item.idOrFail.let { id ->
                        put(id, factory(id))
                    }
                }
                else -> {}
            }
        }
    }
}

fun <B: RxBase<*>> CollectionSource<B>.fsCache(
    deps: HasCsDbKills,
    query: QuerySettingsBuilder<B>.() -> Unit = {},
    factory: (String) -> B
) = listEvents(deps, query).fsCache(deps, factory)

fun <B: RxBase<*>> ReceiveChannel<ListEvent<FsDoc<B>>>.fsCache(
    deps: HasCsKills,
    factory: (String) -> B
): FsCache<B> {
    val lookup = FsLookup(factory)
    val list = RxMutableList<FsDoc<B>>()

    val addToLookup = listEventProcessor<FsDoc<B>>(deps) { e ->
        val id = e.idOrFail
        e.rxv.forEach(deps) { doc ->
            lookup.put(id, doc)
        }
        kills += {
            lookup.put(id, factory(id))
        }
    }

    broadcast()
    deps.launch {
        for (e in this@fsCache) {
            e.apply {
                applyTo(list)
                addToLookup()
            }
        }
    }

    return FsCache(
        lookup,
        list
    )
}