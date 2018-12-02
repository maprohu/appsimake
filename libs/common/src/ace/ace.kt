@file:JsQualifier("ace")
package ace

import org.w3c.dom.Node

external fun edit(node: Node) : Editor

external interface Editor {
    fun setTheme(theme: String)
    fun getSession(): EditSession
    fun focus()
    fun gotoLine(line: Int, col: Int, animate: Boolean)

    fun on(event: String, fn: () -> Unit)
    fun <T> on(event: String, fn: (T) -> Unit)
}

external interface Annotation {
    var row: Int
    var column: Int
    var text: String
    var type: String
}

external interface EditSession {
    fun setMode(mode: String)
    fun setValue(mode: String)
    fun getValue(): String
    fun clearAnnotations()
    fun setAnnotations(annotations: Array<Annotation>)
    fun setTabSize(value: Int)
    fun setUseSoftTabs(value: Boolean)
}

