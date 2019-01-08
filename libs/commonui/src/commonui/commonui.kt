package commonui

import bootstrap.*
import domx.*
import fontawesome.*
import killable.Killables
import org.w3c.dom.*

fun Node.nextButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return nextButton( { innerText = label }, fn )
}

fun Node.nextButton(label: HTMLDivElement.() -> Unit, fn: () -> Unit): HTMLAnchorElement {
    return listButton(fn) {
        flexRow()
        div {
            flexGrow1()
            label()
        }
        chevronRight()
    }
}

fun Element.hourglass(): HTMLDivElement {
    return centerDiv {
        spinner()
    }
}

fun showClosable(
    page: (() -> Unit) -> (() -> Unit),
    back: () -> Unit
) : Killables {
    val killables = Killables()
    killables += page {
        back()
        killables.kill()
    }
    return killables
}


fun HTMLButtonElement.faButtonSpan(
    faIconClass: String? = null,
    fn: HTMLSpanElement.() -> Unit = {}
): HTMLSpanElement {
    cls {
        p2
    }
    return span {
        cls {
            fas
            faFw
        }
        faIconClass?.let { classes += it }
        fn()
    }
}

fun Node.faButton(
    faIconClass: String,
    fn: HTMLButtonElement.() -> Unit
): HTMLButtonElement {
    return button {
        cls {
            btn
        }
        faButtonSpan(faIconClass)
        fn()
    }
}

