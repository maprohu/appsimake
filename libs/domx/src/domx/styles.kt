package styles

import domx.*
import org.w3c.dom.css.CSSStyleSheet
import kotlin.browser.document
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

private val styleElement by lazy {
    document.head!!.styleTag
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

fun def(s: String, action: String? = null, prefix: String = "") = object : ReadOnlyProperty<Cls, String> {
    var name : String? = null
    override fun getValue(thisRef: Cls, property: KProperty<*>): String {
        val n:String = if (name == null) {
            val n = "$prefix${property.name.toCss()}"
            name = n
            addStyle(n, action, s)
            n
        } else {
            name!!
        }
        thisRef.element {
            this += n
        }
        return n
    }

}

val String.cssEscape get() = replace("[^a-zA-Z0-9-]".toRegex(), "_")

private fun <T> defParam(
    action: String? = null,
    paramString: (T) -> String = { it.toString().cssEscape },
    css: (T) -> String
) = object : ReadOnlyProperty<Cls, (T) -> String> {
    var names = mutableMapOf<T, String>()
    override fun getValue(thisRef: Cls, property: KProperty<*>): (T) -> String = { param ->
        names.getOrPut(param) {
            "${property.name.toCss()}--${paramString(param)}".apply {
                addStyle(this, action, css(param))
            }
        }.apply {
            thisRef.element {
                this += this@apply
            }
        }
    }

}

val Cls.minWidth0 by def(
    "min-width: 0;"
)
val Cls.height0 by def(
    "height: 0px;"
)
val Cls.lineHeightInherit by def(
    "line-height: inherit;"
)

val Cls.cursorPointer by def(
    "cursor: pointer;"
)

//val Cls.hoverColorInherit by def(
//    "color: inherit;",
//    "hover"
//)

val Cls.overflowHidden by def(
    "overflow: hidden;"
)
val Cls.overflowVisible by def(
    "overflow: visible;"
)

val Cls.resizeNone by def("resize: none;" )
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
//val Cls.textDecorationNone by def(
//    "text-decoration: none;"
//)

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

val Cls.gridTemplateColumnsAuto by defParam<Int> { count ->
    "grid-template-columns: ${(1..count).joinToString(" ") { "auto" }};"
}

val Cls.width by defParam<String> { w ->
    "width: $w;"
}
fun Cls.widthEm(w: Double) = width("${w}em")
val Cls.width125Em get() = widthEm(1.25)

val Cls.square by defParam<String> { w ->
    "width: $w; height: $w;"
}
fun Cls.squareEm(w: Double) = square("${w}em")
val Cls.square125Em get() = squareEm(1.25)

