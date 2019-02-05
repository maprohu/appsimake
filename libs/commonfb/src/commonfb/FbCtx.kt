package commonfb

import commonlib.CollectionWrap
import commonlib.DocWrap
import commonlib.Function
import commonlib.Lib
import commonui.AppCtx
import firebase.AppOptions
import firebase.app.App
import firebase.firestore.*
import firebase.functions.HttpsCallableResult
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlin.js.Promise

object FB {

    val app by lazy {
        firebase.initializeApp(
            AppOptions().apply {
                apiKey = "AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU"
                authDomain = "appsimake.firebaseapp.com"
                databaseURL = "https://appsimake.firebaseio.com"
                projectId = "appsimake"
                storageBucket = "appsimake.appspot.com"
                messagingSenderId = "850641545175"
            }
        )
    }

    val db by lazy {
        app.firestore().withDefaultSettings().also { db ->
            initBinder(db)
        }
    }

}

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
    val app = FB.app

    val name = lib.name

    constructor(lib: Lib, title: String) : this(AppCtx(title), lib)


    override val db = FB.db
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

    suspend fun <I, O> call(function: Function<I, O>, input: I): O {
        return function.call(app, input)
    }

}

interface Callable<I, O> {
    suspend fun call(input: I): O
}

fun <I, O> Function<I, O>.callPromise(app: App, input: I): Promise<HttpsCallableResult> {
    return app.functions().httpsCallable(qualifiedName)(input)
}

suspend fun <I, O> Function<I, O>.callable(app: App) = object : Callable<I, O> {
    override suspend fun call(input: I): O {
        return callPromise(app, input).await().data.unsafeCast<O>()
    }
}
suspend fun <I, O> Function<I, O>.call(app: App, input: I): O {
    return callable(app).call(input)
}

