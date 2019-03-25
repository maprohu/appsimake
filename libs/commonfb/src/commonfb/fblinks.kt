package commonfb

import commonfb.FB.app
import commonfb.loginbase.enablePersistenceAndWait
import commonfb.loginbase.loginHandler
import commonui.*
import commonui.links.LinksDef
import commonui.links.LinksApi
import commonui.widget.BodyTC
import commonui.widget.TopAndContent
import firebase.*
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.withDefaultSettings
import killable.KillSet
import kotlinx.coroutines.await
import kotlin.coroutines.CoroutineContext

data class FbLinksDeps(
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext,
    val app: App,
    override val db: Firestore,
    val hole: SimpleRoutingHole<TopAndContent>
): HasCsDbKills

class FbLinks(
    val deps: FbLinksDeps
): HasCsDbKills by deps, DbKillsApi {

    companion object {
        fun start(fn: (FbLinksDeps) -> FbLinks) = launchGlobal {
            BodyTC().run {
                val app = FB.app

                fn(
                    FbLinksDeps(
                        kills,
                        coroutineContext,
                        app,
                        app.persistentDb(),
                        hole
                    )
                )
            }
        }
    }

    @Suppress("LeakingThis")
    val login = loginHandler(
        this,
        app.auth(),
        deps.hole
    )

    suspend fun signOut() {
        globalStatus %= "Signing out..."
        deps.hole.hourglass()
        app.auth().signOut().await()
    }

}

suspend fun App.persistentDb(): Firestore {
    return firestore().withDefaultSettings().apply {
        enablePersistenceAndWait()
    }
}

interface FbLinksDef: LinksDef {
    val fbLinks: FbLinks
}

interface FbLinksApi: LinksApi, FbLinksDef


