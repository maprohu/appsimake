package commonfns

import common.obj
import commonlib.Function
import firebaseadmin.admin
import functions.https.CallableContext
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
    exports[qualifiedName] = functions.https.onCall(fn)
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