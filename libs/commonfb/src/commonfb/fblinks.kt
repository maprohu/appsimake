package commonfb

import commonfb.FB.app
import commonfb.loginbase.*
import commonui.*
import commonui.links.*
import commonui.widget.BodyTC
import commonui.widget.TopAndContent
import firebase.*
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.withDefaultSettings
import killable.KillSet
import kotlinx.coroutines.await
import rx.RxIface
import kotlin.coroutines.CoroutineContext
import commonui.view.*
import commonui.widget.Toaster

data class FbLinksDeps(
    val homeName: String,
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext,
    val app: App,
    override val db: Firestore,
    val hole: SimpleRoutingHole<TopAndContent>,
    override val toaster: Toaster
): HasCsDbKillsToast {
    val auth = app.auth()
}

suspend fun App.persistentDb(): Firestore {
    return firestore().withDefaultSettings().apply {
        enablePersistenceAndWait()
    }
}

interface FbLinksApi: DbApi, HasToast

abstract class FbLinksFactory(
    val deps: FbLinksDeps
) : LinksFactory(deps.homeName), HasCsDbKillsToast by deps {

    companion object {
        fun start(
            homeName: String = "home",
            fn: suspend (FbLinksDeps) -> FbLinksFactory
        ) = launchGlobal {
            APP.startRegisteringServiceWorker()
            BodyTC().apply {
                val app = FB.app

                val links = fn(
                    FbLinksDeps(
                        homeName,
                        kills,
                        coroutineContext,
                        app,
                        app.persistentDb(),
                        hole,
                        toaster
                    )
                )

                runLinks(
                    LinksHandle(
                        links.map,
                        links.home
                    ),
                    popStateChannel(links)
                )
            }
        }
    }

    @Suppress("LeakingThis")
    val userProvider = RequireUser(
        this,
        deps.auth
    ) {
        performLogin(
            deps,
            deps.hole,
            deps.auth,
            { deps.hole %= it }
        )
    }

    val userState: RxIface<UserState> = userProvider.state

    suspend fun signOut() {
        globalStatus %= "Signing out..."
        deps.hole.hourglass()
        app.auth().signOut().await()
        userProvider.signOut()
    }

    fun signOutNow() {
        userProvider.signOut()
        app.auth().signOut()
    }






}