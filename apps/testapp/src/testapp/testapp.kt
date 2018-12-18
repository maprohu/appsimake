package testapp

import domx.div
import kotlin.browser.document
import kotlin.browser.window

fun main(args: Array<String>) {

    document.body!!.div {
        innerText = "hello b"
    }

}