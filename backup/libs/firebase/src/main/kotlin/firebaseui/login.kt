package firebaseui

import firebase.auth
import firebase.auth.EmailAuthProvider
import firebase.auth.GoogleAuthProvider
import firebaseui.auth.AuthUI
import firebaseui.auth.Callbacks
import firebaseui.auth.Config
import kotlinx.html.dom.create
import kotlinx.html.js.div
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.browser.window

class Login {

    private val ui : AuthUI by lazy { AuthUI(auth()) }

    fun loginUi(authElement: Element) {
        val config = Config().apply {
            signInFlow = "redirect"
            signInOptions = arrayOf(
                    GoogleAuthProvider.PROVIDER_ID,
                    EmailAuthProvider.PROVIDER_ID
            )
            tosUrlCallback = { window.alert("Terms of Service...") }
            privacyPolicyUrlCallback = { window.alert("Privacy Policy...") }
            callbacks = Callbacks().apply {
                signInSuccessWithAuthResult = { _, _ -> false }
            }
        }

        ui.start(authElement, config)
    }

}