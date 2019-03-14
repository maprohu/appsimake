package firebase

import common.CsKillsApiCommon
import common.dyn
import commonshr.*
import commonshr.properties.RxBase
import commonshr.properties.SnapshotEvent
import firebase.firestore.*
import kotlinx.coroutines.channels.ReceiveChannel
import kotlin.js.Promise

interface DbApi: Api, HasDb {

    val <D> CollectionWrap<D>.ref get() = collectionRef(api)
    val <D> DocWrap<D>.ref get() = docRef(api)
    val <D> CollectionWrap<D>.randomDoc: DocWrap<D> get() = randomDoc(api)

    fun <D: RxBase<*>> D.toRandomFsDoc(cw: CollectionSource<D>) = toRandomFsDoc(api, cw)
    fun <D> CollectionSource<D>.randomEditable(d: dynamic = dyn()) = randomEditable(api, d)
    fun <D: RxBase<*>> FsDoc<D>.save() = save(api)
    fun <D: RxBase<*>> FsEditable<D>.save() = save(api)
    fun <D: RxBase<*>> FsDoc<D>.delete(): Promise<Unit> = delete(api)
    fun <D> FsEditable<D>.delete(): Promise<Unit> = delete(api)

    fun <T> CollectionWrap<T>.query(query: QuerySettingsBuilder<T>.() -> Unit = {}) = query(api, query)

    suspend fun <D> DocSource<D>.get() = get(api)

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

interface CsKillsApiFirebase: CsKillsApiCommon, CsApiFirebase {
//    fun <T: HasFBProps<*>> QueryWrap<T>.listEvents(create: () -> T) = listEvents(api, create)
}

interface CsDbKillsApi: HasCsDbKills, CsKillsApiFirebase, DbApi, KillsApiFirebase, CsKillsApiCommon, DbKillsApi {

    fun Query.documentChanges() = documentChanges(api)

    val <D : RxBase<*>> DocWrap<D>.snapshots get() = snapshots(api)

    fun <T: RxBase<*>> CollectionSource<T>.listEvents(
        query: QuerySettingsBuilder<T>.() -> Unit = {}
    ) = listEvents(api, query)


    fun <D> DocSource<D>.docs() = docs(api)

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

