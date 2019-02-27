package download

import commonfb.FB
import commonfb.loginbase.enablePersistenceAndWait
import commonui.APP
import commonui.widget.Body
import commonui.widget.Loading
import commonui.widget.switchToView
import download.home.Home
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

fun main() {

    val loading = Loading()
    APP.startRegisteringServiceWorker()

    GlobalScope.launch {
        Body(loading.target).apply {
            val app = FB.app
            val db = FB.db
//            db.enablePersistenceAndWait()
            content.switchToView(Home(this, app, db))
        }
    }

}