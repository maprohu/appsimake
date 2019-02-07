package music.common

import commonfb.UserState
import commonfb.toUid
import firebase.User
import indexeddb.IDBDatabase
import killable.KillSet
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import music.readLastUserId
import music.writeLastUserId
import rx.Rx
import rx.RxIface
import rx.Var
import rx.toChannel

suspend fun RxIface<User?>.toLatestUid(
    ks: KillSet,
    idb: IDBDatabase
): RxIface<String?> {
    val uid = toUid(ks)

    val latestUid = Var(idb.readLastUserId())

    GlobalScope.launch {
        for (u in uid.toChannel(ks)) {
            if (u != null) {
                idb.writeLastUserId(u)
                latestUid.now = u
            }
        }
    }

    return Rx { uid() ?: latestUid() }
}
