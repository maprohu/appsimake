package testapplib

import common.named
import commonlib.Lib

val testapp by named { Lib(it) }

val sendMessage by testapp.function<String, Unit>()

val tokensCollectionName = "tokens"
val tokensPath = "${testapp.firestoreBasePath}/$tokensCollectionName"