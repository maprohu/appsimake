package commonfb

import common.obj
import commonshr.Function
import commonshr.reportd
import commonui.APP
import commonui.isServiceWorkerSupported
import firebase.AppOptions
import firebase.app.App
import firebase.firestore.*
import firebase.functions.Functions
import firebase.functions.HttpsCallableResult
import firebase.messaging.Messaging
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import kotlin.js.Promise

val isFcmSupported by lazy {
    isServiceWorkerSupported
}

suspend fun createMessagingDeferred(app: App): Messaging? {
    return try {
        val msg = app.messaging()
        msg.apply {
            APP.registerServiceWorker()?.let { r ->
                useServiceWorker(r)
            }
            usePublicVapidKey("BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU")
        }
    } catch (e: dynamic) {
        reportd(e)
        null
    }
}

object FB {


    val app by lazy {
        firebase.initializeApp(
            obj<AppOptions>().apply {
                apiKey = "AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU"
                authDomain = "appsimake.firebaseapp.com"
                databaseURL = "https://appsimake.firebaseio.com"
                projectId = "appsimake"
                storageBucket = "appsimake.appspot.com"
                messagingSenderId = "850641545175"
            }
        ).unsafeCast<App>()
    }

    val db by lazy {
        app.firestore().withDefaultSettings()
    }

    suspend fun functions(): Functions {
        return functionDeferred.await()
    }

    private val messagingDeferred by lazy {
        GlobalScope.async {
            createMessagingDeferred(app)
        }
    }

    suspend fun messaging(): Messaging? {
        return messagingDeferred.await()
    }

    val functionDeferred by lazy {
        GlobalScope.async {
            if (isFcmSupported) {
                messagingDeferred.await()
            }
            app.functions()
        }
    }

    val storage = app.storage()
}



interface Callable<I, O> {
    suspend fun call(input: I): O
}

fun <I, O> Function<I, O>.callPromise(app: Functions, input: I): Promise<HttpsCallableResult> {
    return app.httpsCallable(qualifiedName)(input)
}

fun <I, O> Function<I, O>.callable(app: Functions) = object : Callable<I, O> {
    val fn = app.httpsCallable(qualifiedName)
    override suspend fun call(input: I): O {
        return fn(input).await().data.unsafeCast<O>()
    }
}
suspend fun <I, O> Function<I, O>.call(app: Functions, input: I): O {
    return callable(app).call(input)
}

