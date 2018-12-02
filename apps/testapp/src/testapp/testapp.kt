package testapp

import kotlinx.html.dom.append
import kotlinx.html.js.*
import kotlin.browser.document

fun main(args: Array<String>) {

    document.body!!.append {
        div {
            +"hello b"
        }
    }

}