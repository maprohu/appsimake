//package commonfb
//
//import common.obj
//import commonlib.fcmtokens
//import commonlib.private
//import firebase.User
//import firebase.firestore.*
//import firebase.messaging
//import firebase.messaging.Messaging
//import killable.Killables
//import kotlinx.coroutines.*
//import kotlinx.coroutines.channels.Channel
//import rx.RxVal
//import rx.Var
//import kotlin.js.Promise
//
//open class LoggedInCtx(
//    val fbCtx: FbCtx,
//    val user: User
//) {
//    val db = fbCtx.db
//    val lib = fbCtx.lib
//    val appCtx = fbCtx.appCtx
//    val privateWrap = lib.app.private.doc(user.uid)
//    val fcmTokensRef = privateWrap.fcmtokens.collectionRef(db)
//
//    val killables = Killables()
//
//    val fcmControl by lazy {
//        FcmControl(this)
//    }
//}

