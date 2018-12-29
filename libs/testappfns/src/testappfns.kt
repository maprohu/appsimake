package testappfns

import common.obj
import commonfns.implement
import commonfns.implementAsync
import firebaseadmin.admin
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.asPromise
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import testapplib.sendMessage
import testapplib.testapp
import testapplib.tokensPath

fun init(exports: dynamic) {
    sendMessage.implementAsync(exports) { msg, ctx ->
        admin
            .firestore()
            .collection(tokensPath)
            .get()
            .await()
            .forEach { qds ->

                admin.messaging().send(
                    obj {
                        token = qds.id
                        data = obj {
                            message = msg
                        }
                        webpush = obj {
                            notification = obj {
                                body = msg
                            }
                        }
                    }
                )


            }

    }


}