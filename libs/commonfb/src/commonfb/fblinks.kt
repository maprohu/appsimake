package commonfb

import commonfb.FB.app
import commonfb.loginbase.enablePersistenceAndWait
import commonfb.loginbase.loginHandler
import commonui.*
import commonui.widget.BodyTC
import commonui.widget.HourglassView
import commonui.widget.TopAndContent
import firebase.*
import firebase.app.App
import firebase.firestore.Firestore
import firebase.firestore.withDefaultSettings
import killable.KillSet
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import kotlin.coroutines.CoroutineContext

data class FBLinksDeps(
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext,
    val app: App,
    override val db: Firestore,
    val hole: SimpleRoutingHole<TopAndContent>
): HasCsDbKills

abstract class FBLinks(
    val deps: FBLinksDeps
): LinksBase(deps), HasCsDbKills, HasDbKills by deps, DbKillsApi {

    companion object {
        fun start(fn: (FBLinksDeps) -> FBLinks) = launchGlobal {
            BodyTC().run {
                val app = FB.app

                fn(
                    FBLinksDeps(
                        kills,
                        coroutineContext,
                        app,
                        app.persistentDb(),
                        hole
                    )
                ).apply {
                    load()
                }
            }
        }
    }

    @Suppress("LeakingThis")
    val login = loginHandler(
        this,
        app.auth(),
        deps.hole
    )

    fun signOut() = launch {
        globalStatus %= "Signing out..."
        deps.hole.hourglass()
        app.auth().signOut().await()
        welcome.show()
    }

}

suspend fun App.persistentDb(): Firestore {
    return firestore().withDefaultSettings().apply {
        enablePersistenceAndWait()
    }
}

