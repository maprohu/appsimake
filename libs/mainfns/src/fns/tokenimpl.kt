package fns

import commonfns.implementAsync
import commonshr.admin
import commonlib.commonlib.*
import firebaseadmin.admin
import initFrom

fun tokenImpl(exports: dynamic) {

    customToken.implementAsync(exports) { _, ctx ->
        val db = admin.firestore()
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