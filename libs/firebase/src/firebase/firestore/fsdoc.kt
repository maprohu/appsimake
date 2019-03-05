package firebase.firestore

import commonlib.CollectionWrap
import commonlib.DocWrap
import commonshr.*
import commonshr.properties.*
import firebase.firestore
import killable.HasKillSet
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.channels.ReceiveChannel
import kotlinx.coroutines.launch
import kotlin.js.Promise

fun DocWrap<*>.docRef(db: Firestore = firestore()) = db.doc(path)
fun CollectionWrap<*>.collectionRef(db: Firestore = firestore()) = db.collection(path)
fun <D> CollectionWrap<D>.randomDoc(db: Firestore = firestore()) = doc(collectionRef(db).doc().id)

interface FsDocApi: HasFirestore {

    fun <D: RxBase<*>> D.toRandomFsDoc(cw: CollectionWrap<D>) = toFsDoc(FsId(cw.randomDoc, false))

    fun <D: RxBase<*>> FsDoc<D>.save(): Promise<Unit> {
        return id.state.now.let { st ->
            val dw = when (st) {
                FsIdState.NoId -> {
                    id.coll.randomDoc.also { rdw ->
                        id.state %= FsIdState.HasId(rdw.id, false)
                    }
                }
                is FsIdState.HasId -> {
                    id.coll.doc(st.id)
                }
            }

            dw.ref.set(
                doc.writeDynamic(FsDynamicOps)
            )
        }
    }

    fun <D: RxBase<*>> FsDoc<D>.delete(): Promise<Unit> = id.docWrap.ref.delete()

}

interface FsDocApiWithHasKillSet: FsDocApi, HasKillSet {

    val <D : RxBase<*>> FsDoc<D>.snapshots: ReceiveChannel<DocumentSnapshot>
        get() {
            val channel = Channel<DocumentSnapshot>(Channel.UNLIMITED)

            kills += id.docWrap.ref.onSnapshotNext { ds ->
                channel += ds
            }

            return channel
        }
}

interface FsDocApiWithHasKillSetWithCoroutineScope: FsDocApiWithHasKillSet, JobScope {

    val <D: RxBase<*>> FsDoc<D>.live get() = apply {
        launch {
            for (s in snapshots) {
                updateFrom(s)
            }
        }
    }

}

fun <D: RxBase<*>> FsDoc<D>.updateFrom(ds: DocumentSnapshot) {
    id.state %= FsIdState.HasId(
        ds.ref.id,
        ds.exists
    )

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

