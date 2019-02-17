package commonui.widget

import bootstrap.*
import commonshr.*
import domx.*
import fontawesome.*
import org.w3c.dom.*

class Text(parent: Node): InvokeApply {
    val node = parent.span
    val cls = node.cls
    operator fun remAssign(v: String) { node %= v }
}

class Icon(parent: Node): InvokeApply {
    val node = parent.span
    val fa by lazy { node.cls.fa }
}
