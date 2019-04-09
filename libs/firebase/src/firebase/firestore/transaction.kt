package firebase.firestore

import commonshr.DocSource
import commonshr.properties.RxBase
import commonshr.properties.writeDynamic
import firebase.*
import kotlinx.coroutines.await

suspend fun <T> HasDb.tx(fn: suspend DbTxApi.() -> T) = db.tx { DbTxWrap(db, it).fn() }
suspend fun <T> HasDb.txTry(fn: suspend DbTxApi.() -> T) = db.txTry { DbTxWrap(db, it).fn() }

suspend fun <T> DocSource<T>.getOrDefault(deps: HasDbTx, fn: () -> T) =
    extractOrDefault(deps.tx.get(docRef(deps.db)).await(), fn)

suspend fun <T> DocSource<T>.getOrFail(deps: HasDbTx) =
    extractOrFail(deps.tx.get(docRef(deps.db)).await())

fun <T: RxBase<*>> DocSource<T>.txSet(deps: HasDbTx, data: T) =
    deps.tx.set(docRef(deps.db), data.writeDynamic(FsDynamicOps))

fun <T: RxBase<*>> DocSource<T>.delete(deps: HasDbTx) =
    deps.tx.delete(docRef(deps.db))
