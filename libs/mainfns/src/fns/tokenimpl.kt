package fns

import common.obj
import commonfns.implementAsync
import commonlib.admin
import commonlib.commonlib.*
import firebaseadmin.admin
import initFrom

fun tokenImpl(exports: dynamic) {
    val db = admin.firestore()

    customToken.implementAsync(exports) { _, ctx ->
        ctx.auth?.let { cca ->
            val dw = shared.app.admin.users.tokens.doc(cca.uid)
            val tdc = TokenDeveloperClaims().apply {
                initFrom(dw, db)
                props.rollback()
            }
            admin.auth().createCustomToken(cca.uid, tdc.props.write())
        }
    }

}