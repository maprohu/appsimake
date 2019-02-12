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

fun addStyle(name: String, action: String?, rules: String) {
    styleSheet.insertRule(
        ".$name${action?.let {":$action"}?:""} {$rules}",
        styleSheet.cssRules.length
    )
}

private fun def(s: String, action: String? = null) = object : ReadOnlyProperty<Cls, String> {
    var name : String? = null
    override fun getValue(thisRef: Cls, property: KProperty<*>): String {
        val n:String = if (name == null) {
            val n = property.name.toCss()
            name = n
            addStyle(n, action, s)
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

val Cls.height0 by def(
    "height: 0px;"
)
val Cls.lineHeightInherit by def(
    "line-height: inherit;"
)

val Cls.cursorPointer by def(
    "cursor: pointer;"
)

val Cls.hoverColorInherit by def(
    "color: inherit;",
    "hover"
)

val Cls.overflowHidden by def(
    "overflow: hidden;"
)

val Cls.scrollVertical by def("overflow-y: auto;" )
val Cls.scrollHorizontal by def("overflow-x: auto;" )

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
val Cls.pointerEventsAll by def(
    "pointer-events: all;"
)
val Cls.textDecorationNone by def(
    "text-decoration: none;"
)

val Cls.fontSize100 by def(
    "font-size: 100%;"
)

val Cls.widthAuto by def(
    "width: auto;"
)

val Cls.zIndex1 by def(
    "z-index: 1;"
)

val Cls.leftRightTopBottom0 by def(
    """
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    """.trimIndent()
)

val Cls.objectFitCover by def(
    "object-fit: cover;"
)
val Cls.objectFitContain by def(
    "object-fit: contain;"
)
val Cls.objectFitScaleDown by def(
    "object-fit: scale-down;"
)
