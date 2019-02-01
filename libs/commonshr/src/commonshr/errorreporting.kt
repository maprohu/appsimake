package commonshr

fun reportd(error: dynamic) {
    report(error.unsafeCast<Any?>())
}
fun report(error: Any?) {
    console.error(error)
}
