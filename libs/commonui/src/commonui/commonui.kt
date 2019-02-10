package commonui

import bootstrap.*
import commonshr.invoke
import domx.*
import fontawesome.*
import killable.Killable
import killable.Killables
import org.w3c.dom.*
import kotlin.browser.document

fun Node.nextButton(label: String, fn: () -> Unit): HTMLAnchorElement {
    return nextButton( { innerText = label }, fn )
}

val webkitdirectorySupported by lazy {
    jsTypeOf(document.input.asDynamic().webkitdirectory.unsafeCast<Any?>()) == "boolean"
}

fun Node.nextButton(label: HTMLDivElement.() -> Unit, fn: () -> Unit): HTMLAnchorElement {
    return listButton(fn) {
        cls {
            row()
        }
        div {
            cls.flexGrow1
            label()
        }
        cls.fa.chevronRight
    }
}

val Node.hourglass: HTMLDivElement
    get() = centerDiv {
        div {
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


