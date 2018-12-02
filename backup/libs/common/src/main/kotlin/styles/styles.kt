package styles

import kotlinx.html.dom.append
import kotlinx.html.js.style
import org.w3c.dom.HTMLStyleElement
import kotlin.browser.document
import kotlin.dom.appendText

val styleElement by lazy {
    document.head!!.append {
        style {}
    }[0] as HTMLStyleElement
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

val scrollVertical by lazy {
    add(
            "scroll-vertical",
            "overflow-y: auto;"
    )
}

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





