package firebase

import common.obj
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonlib.HasPath
import commonshr.plusAssign
import firebase.firestore.*
import firebaseshr.PropOps
import firebaseshr.initBinder
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.produce
import kotlin.coroutines.CoroutineContext

fun AppOptions() : AppOptions = obj()


@UseExperimental(ExperimentalCoroutinesApi::class)
fun CoroutineScope.snapshots(query: Query): ReceiveChannel<QuerySnapshot> = produce(capacity = Channel.UNLIMITED) {

    val cancel = query.onSnapshot(
        { qs -> offer(qs) },
        { e -> close(e) }
    )

    try {
        CompletableDeferred<Unit>().apply {
            invokeOnClose {
                complete(Unit)
            }
        }.await()
    } finally {
        cancel()
    }

}

interface FirebaseCoroutinesApi: CoroutineScope {

    val Query.snapshots get() = snapshots(this)

}
