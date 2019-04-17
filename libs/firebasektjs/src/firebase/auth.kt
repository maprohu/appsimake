@file:JsQualifier("firebase.auth")
package firebase.auth

import firebase.User
import kotlin.js.Promise


// https://firebase.google.com/docs/reference/js/firebase.auth.Auth
external class Auth {

    val currentUser: User?

    fun signInWithPopup(provider: AuthProvider): Promise<UserCredential>
    fun signInAndRetrieveDataWithCredential(credential: AuthCredential): Promise<UserCredential>

    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCustomToken
    fun signInWithCustomToken(token: String): Promise<UserCredential>

    fun setPersistence(persistence: String) : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
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

    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onIdTokenChanged
    fun onIdTokenChanged(
        next: (User?) -> Unit
    ) : () -> Unit


    fun signOut() : Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithRedirect
    fun signInWithRedirect(provider: AuthProvider): Promise<Unit>

    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInAnonymously
    fun signInAnonymously(): Promise<UserCredential>


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

// https://firebase.google.com/docs/reference/js/firebase.auth#.UserCredential
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

