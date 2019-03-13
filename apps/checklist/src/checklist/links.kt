package checklist

import checklist.edit.Edit
import checklist.loggedin.LoggedIn
import checklist.view.ViewChecklist
import commonfb.FB
import commonfb.loginbase.enablePersistenceAndWait
import commonfb.loginbase.loginHandler
import commonshr.HasCsKills
import commonshr.HasKills
import commonshr.toFsDoc
import commonui.*
import commonui.widget.Body
import commonui.widget.BodyTC
import commonui.widget.HourglassView
import commonui.widget.TopAndContent
import firebase.DbDeps
import firebase.firestore.get
import firebase.firestore.withDefaultSettings
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.async
import kotlinx.coroutines.await
import kotlinx.coroutines.launch

interface LinksPath {
    val links: Links
}
class Links(
    deps: HasCsKills,
    val hole: SimpleRoutingHole<TopAndContent>
): LinksBase(deps), HasCsKills, HasKills by deps, LinksPath {
    override val links = this
    constructor(body: BodyTC = BodyTC()): this(body, body.hole)

    val app = FB.app

    val db by lazy {
        async {
            app.firestore().withDefaultSettings().apply {
                enablePersistenceAndWait()
            }
        }
    }

    val login = loginHandler(
        this,
        app.auth(),
        hole
    )

    fun signOut() = launch {
        globalStatus %= "Signing out..."
        hole %= HourglassView(hole)
        app.auth().signOut().await()
        loggedIn.show()
    }


    val loggedIn by link(true) {
        LoggedIn(
            this,
            hole,
            login(),
            db.await()
        ).apply {
            displayRoute = { hole %= this }
        }
    }

    val viewChecklist by param<String>().link { p ->
        loggedIn.get().let { li ->
            li.hourglass()

            ViewChecklist(
                li,
                li.checklists.doc(p).get(DbDeps(db.await()))
            ).apply {
                li %= this
                chklist.live
            }
        }
    }

    val editChecklist by param<String>().link { p ->
        viewChecklist.get(p).let { vc ->
            Edit(
                vc.loggedIn,
                vc,
                vc.chklist
            ).apply {
                vc %= this
            }
        }
    }




}
