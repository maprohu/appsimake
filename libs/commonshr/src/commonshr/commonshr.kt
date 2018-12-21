package common

fun <T> obj() = js("{}").unsafeCast<T>()
fun <T> obj(fn: T.() -> Unit) = obj<T>().apply(fn)
