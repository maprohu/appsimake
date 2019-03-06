package commonshr.properties

import commonlib.CollectionSource
import commonlib.CollectionWrap
import commonshr.FsDoc
import commonshr.ListEvent
import commonshr.plusAssign
import commonshr.toFsDoc
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch

sealed class SnapshotEvent {
    class Added(
        val id: String,
        val index: Int,
        val data: dynamic
    ): SnapshotEvent()
    class Modified(
        val index: Int,
        val data: dynamic
    ): SnapshotEvent()
    class Moved(
        val from: Int,
        val to: Int
    ): SnapshotEvent()
    class Removed(
        val index: Int
    ): SnapshotEvent()
}

fun <T> ReceiveChannel<SnapshotEvent>.wrapSnapshotEvents(
    deps: CoroutineScope,
    create: (String, dynamic) -> T,
    update: T.(dynamic) -> Unit
): ReceiveChannel<ListEvent<T>> {
    val channel = Channel<ListEvent<T>>(Channel.UNLIMITED)

    val wrapped = mutableListOf<T>()

    deps.launch {
        for (e in this@wrapSnapshotEvents) {
            when (e) {
                is SnapshotEvent.Added -> {
                    val item = create(e.id, e.data)
                    wrapped.add(e.index, item)
                    channel += ListEvent.Add(e.index, item)
                }
                is SnapshotEvent.Modified -> {
                    wrapped[e.index].update(e.data)
                }
                is SnapshotEvent.Moved -> {
                    wrapped.add(e.to, wrapped.removeAt(e.from))
                    channel += ListEvent.Move(
                        from = e.from,
                        to = e.to
                    )
                }
                is SnapshotEvent.Removed -> {
                    channel += ListEvent.Remove(e.index)
                }
            }
        }
    }

    return channel
}

fun <T: RxBase<*>> ReceiveChannel<SnapshotEvent>.listEvents(
    deps: CoroutineScope,
    collectionWrap: CollectionSource<T>,
    ops: DynamicOps
): ReceiveChannel<ListEvent<FsDoc<T>>> {
    return wrapSnapshotEvents(
        deps,
        create = { id, data ->
            collectionWrap.factory(data, ops).toFsDoc(collectionWrap, id)
        },
        update = { data ->
            rxv %= collectionWrap.factory(data, ops)
        }
    )
}
