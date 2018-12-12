package index

import kotlinx.html.dom.append
import kotlinx.html.js.a
import kotlinx.html.js.li
import kotlinx.html.js.ul
import kotlin.browser.document

fun main(args: Array<String>) {
    document.body!!.append {
        ul("list-group") {
            a(href = "ideas.html", classes = "list-group-item list-group-item-action") {
                +"Ideas"
            }
        }
    }
}