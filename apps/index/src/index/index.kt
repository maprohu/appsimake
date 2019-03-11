package index

import bootstrap.flexColumn
import bootstrap.listGroup
import commonui.*
import commonui.widget.Body
import commonui.widget.switchToView
import domx.invoke
import index.home.Home
import killable.Killables
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlin.browser.document

fun main() {
    APP.startRegisteringServiceWorker()
    launchGlobal {
        Body().apply {
            content.switchToView(Home(this))
        }
    }
//    val appCtx = AppCtx("Apps I Make")
//    appCtx.registerServiceWorker()
//    val killables = Killables()
//
//    appCtx.root.newRoot {
//        screenLayout(killables) {
//            top {
//                middleTitle {
//                    innerText = appCtx.title
//                }
//            }
//
//            this.main {
//                flexColumn()
//                padding2()
//                listGroup {
//                }
//            }
//
//        }
//    }
}