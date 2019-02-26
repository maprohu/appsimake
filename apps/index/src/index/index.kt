package index

import bootstrap.flexColumn
import bootstrap.listAction
import bootstrap.listGroup
import bootstrap.padding2
import commonui.APP
import commonui.AppCtx
import commonui.screenLayout
import commonui.topbar
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
    GlobalScope.launch {
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