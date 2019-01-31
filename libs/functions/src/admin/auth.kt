//@file:JsModule("firebase-admin")
//@file:JsQualifier("auth")
package firebaseadmin.auth

import kotlin.js.Promise

// https://firebase.google.com/docs/reference/admin/node/admin.auth.DecodedIdToken
external interface DecodedIdToken {

}

external interface Auth {


    // https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createCustomToken
    fun createCustomToken(uid: String, developerClaims: dynamic = definedExternally): Promise<String>

}