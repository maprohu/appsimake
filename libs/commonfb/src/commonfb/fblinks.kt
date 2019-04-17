package commonfb

import common.AsyncListeners
import commonfb.fwdlogin.FwdLogin
import commonfb.loginbase.*
import commonshr.*
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
import commonui.widget.toast
import firebase.User
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.async
import rx.Var

data class FbLinksDeps(
    override val lib: Lib,
    val homeName: String,
    override val kills: KillSet,
    override val coroutineContext: CoroutineContext,
    val app: App,
    override val db: Firestore,
    val hole: SimpleRoutingHole<TopAndContent>,
    override val toaster: Toaster
): HasCsDbKillsLibToast {
    val auth = app.auth()
}

suspend fun App.db(persistent: Boolean = true): Firestore {
    return firestore().withDefaultSettings().apply {
        if (persistent) enablePersistenceAndWait()
    }
}

interface FbLinksApi: DbApi, HasToast, HasLogin

abstract class FbLinksFactory(
    val deps: FbLinksDeps
) : LinksFactory(deps.homeName), HasCsDbKillsLibToast by deps, HasLogin {

    companion object {
        fun start(
            lib: Lib,
            persistentDb: Boolean = true,
            homeName: String = "home",
            fn: suspend (FbLinksDeps) -> FbLinksFactory
        ) = launchGlobal {
            APP.startRegisteringServiceWorker()

            BodyTC().apply {
                val app = FB.app

                val links = fn(
                    FbLinksDeps(
                        lib,
                        homeName,
                        kills,
                        coroutineContext,
                        app,
                        app.db(persistentDb),
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

    override val userState: RxIface<UserState> = userProvider.state
    suspend fun requestUser() = userProvider.requireUser()

    val signOutListeners = AsyncListeners()

    suspend fun signOut() {
        globalStatus %= "Signing out..."
        deps.hole.hourglass()

        signOutListeners.fire()

        deps.auth.signOut().await()
        userProvider.signOut()
    }

    fun signOutNow() {
        userProvider.signOut()
        deps.auth.signOut()
    }

    val login by base<BaseTC>().child { baseTC, linkage ->
        FwdLogin(
            baseTC,
            linkage,
            userProvider.state,
            deps.auth,
            reporter = { e -> deps.toast { danger(e) } }
        ).forwarding(baseTC)
    }

    val fcmDeferred by lazy {
        async {
            createMessagingDeferred(deps.app)
        }
    }

    val functionsDeferred by lazy {
        async {
            fcmDeferred.await()
            deps.app.functions()
        }
    }

    val authState: RxIface<UserState> by lazy {
        val rxv = Var<UserState>(UserState.Unknown)

        kills += deps.auth.onAuthStateChanged(
            next = {
                rxv %= UserState.of(it)
            },
            error = {
                report(it)
            }
        )

        rxv
    }

    suspend fun requestCustomToken(
        user: User
    ) = requestCustomToken(
        user,
        functionsDeferred,
        deps.auth
    )
}