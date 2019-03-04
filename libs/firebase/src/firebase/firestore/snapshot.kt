package firebase.firestore

import commonlib.CollectionWrap
import commonshr.*
import commonshr.properties.*
import killable.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel

fun Query.documentChanges(kills: KillSet) : ReceiveChannel<DocumentChange> {
    val channel = Channel<DocumentChange>(Channel.UNLIMITED).apply {
        kills += { close() }
    }

    kills += onSnapshot(
        onNext = { qs ->
            qs.docChanges().forEach { channel.offer(it) }
        },
        onError = { channel.close(it) }
    )

    return channel
}


fun CoroutineScope.toSnapshotEvents(dcs: ReceiveChannel<DocumentChange>): ReceiveChannel<SnapshotEvent> {
    val channel = Channel<SnapshotEvent>(Channel.UNLIMITED)

    launch {
        for(dc in dcs) {
            when (dc.type) {
                DocumentChangeType.added -> {
                    channel += SnapshotEvent.Added(
                        id = dc.doc.id,
                        index = dc.newIndex,
                        data = dc.doc.data()
                    )
                }
                DocumentChangeType.removed -> {
                    channel += SnapshotEvent.Removed(
                        index = dc.oldIndex
                    )
                }
                DocumentChangeType.modified -> {
                    channel += SnapshotEvent.Modified(
                        index = dc.oldIndex,
                        data = dc.doc.data()
                    )
                    if (dc.newIndex != dc.oldIndex) {
                        channel += SnapshotEvent.Moved(
                            from = dc.oldIndex,
                            to = dc.newIndex
                        )
                    }
                }
                else -> throw Error("Unkown type: ${dc.type}")
            }
        }
    }

    return channel
}



interface SnapshotApi: QueryApi, HasKillSet, CoroutineScope {

    fun Query.documentChanges() = documentChanges(kills)
    fun ReceiveChannel<DocumentChange>.toSnapshotEvents() = toSnapshotEvents(this)

    fun <T: RxBase<*>> CollectionWrap<T>.listEvents(
        create: () -> T,
        query: QuerySettingsBuilder<T>.() -> Unit = {}
    ) =
        query(query)
            .documentChanges()
            .toSnapshotEvents()
            .let {
                listEvents(it, this, FsDynamicOps, create)
            }

}
