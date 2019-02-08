//package commonfb
//
//import firebase.messaging.Messaging
//import rx.Var
//
//class FcmCtx(
//    val fbCtx: FbCtx,
//    val messaging: Messaging
//) {
//    val granted = Var(false)
//
//    init {
//        val tokenPromise = messaging.getToken()
//
//        if (tokenPromise == null) {
//            granted.now = false
//        } else {
//            granted.now = true
//
//        }
//    }
//}
//
//sealed class MessagingState {
//    object NotSupported: MessagingState()
//    object NotGranted: MessagingState()
//    object Denied: MessagingState()
//    abstract class HasToken(val token: String): MessagingState()
//
//}
