package commonshr

import commonlib.CollectionWrap
import commonlib.DocWrap
import commonshr.properties.RxBase
import rx.Var

class RefDoc<I, D>(
    val id: I,
    val doc: D
)

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
    val coll: CollectionWrap<D>,
    st: FsIdState
) {
    constructor(
        dw: DocWrap<D>,
        exists: Boolean
    ): this(
        dw.parent!!,
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

fun <D: RxBase<*>> D.toFsDoc(id: FsId<D>) = FsDoc(id, this)
fun <D: RxBase<*>> D.toFsDoc(cw: CollectionWrap<D>) = toFsDoc(FsId(cw, FsIdState.NoId))

