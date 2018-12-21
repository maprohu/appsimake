package tictactoefns

import common.obj
import firebaseadmin.admin
import tictactoelib.MoveData
import tictactoelib.moveFunctionName

fun init(exports: dynamic) {
    exports[moveFunctionName] = functions.https.onCall { move:MoveData, ctx ->

        admin.firestore().doc("/apps/tictactoe/private/${ctx.auth.uid}")
        ctx.auth.uid

        admin.messaging().send(
            obj {
                token = move.fcmToken
                data = obj {
                    boo = "xyz"
                }
                webpush = obj {
                    notification = obj {
                        body = "hello from FCM"
                    }
                }
            }
        )

    }
}

