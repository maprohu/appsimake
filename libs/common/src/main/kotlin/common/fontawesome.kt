package common

import kotlinx.html.TagConsumer
import kotlinx.html.js.span
import org.w3c.dom.HTMLElement
import styles.lineHeightInherit

fun TagConsumer<HTMLElement>.fa(name: String) = span("fas fa-$name $lineHeightInherit")