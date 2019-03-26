package commonfb

import commonfb.FB.app
import commonfb.loginbase.*
import commonui.*
import commonui.links.Linkage
import commonui.links.LinksDepth
import commonui.links.LinksFactory
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
    val linksDepth: LinksDepth,
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext,
    val app: App,
    override val db: Firestore,
    val hole: SimpleRoutingHole<TopAndContent>
): HasCsDbKills {
    val auth = app.auth()
}

//class FbLinks(
//    val deps: FbLinksDeps
//): HasCsDbKills by deps, DbKillsApi {
//
//
//    @Suppress("LeakingThis")
//    val login = loginHandler(
//        this,
//        app.auth(),
//        deps.hole
//    )
//
//
//}

suspend fun App.persistentDb(): Firestore {
    return firestore().withDefaultSettings().apply {
        enablePersistenceAndWait()
    }
}

//interface FbLinksDef: LinksDef {
//    val fbLinks: FbLinks
//}
//
//interface FbLinksApi: LinksApi, FbLinksDef


abstract class FbLinksFactory(
    private val deps: FbLinksDeps
) : LinksFactory(deps.homeName, deps.linksDepth), HasCsDbKills by deps {

    companion object {
        fun start(
            homeName: String = "home",
            linksDepth: LinksDepth,
            fn: suspend (FbLinksDeps) -> FbLinksFactory
        ) = launchGlobal {
            BodyTC().run {
                val app = FB.app

                fn(
                    FbLinksDeps(
                        homeName,
                        linksDepth,
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