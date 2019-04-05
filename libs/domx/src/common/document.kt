package common

import domx.*
import kotlin.browser.document

fun String.copyToClipboard() {
    document.textarea {
        value = this@copyToClipboard
        document.body!!.appendChild(this)
        select()
        document.execCommand("copy")
        removeFromParent()
    }

}
