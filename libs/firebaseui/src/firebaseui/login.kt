package firebaseui

import common.obj
import firebase.app.App
import firebase.auth.EmailAuthProvider
import firebase.auth.GoogleAuthProvider
import firebaseui.auth.AnonymousAuthProvider
import firebaseui.auth.AuthUI
import firebaseui.auth.Config
import org.w3c.dom.Element
import kotlin.browser.window

class Login(app: App) {

    private val ui : AuthUI by lazy { AuthUI(app.auth()) }


    fun loginUi(authElement: Element) {
        val config = obj<Config> {
            signInFlow = "redirect"
            signInOptions = arrayOf(
                    GoogleAuthProvider.PROVIDER_ID,
                    EmailAuthProvider.PROVIDER_ID,
                    AnonymousAuthProvider.PROVIDER_ID
            )
            tosUrlCallback = { window.alert("Terms of Service...") }
            privacyPolicyUrlCallback = { window.alert("Privacy Policy...") }
            callbacks = obj {
                signInSuccessWithAuthResult = { _, _ -> false }
            }
        }

        ui.start(authElement, config)
    }

    val isPendingRedirect get() = ui.isPendingRedirect()

}