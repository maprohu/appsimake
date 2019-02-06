package music

import common.AsyncEmitter
import commonfb.FB
import commonlib.addedTo
import commonlib.private
import firebase.User
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.toSetSource
import indexeddb.IDBDatabase
import killable.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.channels.consumeEach
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.launch
import musiclib.music
import musiclib.usersongs
import rx.Rx
import rx.RxIface
import rx.Var
import rx.toChannel

suspend fun userctx(
    ks: KillSet,
    idb: IDBDatabase,
    tagDB: TagDB,
    app: App = FB.app,
    db: Firestore = FB.db
): RxIface<UserCtx> {
    val latestUid = Var(idb.readLastUserId())
    val user = Var<User?>(null)

    app.auth().onAuthStateChanged { u -> user.now = u }.addedTo(ks)

    GlobalScope.launch {
        for (u in user.toChannel(ks)) {
            if (u != null) {
                idb.writeLastUserId(u.uid)
            }
        }
    }

    suspend fun String?.uctx() = UserCtx.of(this, idb, tagDB, db)

    val uid = Rx { user()?.uid ?: latestUid() }
    val ctx = Var(uid.now.uctx())

    ctx.foldKillsTrigger { u -> u.kill }.addedTo(ks)

    GlobalScope.launch {
        for (u in uid.toChannel(ks)) {
            ctx.now = u.uctx()
        }
    }

    return ctx
}

class UidCtx(
    val uid: String,
    val userSongsDB: UserSongsDB
)
class UserCtx(
    val kill: Trigger,
    val uid: UidCtx?,
    val playables: AsyncEmitter<Playable>
) {
    companion object {
        suspend fun of(
            uid: String?,
            idb: IDBDatabase,
            tagDB: TagDB,
            db: Firestore = FB.db
        ): UserCtx {
            val uks = Killables()
            val ktr = uks.toTrigger()
            return if (uid == null) {
                UserCtx(
                    ktr,
                    null,
                    localSongSource(idb, tagDB).addedTo(uks)
                )
            } else {
                val udb = GlobalScope.async { UserSongsDB.of(uks.killSet, uid, db) }
                return UserCtx(
                    uks.toTrigger(),
                    UidCtx(
                        uid,
                        udb.await()
                    ),
                    randomSongSource(
                        idb,
                        tagDB,
                        udb.await()
                    ).addedTo(uks)
                )
            }
        }
    }
}


