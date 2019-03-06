package firebase.firestore

import rx.*
import commonshr.CollectionSource
import commonshr.DocWrap
import commonshr.*
import commonshr.properties.*
import firebase.HasCsDbKills
import killable.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.produce

@UseExperimental(ExperimentalCoroutinesApi::class)
fun Query.documentChanges(deps: HasCsKills) : ReceiveChannel<DocumentChange> = deps.produce(capacity = Channel.UNLIMITED) {
    deps.kills += onSnapshot(
        onNext = { qs ->
            qs.docChanges().forEach { channel.offer(it) }
        },
        onError = { channel.close(it) }
    )
    deps.kills.join()
}

@UseExperimental(ExperimentalCoroutinesApi::class)
fun DocumentReference.documentSnapshots(deps: HasCsKills): ReceiveChannel<DocumentSnapshot> = deps.produce(capacity = Channel.UNLIMITED) {
    deps.kills += onSnapshotNext { ds ->
        channel += ds
    }
    deps.kills.join()
}

@UseExperimental(ExperimentalCoroutinesApi::class)
fun ReceiveChannel<DocumentChange>.toSnapshotEvents(deps: CoroutineScope): ReceiveChannel<SnapshotEvent> = deps.produce {

    for(dc in this@toSnapshotEvents) {
        when (dc.type) {
            DocumentChangeType.added -> {
                channel *= SnapshotEvent.Added(
                    id = dc.doc.id,
                    index = dc.newIndex,
                    data = dc.doc.data()
                )
            }
            DocumentChangeType.removed -> {
                channel *= SnapshotEvent.Removed(
                    index = dc.oldIndex
                )
            }
            DocumentChangeType.modified -> {
                channel *= SnapshotEvent.Modified(
                    index = dc.oldIndex,
                    data = dc.doc.data()
                )
                if (dc.newIndex != dc.oldIndex) {
                    channel *= SnapshotEvent.Moved(
                        from = dc.oldIndex,
                        to = dc.newIndex
                    )
                }
            }
            else -> throw Error("Unkown type: ${dc.type}")
        }
    }

}




fun <D> DocWrap<D>.snapshots(deps: HasCsDbKills) = docRef(deps).documentSnapshots(deps)

fun <T: RxBase<*>> CollectionSource<T>.listEvents(
    deps: HasCsDbKills,
    query: QuerySettingsBuilder<T>.() -> Unit = {}
) =
    query(deps, query)
        .documentChanges(deps)
        .toSnapshotEvents(deps)
        .listEvents(deps, this, FsDynamicOps)

fun <T: RxBase<*>> CollectionSource<T>.toList(
    deps: HasCsDbKills,
    query: QuerySettingsBuilder<T>.() -> Unit = {}
): RxList<FsDoc<T>> {
    val list = RxMutableList<FsDoc<T>>()
    listEvents(deps, query).applyTo(deps, list)
    return list
}
