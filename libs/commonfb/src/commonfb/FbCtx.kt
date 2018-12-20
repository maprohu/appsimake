package commonfb

import bootstrap.setupFullScreen
import commonui.AppCtx
import firebase.AppOptions
import firebase.app.firestore
import firebase.firestore.CollectionReference
import firebase.firestore.DocumentReference
import firebase.firestore.Firestore
import firebase.firestore.withDefaultSettings
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import kotlin.browser.document

class FbCtx(
    val appCtx: AppCtx,
    name: String
) {
    constructor(name: String, title: String) : this(AppCtx(title), name)

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

    val db by lazy { app.firestore().withDefaultSettings() }
    val auth by lazy { app.auth() }
    val messaging by lazy {
        val msg = app.messaging()
        msg.usePublicVapidKey("BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU")
        msg
    }
    val baseRef by lazy { db.collection("apps").doc(name) }
    val singletonsRef by lazy { baseRef.collection("singletons") }

    fun signOut() {
        appCtx.hourglass()
        auth.signOut()
    }



}
