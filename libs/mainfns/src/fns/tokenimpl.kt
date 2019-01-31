package fns

import common.obj
import commonfns.implementAsync
import commonlib.commonlib.customToken
import firebaseadmin.admin
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

fun tokenImpl(exports: dynamic) {
    customToken.implementAsync(exports) { _, ctx ->
        ctx.auth?.let { cca ->
            admin.auth().createCustomToken(cca.uid)
        }
    }

}