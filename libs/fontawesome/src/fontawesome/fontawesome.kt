package fontawesome

import domx.*
import org.w3c.dom.Element
import org.w3c.dom.Node
import styles.lineHeightInherit

fun Element.fas(name: String) {
    classes += "fas fa-$name"
}

fun Node.fa(name: String) = span {
    classes += "fas fa-$name $lineHeightInherit"
}

fun Node.chevronRight() = fa("chevron-right")
fun Node.chevronLeft() = fa("chevron-left")
fun Node.chevronDown() = fa("chevron-down")
fun Node.spinner() = fa("spinner fa-spin")

val Cls.fas by css()
val Cls.faSearch by css()
val Cls.faPen by css()
val Cls.faPlus by css()
val Cls.faPlusSquare by css()
val Cls.faChevronLeft by css()
val Cls.faChevronRight by css()
val Cls.faChevronDown by css()
