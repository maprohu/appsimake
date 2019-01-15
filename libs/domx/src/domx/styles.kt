package styles

import domx.Cls
import domx.classes
import domx.styleTag
import domx.toCss
import org.w3c.dom.css.CSSStyleSheet
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

private val styleElement by lazy {
    document.head!!.styleTag()
}

private val styleSheet by lazy {
    styleElement.sheet.unsafeCast<CSSStyleSheet>()
}

fun addStyle(name: String, rules: String) {
    styleSheet.insertRule(
        ".$name {$rules}",
        styleSheet.cssRules.length
    )
}

private fun def(s: String) = object : ReadOnlyProperty<Cls, String> {
    var name : String? = null
    override fun getValue(thisRef: Cls, property: KProperty<*>): String {
        val n:String = if (name == null) {
            val n = property.name.toCss()
            name = n
            addStyle(n, s)
            n
        } else {
            name!!
        }
        thisRef.element {
            this.classes += n
        }
        return n
    }

}

val Cls.lineHeightInherit by def(
    "line-height: inherit;"
)

val Cls.cursorPointer by def(
    "cursor: pointer;"
)

val Cls.overflowHidden by def(
    "overflow: hidden;"
)

val Cls.scrollVertical by def("overflow-y: auto;" )

val Cls.dGrid by def("display: grid;" )
val Cls.alignContentCenter by def("align-content: center;" )
//val Cls.justifyContentCenter by def("justify-content: center;" )
val Cls.gridAutoFlowRow by def("grid-auto-flow: row;" )

val Cls.justifySelfEnd by def("justify-self: end;")
val Cls.justifySelfStart by def("justify-self: start;")

val Cls.flexBasis0 by def("flex-basis: 0;" )

val Cls.pointerEventsNone by def(
    "pointer-events: none;"
)

val Cls.fontSize100 by def(
    "font-size: 100%;"
)

val Cls.widthAuto by def(
    "width: auto;"
)



