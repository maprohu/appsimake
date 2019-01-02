package commonlib

import common.named


class Lib(
    val name: String
) {
    val firestoreBasePath = "apps/$name"
    val firestoreSingletonsPath = "$firestoreBasePath/singletons"
    val firestorePrivatePath = "$firestoreBasePath/private"

    fun firestorePrivateUserPath(uid: String) = "$firestorePrivatePath/$uid"
    fun firestoreFcmTokensPath(uid: String) = "${firestorePrivateUserPath(uid)}/fcmtokens"

    fun <I, O> function() = named { Function<I, O>(this, it) }

    fun qualified(simpleName: String) = "${name}_$simpleName"
}

class Function<in I, out O>(
    val lib: Lib,
    val name: String
) {
    val qualifiedName = lib.qualified(name)
}