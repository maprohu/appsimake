package index

import bootstrap.listAction
import bootstrap.listGroup
import bootstrap.padding2
import kotlin.browser.document

fun main(args: Array<String>) {
    document.body!!.apply {
        padding2()
        listGroup {
            listAction {
                href = "ideas.html"
                innerText = "Ideas"
            }
        }
    }
}