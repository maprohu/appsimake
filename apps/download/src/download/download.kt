package download

import commonfb.FB
import commonfb.loginbase.enablePersistenceAndWait
import commonui.loadApp
import download.home.Home
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

fun main() {

    GlobalScope.launch {
        loadApp {
            val app = FB.app
            val db = FB.db
            db.enablePersistenceAndWait()

            Home(this, app, db)
        }
    }

}