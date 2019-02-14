package commonfb

import common.None
import common.Optional
import common.Some
import commonlib.CollectionWrap
import commonlib.DocWrap
import firebase.firestore.Firestore
import firebase.firestore.docRef
import firebase.firestore.listen
import firebaseshr.Base
import firebaseshr.HasFBProps
import firebaseshr.initFrom
import killable.KillSet
import killable.plusAssign
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import rx.RxIface
import rx.Var

suspend fun <T: HasFBProps<T>> T.initFrom(dw: DocWrap<T>, db: Firestore = FB.db): Boolean {
    props.persisted(dw)
    return try {
        val s = dw.docRef(db).get().await()
        if (s.exists) {
            initFrom(s.data())
            true
        } else {
            false
        }
    } catch (e: dynamic) {
        console.dir(e)
        false
    }
}

typealias LazyCache<T> = suspend (String) -> RxIface<Optional<T>>
fun <T: HasFBProps<T>> CollectionWrap<T>.lazy(
    kills: KillSet,
    db: Firestore = FB.db,
    create: () -> T
): LazyCache<T> {
    val map = mutableMapOf<String, CompletableDeferred<Var<Optional<T>>>>()

    return { id ->
        map.getOrPut(id) {
            val rxv = Var<Optional<T>>(None)
            val dw = this.doc(id)

            val t = create().apply {
                props.apply {
                    props.persisted(dw)
                    props.deleted = true
                }
            }
            val cd = CompletableDeferred<Var<Optional<T>>>()

            kills += dw.docRef(db).listen(t) {
                cd.complete(rxv)
            }
            t.props.isDeleted.forEach(kills) { d ->
                rxv.now = if (d) None else Some(t)
            }

            cd
        }.await()
    }

}
