package commonfb

import buildenv.serviceWorkerFileName
import commonlib.CollectionWrap
import commonlib.DocWrap
import commonlib.Function
import commonlib.Lib
import commonui.AppCtx
import firebase.AppOptions
import firebase.app.firestore
import firebase.firestore.*
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlin.browser.window
import kotlin.js.Promise


interface HasDB {
    val db: Firestore

    val DocWrap<*>.ref
        get() = docRef(db)

    val CollectionWrap<*>.ref
        get() = collectionRef(db)
}

class FbCtx(
    val appCtx: AppCtx,
    val lib: Lib
) : HasDB {
    val name = lib.name

    constructor(lib: Lib, title: String) : this(AppCtx(title), lib)

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

    override val db by lazy {
        app.firestore().withDefaultSettings().also { db ->
            initBinder(db)
        }
    }
    val auth by lazy { app.auth() }
    val messaging by lazy {
        GlobalScope.async {
            val registration = appCtx.serviceWorker.await()

            val msg = app.messaging()
            msg.useServiceWorker(registration)
            msg.usePublicVapidKey("BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU")
            msg
        }
    }
//    val baseRef by lazy { db.doc(lib.firestoreBasePath) }
//    val singletonsRef by lazy { db.collection(lib.firestoreSingletonsPath) }

    fun signOut() {
        appCtx.hourglass()
        auth.signOut()
    }

    suspend fun setupMessaging(setupMessagingGranted: suspend (Promise<String>) -> Unit) {
        messaging.await().requestPermission().await()

        val tokenPromise = messaging.await().getToken()!!

        setupMessagingGranted(tokenPromise)
    }

    suspend fun trySetupMessaging(setupMessagingGranted: suspend (Promise<String>) -> Unit): Boolean {
        val tokenPromise = messaging.await().getToken()

        return if (tokenPromise == null) {
            false
        } else {
            setupMessagingGranted(tokenPromise)
            true
        }
    }

    fun <I, O> call(function: Function<I, O>, input: I): Promise<O> {
        return app.functions().httpsCallable(function.qualifiedName)(input)
    }

}

