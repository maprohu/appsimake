package commonfb

import commonfb.FB.app
import commonfb.loginbase.*
import commonui.*
import commonui.links.*
import commonui.widget.BodyTC
import commonui.widget.TopAndContent
import firebase.*
import firebase.User
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.withDefaultSettings
import killable.KillSet
import kotlinx.coroutines.await
import kotlin.coroutines.CoroutineContext

data class FbLinksDeps(
    val homeName: String,
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext,
    val app: App,
    override val db: Firestore,
    val hole: SimpleRoutingHole<TopAndContent>
): HasCsDbKills {
    val auth = app.auth()
}

suspend fun App.persistentDb(): Firestore {
    return firestore().withDefaultSettings().apply {
        enablePersistenceAndWait()
    }
}

abstract class FbLinksFactory(
    private val deps: FbLinksDeps
) : LinksFactory(deps.homeName), HasCsDbKills by deps {

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
                        hole
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
    private val requireUser = RequireUser(
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

    suspend fun signOut() {
        globalStatus %= "Signing out..."
        deps.hole.hourglass()
        requireUser.signOut()
        app.auth().signOut().await()
    }

    suspend fun requestUser() = requireUser.requireUser()




}