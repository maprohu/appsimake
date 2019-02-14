package music.common

import commonfb.UserState
import commonfb.toUid
import commonshr.*
import firebase.User
import indexeddb.IDBDatabase
import killable.KillSet
import killable.addedTo
import killable.plusAssign
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.launch
import music.readLastUserId
import music.writeLastUserId
import rx.Rx
import rx.RxIface
import rx.Var
import rx.toChannel

class LatestUid(
    val rxv: RxIface<String?>,
    val clear: Trigger
)
suspend fun RxIface<User?>.toLatestUid(
    ks: KillSet,
    idb: IDBDatabase
): LatestUid {
    val uid = toUid(ks)

    val latestUid = Var(idb.readLastUserId())

    val ch = Channel<String?>()
    ks += { ch.close() }

    GlobalScope.launch {
        for (id in ch) {
            idb.writeLastUserId(id)
        }
    }.addedTo(ks)

    uid.forEach(ks) { id ->
        ch.offer(id)
        latestUid.now = id
    }

    return LatestUid(
        Rx(ks) { uid()  ?: latestUid()  }
    ) {
        ch.offer(null)
    }

}

