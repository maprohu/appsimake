package testapp

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.w3c.dom.HTMLElement
import kotlin.browser.document


fun main() {

    val target = document.body!!
    fun msg(s: String) {
        val div: HTMLElement = document.createElement("div") as HTMLElement
        div.innerText = s
        target.appendChild(div)
    }

    msg("one")

    GlobalScope.launch {
        msg("two")
    }

}

