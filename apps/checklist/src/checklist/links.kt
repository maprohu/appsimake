package checklist

import checklist.loggedin.LoggedIn
import commonfb.FB
import commonfb.loginbase.enablePersistenceAndWait
import commonfb.loginbase.loginHandler
import commonshr.HasCsKills
import commonui.LinksBase
import commonui.SimpleRoutingHole
import commonui.widget.Body
import commonui.widget.BodyTC
import commonui.widget.TopAndContent
import firebase.firestore.withDefaultSettings
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.async

class Links(
    deps: HasCsKills,
    hole: SimpleRoutingHole<TopAndContent>
): LinksBase(), HasCsKills by deps {
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


    val loggedIn by link {
        LoggedIn(
            hole,
            login(),
            app,
            db.await()
        )
    }



}
