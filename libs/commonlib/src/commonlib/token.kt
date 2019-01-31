package commonlib.commonlib

import common.named
import commonlib.Lib


val shared by named { Lib(it) }

val customToken by shared.function<Unit, CustomToken>()

external interface CustomToken {
    var someField: String
}
