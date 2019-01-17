package commonui

import bootstrap.*
import domx.*
import fontawesome.*
import killable.Killable
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
        cls.fa.chevronRight
    }
}

fun Element.hourglass(): HTMLDivElement {
    return centerDiv {
        cls {
            spinnerBorder
        }
    }
}

fun showClosable(
    killables: Killables,
    page: (Killables, close: () -> Unit) -> Unit,
    back: () -> Unit
) {
    val ks = killables.killables()
    page(ks) {
        back()
        ks.kill()
    }
}


fun Element.faButtonSpan(
    faIconClass: String? = null,
    fn: HTMLSpanElement.() -> Unit = {}
): HTMLSpanElement {
    cls {
        p2
    }
    return span {
        cls {
            fa.fw
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


