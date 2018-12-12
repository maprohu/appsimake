package commonui

import bootstrap.flexCenter
import bootstrap.fullSize
import bootstrap.setupFullScreen
import domx.div
import firebase.AppOptions
import firebase.User
import firebase.app.firestore
import firebase.firestore.withDefaultSettings
import firebaseui.Login
import fontawesome.spinner
import killable.KillableSeq
import killable.setTo
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node
import kotlin.browser.document


val app by lazy {
    firebase.initializeApp(
        AppOptions().apply {
            apiKey= "AIzaSyCk4evdCJvWCYS8GpodbBotuYfebdwbqHE"
            authDomain= "pullanapp.firebaseapp.com"
            databaseURL= "https://pullanapp.firebaseio.com"
            projectId= "pullanapp"
            storageBucket= "pullanapp.appspot.com"
            messagingSenderId= "778902419215"
        }
    )
}



abstract class CommonApp(name: String) {

    val db = app.firestore().withDefaultSettings()
    val baseRef = db.collection("apps").doc(name)

    val container = document.body!!

    val currentRoot = KillableSeq()

    fun Node.setAsRoot() {
        this.setTo(currentRoot)
        container.appendChild(this)
    }

    fun newRoot(fn: HTMLDivElement.() -> Unit = {}): HTMLDivElement {
        return document.div {
            setAsRoot()
            fullSize()
            fn()
        }
    }

    fun signOut() {
        showHourglass()

        app.auth().signOut()
    }

    fun start() {
        setupFullScreen()

        showHourglass()

        val login by lazy { Login() }

        app.auth().onAuthStateChanged { user ->
            if (user == null) {
                login.loginUi(newRoot())
            } else {
                loggedIn(user)
            }
        }


    }

    private fun showHourglass() {
        newRoot {
            flexCenter()
            spinner()
        }
    }

    abstract fun loggedIn(user: User)




}