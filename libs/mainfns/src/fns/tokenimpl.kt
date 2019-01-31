package fns

import common.obj
import commonfns.implementAsync
import commonlib.commonlib.customToken
import firebaseadmin.admin

fun tokenImpl(exports: dynamic) {
    customToken.implementAsync(exports) { _, ctx ->
        ctx
    }

}