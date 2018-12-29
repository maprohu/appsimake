package index

import bootstrap.listAction
import bootstrap.listGroup
import bootstrap.padding2
import kotlin.browser.document

fun main(args: Array<String>) {
    document.body!!.apply {
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
        }
    }
}