package svgx

import domx.Cls
import domx.SvgClasses
import domx.tagNS
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import org.w3c.dom.svg.*
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

private val SvgNS = "http://www.w3.org/2000/svg"

//private fun <T: SVGElement> Node.svg(name: String, fn: T.() -> Unit = {}) : T = tagNS(SvgNS,name, fn)

private class SvgTagDelegate<T : Element>(val name: String? = null) : ReadOnlyProperty<Node, T> {
    override fun getValue(thisRef: Node, property: KProperty<*>): T = thisRef.tagNS(SvgNS, name ?: property.name)
}
private fun <T: SVGElement> svg() = SvgTagDelegate<T>()

val Node.svg by svg<SVGSVGElement>()
val Node.use by svg<SVGUseElement>()
val Node.line by svg<SVGLineElement>()
val Node.rect by svg<SVGRectElement>()
val Node.circle by svg<SVGCircleElement>()
val Node.a by svg<SVGAElement>()
val Node.g by svg<SVGGElement>()
val Node.defs by svg<SVGDefsElement>()
val Node.symbol by svg<SVGSymbolElement>()

val SVGElement.owner
    get() = ownerSVGElement ?: this as SVGSVGElement

fun SVGGraphicsElement.transform(fn: SVGTransform.() -> Unit) : SVGTransform {
    return owner
        .createSVGTransform()
        .apply(fn)
        .also { transform.baseVal.appendItem(it) }
}
fun Element.viewBox(x: Double, y: Double, w: Double, h: Double) {
    setAttribute("viewBox", "$x $y $w $h")
}

inline val SVGElement.classes
    get() = SvgClasses(this)

val SVGElement.cls
    get() = Cls { classes.apply(it) }

