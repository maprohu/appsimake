package firebase

//import common.obj
//import firebase.firestore.*
//import kotlinx.coroutines.*
//import kotlinx.coroutines.channels.Channel
//import kotlinx.coroutines.channels.ReceiveChannel
//import kotlinx.coroutines.channels.produce
//
//fun AppOptions() : AppOptions = obj()
//
//
//@UseExperimental(ExperimentalCoroutinesApi::class)
//fun CoroutineScope.snapshots(query: Query): ReceiveChannel<QuerySnapshot> = produce(capacity = Channel.UNLIMITED) {
//
//    val cancel = query.onSnapshot(
//        { qs -> offer(qs) },
//        { e -> close(e) }
//    )
//
//    try {
//        CompletableDeferred<Unit>().apply {
//            invokeOnClose {
//                complete(Unit)
//            }
//        }.await()
//    } finally {
//        cancel()
//    }
//
//}

//interface FirebaseCoroutinesApi: CoroutineScope {
//
//    val Query.snapshots get() = snapshots(this)
//
//}
