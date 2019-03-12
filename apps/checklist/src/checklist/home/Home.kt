//package checklist.home
//
//import checklist.loggedin.LoggedIn
//import commonfb.FB
//import commonfb.loginbase.LoginOnly
//import commonfb.loginbase.enablePersistenceAndWait
//import commonui.widget.Body
//import commonui.widget.BodyPath
//import kotlinx.coroutines.launch
//
//interface HomePath: BodyPath {
//    val home: Home
//}
//class Home(
//    body: Body
//): LoginOnly(body), HomePath, BodyPath by body {
//    override val home = this
//
//    init {
//        val app = FB.app
//        launch {
//            val db = FB.db.apply {
//                enablePersistenceAndWait()
//            }
//
//            start(
//                app
//            ) {
//                LoggedIn(
//                    this@Home,
//                    it,
//                    app,
//                    db
//                )
//            }
//        }
//    }
//}
