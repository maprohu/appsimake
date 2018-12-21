package tictactoefns

import common.obj
import firebaseadmin.admin
import tictactoelib.MoveData
import tictactoelib.moveFunctionName

fun init(exports: dynamic) {
    exports[moveFunctionName] = functions.https.onCall { move:MoveData, ctx ->

        admin.messaging().send(
            obj {
                token = move.fcmToken
                webpush = obj {
                    notification = obj {
                        body = "hello from FCM"
                    }
                }
            }
        )

    }
}

