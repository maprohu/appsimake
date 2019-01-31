package fns

import common.obj
import commonfns.implementAsync
import commonlib.commonlib.customToken

fun tokenImpl(exports: dynamic) {
    customToken.implementAsync(exports) { _, _ ->
        obj {
            someField = "blabla"
        }
    }
}