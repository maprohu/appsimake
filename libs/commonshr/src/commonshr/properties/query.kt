package commonshr.properties

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

fun <T> CoroutineScope.wrapSnapshotEvents(
    ses: ReceiveChannel<SnapshotEvent>,
    create: (String, dynamic) -> T,
    update: T.(dynamic) -> Unit
): ReceiveChannel<ListEvent<T>> {
    val channel = Channel<ListEvent<T>>(Channel.UNLIMITED)

    val wrapped = mutableListOf<T>()

    launch {
        for (e in ses) {
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

fun <T: RxBase<*>> CoroutineScope.listEvents(
    ses: ReceiveChannel<SnapshotEvent>,
    collectionWrap: CollectionWrap<T>,
    ops: DynamicOps,
    create: () -> T
): ReceiveChannel<ListEvent<FsDoc<T>>> {
    fun createPersisted(id: String) = create().toFsDoc(collectionWrap, id)

    return wrapSnapshotEvents(
        ses,
        create = { id, data ->
            createPersisted(id).apply {
                doc.readDynamic(data, ops)
            }
        },
        update = { data ->
            doc.readDynamic(data, ops)
        }
    )

}
