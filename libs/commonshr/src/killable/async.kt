package killable

//import commonshr.AsyncSetter
//import commonshr.Trigger
//
//
//suspend fun <T> asyncKills(ks: KillSet, initial: T, fn: suspend (T) -> Trigger): AsyncSetter<T> {
//    class State(
//        val value: T,
//        val kill: Trigger
//    )
//    suspend fun state(v: T): State {
//        val vks = ks.killables()
//        vks += fn(v)
//        return State(v, vks.kill)
//    }
//    var current = state(initial)
//
//    return { v ->
//        if (v != current.value) {
//            current.kill()
//            current = state(v)
//        }
//    }
//
//}

