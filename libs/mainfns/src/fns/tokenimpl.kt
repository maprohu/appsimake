package fns

import commonfns.FnsDynamicOps
import commonfns.implementAsync
import commonshr.admin
import commonlib.commonlib.*
import commonshr.properties.readDynamic
import commonshr.properties.writeDynamic
import docRef
import firebaseadmin.admin
import kotlinx.coroutines.await

fun tokenImpl(exports: dynamic) {

    customToken.implementAsync(exports) { _, ctx ->
        val db = admin.firestore()
        ctx.auth?.let { cca ->
            val d = shared.app.admin.users.tokens.doc(cca.uid).docRef(db).get().await()
            val tdc = TokenDeveloperClaims().apply {
                if (d.exists) {
                    readDynamic(d.data(), FnsDynamicOps)
                }
            }
            admin.auth().createCustomToken(cca.uid, tdc.writeDynamic(FnsDynamicOps))
        }
    }

}