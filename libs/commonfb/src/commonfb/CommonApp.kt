package commonui

import bootstrap.flexCenter
import bootstrap.fullSize
import bootstrap.setupFullScreen
import commonfb.RootPanel
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
//            apiKey= "AIzaSyCk4evdCJvWCYS8GpodbBotuYfebdwbqHE"
//            authDomain= "pullanapp.firebaseapp.com"
//            databaseURL= "https://pullanapp.firebaseio.com"
//            projectId= "pullanapp"
//            storageBucket= "pullanapp.appspot.com"
//            messagingSenderId= "778902419215"

            apiKey = "AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU"
            authDomain = "appsimake.firebaseapp.com"
            databaseURL = "https://appsimake.firebaseio.com"
            projectId = "appsimake"
            storageBucket = ""
            messagingSenderId = "850641545175"
        }
    )
}



abstract class CommonApp(name: String) {

    val db = app.firestore().withDefaultSettings()
    val baseRef = db.collection("apps").doc(name)

    val root = RootPanel(document.body!!)

    val newRoot = root::newRoot


    fun signOut() {
        root.setHourglass()

        app.auth().signOut()
    }

    fun start() {
        setupFullScreen()

        root.setHourglass()

        val login by lazy { Login() }

        app.auth().onAuthStateChanged { user ->
            if (user == null) {
                login.loginUi(newRoot {})
            } else {
                loggedIn(user)
            }
        }


    }

    abstract fun loggedIn(user: User)


}

open   class LoggedInBase<T: CommonApp>(
    val base: T,
    val user: User
) {
    val privateRef = base.baseRef.collection("private").doc(user.uid)

}