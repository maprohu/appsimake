package testapplib

import common.named
import commonlib.Lib

val testapp by named { Lib(it) }

external interface Msg {
    var message: String
}
val sendMessage by testapp.function<Msg, Unit>()

val tokensCollectionName = "tokens"
val tokensPath = "${testapp.app.path}/$tokensCollectionName"