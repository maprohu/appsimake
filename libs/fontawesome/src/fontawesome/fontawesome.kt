package fontawesome

import domx.classes
import domx.span
import org.w3c.dom.Node
import styles.lineHeightInherit

fun Node.fa(name: String) = span {
    classes += "fas fa-$name $lineHeightInherit"
}

fun Node.chevronRight() = fa("chevron-right")
fun Node.chevronLeft() = fa("chevron-left")
fun Node.spinner() = fa("spinner fa-spin")
