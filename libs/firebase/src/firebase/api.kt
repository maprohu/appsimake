package firebase

import common.dyn
import common.obj
import commonshr.*
import commonshr.properties.RxBase
import firebase.firestore.*
import kotlinx.coroutines.channels.ReceiveChannel
import kotlin.js.Promise

interface DbApi: Api, HasDb {

    val <D> CollectionWrap<D>.ref get() = collectionRef(api)
    val <D> DocWrap<D>.ref get() = docRef(api)
    val <D> CollectionWrap<D>.randomDoc: DocWrap<D> get() = randomDoc(api)
    val <D> CollectionSource<D>.randomDoc get() = randomDoc(api)

    fun <D: RxBase<*>> D.toRandomFsDoc(cw: CollectionSource<D>) = toRandomFsDoc(api, cw)
    fun <D> CollectionSource<D>.randomEditable(d: dynamic = dyn()) = randomEditable(api, d)
    fun <D: RxBase<*>> FsDoc<D>.save() = save(api)
    fun <D: RxBase<*>> FsEditable<D>.save() = save(api)
    fun <D: RxBase<*>> FsDoc<D>.delete(): Promise<Unit> = delete(api)
    fun <D> FsEditable<D>.delete(): Promise<Unit> = delete(api)

    fun <T> CollectionWrap<T>.query(query: QuerySettingsBuilder<T>.() -> Unit = {}) = query(api, query)

    suspend fun <D> DocSource<D>.getCachedOrServer() = getCachedOrServer(api)
    suspend fun <D> DocSource<D>.getOrNull(source: GetOptionsSource = GetOptionsSource.default): D? = getOrNull(api, source)

    suspend fun <D> DocSource<D>.toFsDoc(
        source: GetOptionsSource = GetOptionsSource.default,
        default: () -> D
    ) = toFsDoc(api, source, default)

    fun <D: RxBase<D>> DocWrap<D>.set(
        data: D,
        options: SetOptions = obj()
    ) = set(api, data, options)

}


interface KillsApiFirebase: KillsApi {
    fun DocumentReference.onSnapshotNext(onNext: (DocumentSnapshot) -> Unit) = onSnapshotNext(api, onNext)
}

interface DbKillsApi: HasDbKills, DbApi, KillsApiFirebase {
    val <D: RxBase<*>> FsDoc<D>.live get() = live(api)
}

interface CsApiFirebase: CsApi {

    fun ReceiveChannel<DocumentChange>.toSnapshotEvents() = toSnapshotEvents(api)

//    fun <T: HasFBProps<*>> ReceiveChannel<SnapshotEvent>.listEvents(
//        collectionWrap: CollectionWrap<T>,
//        create: () -> T
//    )= listEvents(api, collectionWrap, create)

}

interface CsKillsApiFirebase: CsKillsApi, CsApiFirebase {
//    fun <T: HasFBProps<*>> QueryWrap<T>.listEvents(create: () -> T) = listEvents(api, create)
}

interface CsDbKillsApi: HasCsDbKills, CsKillsApiFirebase, DbApi, KillsApiFirebase, CsKillsApi, DbKillsApi {

    fun Query.documentChanges() = documentChanges(api)

    val <D : RxBase<*>> DocWrap<D>.snapshots get() = snapshots(api)


    fun <T: RxBase<*>> CollectionSource<T>.listEvents(
        query: QuerySettingsBuilder<T>.() -> Unit = {}
    ) = listEvents(api, query)

    fun <T: RxBase<*>> CollectionSource<T>.documentChanges(
        query: QuerySettingsBuilder<T>.() -> Unit = {}
    ) = documentChanges(api, query)

    fun <D> DocSource<D>.docs() = docs(api)
    val <D: Any> DocSource<D>.docsOrNull get() = docsOrNull(api)

    fun <T: RxBase<*>> CollectionSource<T>.toList(
        query: QuerySettingsBuilder<T>.() -> Unit = {}
    ) = toList(api, query)

    fun <B: RxBase<*>> CollectionSource<B>.fsCache(
        query: QuerySettingsBuilder<B>.() -> Unit = {},
        factory: (String) -> B
    ) = fsCache(api, query, factory)

    fun <B: RxBase<*>> ReceiveChannel<ListEvent<FsDoc<B>>>.fsCache(
        factory: (String) -> B
    ) = fsCache(api, factory)

}

interface TxApi: Api, HasTx {

}

interface DbTxApi: TxApi, DbApi, HasDbTx {
    suspend fun <T> DocSource<T>.getOrFail() = getOrFail(api)
    suspend fun <T> DocSource<T>.getOrDefault(fn: () -> T) = getOrDefault(api, fn)
    fun <T: RxBase<*>> DocSource<T>.txSet(data: T) = txSet(api, data)
    fun <T> DocSource<T>.delete() = delete(api)
}

class DbTxWrap(
    override val db: Firestore,
    override val tx: Transaction
): DbTxApi

