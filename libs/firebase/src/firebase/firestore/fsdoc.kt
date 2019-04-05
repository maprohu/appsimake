package firebase.firestore

import common.dyn
import common.obj
import commonshr.CollectionSource
import commonshr.CollectionWrap
import commonshr.DocSource
import commonshr.DocWrap
import commonshr.*
import commonshr.properties.*
import firebase.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.await
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.channels.map
import kotlinx.coroutines.channels.produce
import kotlinx.coroutines.launch
import kotlin.js.Promise

fun DocWrap<*>.docRef(db: Firestore) = db.doc(path)
fun DocWrap<*>.docRef(deps: HasDb) = deps.db.doc(path)
fun CollectionWrap<*>.collectionRef(deps: HasDb) = deps.db.collection(path)
fun <D> CollectionWrap<D>.randomDoc(deps: HasDb) = doc(collectionRef(deps).doc().id)
fun <D> CollectionSource<D>.randomDoc(deps: HasDb) = doc(collectionRef(deps).doc().id)

fun <D> CollectionSource<D>.randomEditable(deps: HasDb, d: dynamic = dyn()) = randomDoc(deps).new(d)

fun <D: RxBase<*>> FsDoc<D>.save(deps: HasDb): Promise<Unit> {
    return id.state.now.let { st ->
        val dw = when (st) {
            FsIdState.NoId -> {
                id.coll.randomDoc(deps).also { rdw ->
                    id.state %= FsIdState.HasId(rdw.id, false)
                }
            }
            is FsIdState.HasId -> {
                id.coll.doc(st.id)
            }
        }

        dw.docRef(deps).set(
            rxv.now.writeDynamic(FsDynamicOps)
        )
    }
}

fun <D: RxBase<*>> FsEditable<D>.save(deps: HasDb): Promise<Unit> {
    return id.docRef(deps).set(
        doc.writeDynamic(FsDynamicOps)
    )
}

fun <D: RxBase<*>> FsDoc<D>.delete(deps: HasDb): Promise<Unit> = id.docWrap.delete(deps)
fun <D> FsEditable<D>.delete(deps: HasDb): Promise<Unit> = id.delete(deps)
fun <D> DocWrap<D>.delete(deps: HasDb): Promise<Unit> = docRef(deps).delete()

fun <D: RxBase<*>> D.toRandomFsDoc(deps: HasDb, cw: CollectionSource<D>) = toFsDoc(FsId(cw.randomDoc(deps), false))


fun <D : RxBase<*>> FsDoc<D>.snapshots(deps: HasCsDbKills) = id.docWrap.snapshots(deps)

fun <D> DocSource<D>.read(ds: DocumentSnapshot): D? {
    return if (ds.exists) {
        factory(ds.data(), FsDynamicOps)
    } else {
        null
    }
}

@UseExperimental(ExperimentalCoroutinesApi::class)
fun <D> DocSource<D>.docs(deps: HasCsDbKills): ReceiveChannel<D> = deps.produce(capacity = Channel.UNLIMITED) {
    for (s in snapshots(deps)) {
        read(s)?.let {
            channel *= it
        }
    }
}

@UseExperimental(ExperimentalCoroutinesApi::class)
fun <D: Any> DocSource<D>.docsOrNull(deps: HasCsDbKills): ReceiveChannel<D?> = snapshots(deps).map { read(it) }

fun <D: RxBase<*>> FsDoc<D>.live(deps: HasDbKills) = apply {
    docWrap.snapshotEmitter(deps).listen(deps) {
        updateFrom(it)
    }
}

val DocumentSnapshot.fsIdState get() = FsIdState.HasId(
    ref.id,
    exists
)

fun <D: RxBase<*>> FsDoc<D>.updateFrom(ds: DocumentSnapshot) {
    id.state %= ds.fsIdState

    if (ds.exists) {
        rxv.now = id.factory(ds.data(), FsDynamicOps)
    }
}

object FsDynamicOps: DynamicOps {
    override fun writeTimestamp(ts: TS): dynamic {
        return when (ts) {
            TS.Server -> FieldValue.serverTimestamp()
            is TS.Value -> Timestamp.fromDate(ts.date)
            TS.Null -> null
        }
    }

    override fun readTimestamp(d: dynamic): TS {
        return if (d==null) TS.Null else TS.Value(d.unsafeCast<Timestamp>().toDate())
    }

}

val <D> DocSource<D>.new get() = new()
fun <D> DocSource<D>.new(d: dynamic = dyn()) = new(d, firebase.firestore.FsDynamicOps)
fun <D> DocSource<D>.editableOf(d: dynamic = dyn(), exists: Boolean = true) = editableOf(d, exists, firebase.firestore.FsDynamicOps)


suspend fun <D> DocSource<D>.getCachedOrServer(deps: HasDb): FsEditable<D> {
    val ds = docRef(deps).run {
        try {
            get(getOptionsCache()).await()
        } catch (e: dynamic) {
            get().await()
        }
    }
    require(ds.exists) { "Document does not exist: $path"}
    return factory(ds.data(), FsDynamicOps).toFsEditable(this)
}

suspend fun <D> DocSource<D>.getOrNull(deps: HasDb, source: GetOptionsSource = GetOptionsSource.default): D? {
    val ds = docRef(deps).get(
        obj { this.source = source }
    ).await()
    return if (ds.exists) {
        factory(ds.data(), FsDynamicOps)
    } else {
        null
    }
}

fun <T> DocSource<T>.extractOrDefault(ds: DocumentSnapshot, fn: () -> T) = if (ds.exists) {
    FsEditable(
        this,
        factory(ds.data(), FsDynamicOps),
        true
    )
} else {
    FsEditable(
        this,
        fn(),
        false
    )
}

fun <T> DocSource<T>.extractOrFail(ds: DocumentSnapshot): FsEditable<T> {
    require(ds.exists) { "Document does not exist: $path" }
    return FsEditable(
        this,
        factory(ds.data(), FsDynamicOps),
        true
    )
}


suspend fun <D> DocSource<D>.toFsDoc(
    deps: HasDb,
    source: GetOptionsSource = GetOptionsSource.default,
    default: () -> D
): FsDoc<D> = getOrNull(deps, source).let { loaded ->
    if (loaded == null) {
        FsDoc(toFsId(false), default())
    } else {
        loaded.toFsDoc(toFsId(true))
    }
}




