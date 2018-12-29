package commonlib

import common.named


class Lib(
    val name: String
) {
    val firestoreBasePath = "apps/$name"
    val firestoreSingletonsPath = "$firestoreBasePath/singletons"

    fun <I, O> function() = named { Function<I, O>(this, it) }
}

class Function<in I, out O>(
    val lib: Lib,
    val name: String
) {
    val qualifiedName = "${lib.name}_$name"
}