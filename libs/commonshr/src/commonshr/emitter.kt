package commonshr

import common.EmitterIface

typealias EmitterFn<T> = AddRemove<Callback<T>>

val <T> EmitterIface<T>.fn: EmitterFn<T> get() = ::add

fun <T> EmitterFn<T>.listen(deps: HasKills, callback: (T) -> Unit) {
    deps.kills += this(callback)
}
