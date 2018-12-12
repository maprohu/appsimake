package styles

import common.named
import domx.styleTag
import org.w3c.dom.Element
import org.w3c.dom.Node
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText
import kotlin.reflect.KProperty

val styleElement by lazy {
    document.head!!.styleTag()
}

fun add(name: String, rules: String) : String {
    styleElement.appendText(".$name {$rules}\n")
    return name
}

private val defaultAnimRules = """
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
""".trimIndent()

fun anim(
        name: String,
        keyframes: String,
        rules: String = defaultAnimRules
) : String {
    styleElement.appendText("@keyframes $name {$keyframes}\n")
    return add(name, "animation-name: $name; $rules")
}

val lineHeightInherit by lazy {
    add(
            "line-height-inherit",
            "line-height: inherit;"
    )
}

val cursorPointer by lazy {
    add(
            "cursor-pointer",
            "cursor: pointer;"
    )
}

val overflowHidden by lazy {
    add(
        "overflow-hidden",
        "overflow: hidden;"
    )
}

val scrollVertical by cls("overflow-y: auto;" )

val pointerEventsNone by lazy {
    add(
            "pointer-events-none",
            "pointer-events: none;"
    )
}

val transformRight by lazy {
    add(
            "transform-right",
            "transform: translate(100%);"
    )
}

val transformLeft by lazy {
    add(
            "transform-left",
            "transform: translate(-100%);"
    )
}

val transformCenter by lazy {
    add(
            "transform-center",
            "transform: none;"
    )
}

val animLeft by lazy {
    anim(
            "anim-left",
            """
                to {
                    transform: translate(-100%);
                }
            """.trimIndent()
    )
}

val animRight by lazy {
    anim(
            "anim-right",
            """
                to {
                    transform: translate(100%);
                }
            """.trimIndent()
    )
}

val animCenter by lazy {
    anim(
            "animCenter",
            """
                to {
                    transform: none;
                }
            """.trimIndent()
    )
}

fun cls(txt: String) = named { add(it, txt) }


