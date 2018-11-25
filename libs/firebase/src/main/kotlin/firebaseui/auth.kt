@file:JsQualifier("firebaseui.auth")
package firebaseui.auth

import firebase.auth.Auth
import firebase.auth.UserCredential
import org.w3c.dom.Element

external interface Config {
    var signInFlow: String
    var signInOptions: Array<String>
    var tosUrl: String
    var privacyPolicyUrl: String

    @JsName("tosUrl")
    var tosUrlCallback: () -> Unit

    @JsName("privacyPolicyUrl")
    var privacyPolicyUrlCallback: () -> Unit

    var callbacks: Callbacks
}

external interface Callbacks {

    var signInSuccessWithAuthResult : (UserCredential, String) -> Boolean

}

external interface AuthResult {

}

external class AuthUI(
        auth: Auth
) {
    fun isPendingRedirect() : Boolean

    fun start(
            id: String,
            config: Config
    )
    fun start(
            element: Element,
            config: Config
    )
}



