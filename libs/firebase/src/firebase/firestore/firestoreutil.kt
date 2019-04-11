package firebase.firestore

import common.*
import commonshr.CollectionWrap
import commonshr.*
import commonshr.properties.SnapshotEvent
import commonshr.properties.wrapSnapshotEvents
import firebase.*
import firebaseshr.*
import killable.*
import kotlinx.coroutines.*
import kotlinx.coroutines.channels.ReceiveChannel
import org.w3c.dom.Element
import rx.*
import kotlin.reflect.KProperty

fun setOptionsMerge() = obj<SetOptions> { merge = true }

inline val DocumentChangeType.Companion.added get() = "added".unsafeCast<DocumentChangeType>()
inline val DocumentChangeType.Companion.modified get() = "modified".unsafeCast<DocumentChangeType>()
inline val DocumentChangeType.Companion.removed get() = "removed".unsafeCast<DocumentChangeType>()

inline val GetOptionsSource.Companion.default get() = "default".unsafeCast<GetOptionsSource>()
inline val GetOptionsSource.Companion.server  get() = "server".unsafeCast<GetOptionsSource>()
inline val GetOptionsSource.Companion.cache   get() = "cache".unsafeCast<GetOptionsSource>()

fun getOptionsCache() = obj<GetOptions>().apply {
    source = GetOptionsSource.cache
}

fun Lib.privateOf(user: User) = privateOf(user.uid)
fun Lib.inboxOf(user: User) = inboxOf(user.uid)



fun Firestore.withDefaultSettings(): Firestore {
    settings(obj<Settings>().apply {
//        timestampsInSnapshots = true
    })
    return this
}

fun Query.onSnapshotNext(
    onNext: (QuerySnapshot) -> Unit
) : Trigger = onSnapshot(onNext, { report(it.unsafeCast<Throwable>()) })

fun Query.idDiffs(fn: ((SetDiff<String>) -> Unit)) : Trigger = onSnapshotNext { qs ->
    qs.docChanges().fold(SetDiff<String>()) { d, ch ->
        when (ch.type) {
            DocumentChangeType.added -> d.copy(added = d.added + ch.doc.id)
            DocumentChangeType.removed -> d.copy(removed = d.removed + ch.doc.id)
            else -> d
        }
    }.also(fn)
}

fun DocumentReference.onSnapshotNext(
    onNext: (DocumentSnapshot) -> Unit
) : Trigger = onSnapshot(onNext, { report(it.unsafeCast<Throwable>()) })

fun DocumentReference.onSnapshotNext(
    deps: HasKills,
    onNext: (DocumentSnapshot) -> Unit
) {
    deps.kills += onSnapshotNext(onNext)
}

fun <T> Firestore.txDefer(fn: suspend (Transaction) -> T) : Deferred<T> {
    return runTransaction<T> {
        GlobalScope.async {
            fn(it)
        }.asPromise()
    }.asDeferred()
}

suspend fun <T> Firestore.tx(fn: suspend (Transaction) -> T) : T = txDefer(fn).await()
suspend fun <T> Firestore.txTry(fn: suspend (Transaction) -> T) : Try<T> = Try { tx(fn) }//.reported()

fun <T> Try<T>.onRollback(fn: () -> T) : T = fold({ if (it is RollbackException) fn() else throw it }, { it })
inline fun <T> Try<T>.onSuccess(fn: (T) -> Unit) = map { t -> fn(t); t }

class RollbackException(msg: String? = null) : Exception(msg)
fun rollback(msg: String? = null) : Nothing = throw RollbackException(msg)

suspend fun DocumentReference.exists(): Boolean {
    return get().await().exists
}



suspend fun flushDocs(
    vararg docs: DocumentReference
) {
    coroutineScope {
        docs.forEach { doc ->
            launch {
                val cd = CompletableDeferred<Unit>()
                doc.onSnapshot(
                    obj {
                        this.includeMetadataChanges = true
                    },
                    { ds2 ->
                        if (!ds2.metadata.hasPendingWrites) {
                            cd.complete(Unit)
                        }
                    },
                    { cd.completeExceptionally(it) }
                )
                cd.await()
            }
        }
    }
}
suspend fun flushQueries(
    vararg queries: Query
) {
    coroutineScope {
        queries.forEach { q ->
            launch {
                val qs = q.get().await()
                flushDocs(
                    *qs.docs.filter {
                        it.metadata.hasPendingWrites
                    }.map { it.ref }.toTypedArray()
                )
            }
        }
    }
}

val HasLibUser.privateDoc get() = lib.privateOf(user)
val HasLibUser.privateSingletons get() = privateDoc.singletons
val HasLibUser.fcmTokensColl get() = privateDoc.fcmTokens

