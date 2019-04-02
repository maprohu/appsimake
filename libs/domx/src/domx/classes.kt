package domx

import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import org.w3c.dom.svg.SVGAnimatedString
import org.w3c.dom.svg.SVGElement

interface Classes {
    var className: String
}

@Suppress("NOTHING_TO_INLINE")
inline operator fun Classes.plusAssign(cls: String?) {
    cls?.let { c ->
        c.trim().split(Regex("\\s+")).forEach {
            addClass(it)
        }
    }
}

@Suppress("NOTHING_TO_INLINE")
inline operator fun Classes.minusAssign(cls: String?) {
    cls?.let {
        c -> c.trim().split(Regex("\\s")).forEach {
            removeClass(it)
        }
    }
}

class HtmlClasses(val element: Element): Classes {
    override var className: String
        get() = element.className
        set(value) { element.className = value }
}
class SvgClasses(val element: SVGElement): Classes {
    val svgClassName = element.className.unsafeCast<SVGAnimatedString>()

    override var className: String
        get() = svgClassName.baseVal
        set(value) { svgClassName.baseVal = value }
}
/** Returns true if the element has the given CSS class style in its 'class' attribute */
fun Classes.hasClass(cssClass: String): Boolean = className.matches("""(^|.*\s+)$cssClass($|\s+.*)""".toRegex())

/**
 * Adds CSS class to element. Has no effect if all specified classes are already in class attribute of the element
 *
 * @return true if at least one class has been added
 */
fun Classes.addClass(vararg cssClasses: String): Boolean {
    val missingClasses = cssClasses.filterNot { hasClass(it) }
    if (missingClasses.isNotEmpty()) {
        val presentClasses = className.trim()
        className = buildString {
            append(presentClasses)
            if (!presentClasses.isEmpty()) {
                append(" ")
            }
            missingClasses.joinTo(this, " ")
        }
        return true
    }

    return false
}

/**
 * Removes all [cssClasses] from element. Has no effect if all specified classes are missing in class attribute of the element
 *
 * @return true if at least one class has been removed
 */
fun Classes.removeClass(vararg cssClasses: String): Boolean {
    if (cssClasses.any { hasClass(it) }) {
        val toBeRemoved = cssClasses.toSet()
        className = className.trim().split("\\s+".toRegex()).filter { it !in toBeRemoved }.joinToString(" ")
        return true
    }

    return false
}
