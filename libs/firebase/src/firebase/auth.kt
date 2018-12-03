@file:JsQualifier("firebase.auth")
package firebase.auth

import firebase.Promise
import firebase.User

external class Auth {

    val currentUser: User?

    fun signInWithPopup(provider: AuthProvider): Promise<UserCredential>
    fun signInAndRetrieveDataWithCredential(credential: AuthCredential): Promise<UserCredential>
    fun setPersistence(persistence: String) : Promise<Unit>

    fun onAuthStateChanged(
            next: (User?) -> Unit
    ) : () -> Unit
    fun onAuthStateChanged(
            next: (User?) -> Unit,
            error: (Error) -> Unit
    ) : () -> Unit
    fun onAuthStateChanged(
            next: (User?) -> Unit,
            error: (Error) -> Unit,
            completed: () -> Unit
    ) : () -> Unit

    fun signOut() : Promise<Unit>

    companion object {
        val Persistence : Persistence


    }


}

external interface Error {
    val code : String
    val message: String
}

external interface Persistence {
    val LOCAL : String
}


external interface AuthProvider
external interface AdditionalUserInfo

external interface AuthCredential {
    val providerId: String
    val signInMethod: String
}

external interface UserCredential {
    val user: User?
    val credential: AuthCredential?
    val operationType: String?
    val additionalUserInfo: AdditionalUserInfo?
}


external class GoogleAuthProvider : AuthProvider {
    companion object {
        val PROVIDER_ID : String
    }
}

external class EmailAuthProvider : AuthProvider {
    companion object {
        val PROVIDER_ID : String
    }
}

