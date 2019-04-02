package commonfns

import common.obj
import commonshr.Function
import commonshr.properties.DynamicOps
import commonshr.properties.TS
import firebaseadmin.admin
import firebasefunctions.https.CallableContext
import firebaseshr.firestore.Timestamp
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import kotlin.js.Promise

fun <I, O> Function<I, O>.implement(exports: dynamic, fn: (I, CallableContext) -> Promise<O>) {
    implementAny(exports, fn)
}
fun <I, O> Function<I, O>.implementAsync(exports: dynamic, fn: suspend (I, CallableContext) -> O) {
    implement(exports) { v, ctx ->
        GlobalScope.async {
            fn(v, ctx)
        }.asPromise()
    }
}
fun <I, O> Function<I, O>.implementSync(exports: dynamic, fn: (I, CallableContext) -> O) {
    implementAny(exports, fn)
}
fun <I, O> Function<I, O>.implementAny(exports: dynamic, fn: (I, CallableContext) -> Any?) {
    exports[qualifiedName] = firebasefunctions.https.onCall(fn)
}

val firestore by lazy {
    admin
        .firestore()
        .apply {
            settings(
                obj {
                    timestampsInSnapshots = true
                }
            )
        }
}

object FnsDynamicOps: DynamicOps {
    override fun writeTimestamp(ts: TS): dynamic {
        return when (ts) {
            TS.Server -> admin.FieldValue.serverTimestamp()
            is TS.Value -> admin.Timestamp.fromDate(ts.date)
            TS.Null -> null
        }
    }


    override fun readTimestamp(d: dynamic): TS {
        return TS.Value(d.unsafeCast<Timestamp>().toDate())
    }

}