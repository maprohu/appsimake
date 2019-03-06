package commonshr

import common.dyn
import commonshr.properties.DynamicOps
import commonshr.properties.RxBase
import rx.Var

class RefDoc<I, D>(
    val id: I,
    doc: D
) {
    val rxv = Var(doc)
    operator fun invoke() = rxv()
}

sealed class FsIdState {
    abstract val exists: Boolean
    object NoId: FsIdState() {
        override val exists = false
    }
    data class HasId(
        val id: String,
        override val exists: Boolean
    ): FsIdState()
}

class FsId<D>(
    val coll: CollectionSource<D>,
    st: FsIdState
) {
    constructor(
        dw: DocSource<D>,
        exists: Boolean
    ): this(
        dw.parent,
        FsIdState.HasId(
            dw.id,
            exists
        )
    )
    val state = Var(st)
}

val <D> FsId<D>.docWrap
    get() = state.now.let { st ->
        when (st) {
            FsIdState.NoId -> {
                throw Error("Doc has no id!")
            }
            is FsIdState.HasId -> {
                coll.doc(st.id)
            }
        }
    }


typealias FsDoc<D> = RefDoc<FsId<D>, D>

val <D> FsDoc<D>.docWrap get() = id.docWrap

fun <D> CollectionSource<D>.toFsId(state: FsIdState) = FsId(this, state)
fun <D> DocSource<D>.toFsId(exists: Boolean) = parent.toFsId(FsIdState.HasId(id, exists))

fun <D> D.toFsDoc(id: FsId<D>) = FsDoc(id, this)
fun <D> D.toFsDoc(cw: CollectionSource<D>) = toFsDoc(cw.toFsId(FsIdState.NoId))
fun <D> D.toFsDoc(cw: CollectionSource<D>, id: String) = toFsDoc(cw.toFsId(FsIdState.HasId(id, true)))

val <T> FsDoc<T>.idOrFail: String get() = (id.state.now as FsIdState.HasId).id

fun <D> DocSource<D>.new(d: dynamic = dyn(), ops: DynamicOps) = parent.factory(d, ops).toFsDoc(toFsId(false))
