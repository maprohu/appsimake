package fns

import commonfns.implementAsync
import commonlib.commonlib.customToken

fun tokenImpl(exports: dynamic) {
    customToken.implementAsync(exports) { _, _ ->
        "hello"
    }
}