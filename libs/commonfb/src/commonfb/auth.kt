package commonfb

import commonlib.commonlib.CustomSignInProvider
import commonlib.commonlib.customToken
import commonui.globalStatus
import firebase.User
import firebase.auth.Auth
import firebase.functions.Functions
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.await

suspend fun requestCustomToken(
    user: User,
    functions: Deferred<Functions>,
    auth: Auth
): User {
    val tir = user.getIdTokenResult().await()

    return if (tir.signInProvider != CustomSignInProvider) {
        globalStatus %= "Requesting custom token..."
        customToken.callable(functions.await()).call(Unit)!!.let { token ->
            globalStatus %= "Signing in with custom token..."
            auth.signInWithCustomToken(token).await().user!!
        }
    } else {
        user
    }
}
