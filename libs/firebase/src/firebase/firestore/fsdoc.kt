package firebase.firestore

import common.dyn
import commonlib.CollectionSource
import commonlib.CollectionWrap
import commonlib.DocSource
import commonlib.DocWrap
import commonshr.*
import commonshr.properties.*
import firebase.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
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
            doc.writeDynamic(FsDynamicOps)
        )
    }
}

fun <D: RxBase<*>> FsDoc<D>.delete(deps: HasDb): Promise<Unit> = id.docWrap.docRef(deps).delete()

fun <D: RxBase<*>> D.toRandomFsDoc(deps: HasDb, cw: CollectionSource<D>) = toFsDoc(FsId(cw.randomDoc(deps), false))


fun <D : RxBase<*>> FsDoc<D>.snapshots(deps: HasCsDbKills) = id.docWrap.snapshots(deps)

fun <D> DocSource<D>.read(ds: DocumentSnapshot): D? {
    return if (ds.exists) {
        parent.factory(ds.data(), FsDynamicOps)
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

fun <D: RxBase<*>> FsDoc<D>.live(deps: HasCsDbKills) = apply {
    deps.launch {
        for (s in snapshots(deps)) {
            updateFrom(s)
        }
    }
}

val DocumentSnapshot.fsIdState get() = FsIdState.HasId(
    ref.id,
    exists
)

fun <D: RxBase<*>> FsDoc<D>.updateFrom(ds: DocumentSnapshot) {
    id.state %= ds.fsIdState

    if (ds.exists) {
        doc.readDynamic(ds.data(), FsDynamicOps)
    }
}

object FsDynamicOps: DynamicOps {
    override fun writeTimestamp(ts: TS): dynamic {
        return when (ts) {
            TS.Server -> FieldValue.serverTimestamp()
            is TS.Value -> Timestamp.fromDate(ts.date)
        }
    }

    override fun readTimestamp(d: dynamic): TS {
        return TS.Value(d.unsafeCast<Timestamp>().toDate())
    }

}

