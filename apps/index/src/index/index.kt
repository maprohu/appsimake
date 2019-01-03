package index

import bootstrap.flexColumn
import bootstrap.listAction
import bootstrap.listGroup
import bootstrap.padding2
import commonui.AppCtx
import commonui.screenLayout
import commonui.topbar
import kotlin.browser.document

fun main(args: Array<String>) {
    val appCtx = AppCtx("Apps I Make")
    appCtx.registerServiceWorker()

    appCtx.root.newRoot {
        screenLayout {
            top {
                middleTitle {
                    innerText = appCtx.title
                }
            }

            main {
                flexColumn()
                padding2()
                listGroup {
                    fun app(
                        id: String,
                        title: String
                    ) {
                        listAction {
                            href = "../$id/"
                            innerText = title
                        }
                    }

                    app("tasks", "Tasks")
                    app("tictactoe", "Tic Tac Toe")
                    app("gymclock", "Gym Clock")
                }
            }

        }
    }
}