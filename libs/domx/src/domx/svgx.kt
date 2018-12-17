package svgx

import domx.tagNS
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node
import org.w3c.dom.svg.*

val SvgNS = "http://www.w3.org/2000/svg"

private fun <T: SVGElement> Node.svg(name: String, fn: T.() -> Unit = {}) : T = tagNS(SvgNS,name, fn)

fun Node.svg(fn: SVGSVGElement.() -> Unit = {}) : SVGSVGElement = svg("svg", fn)
fun Node.line(fn: SVGLineElement.() -> Unit = {}) : SVGLineElement = svg("line", fn)
fun Node.rect(fn: SVGRectElement.() -> Unit = {}) : SVGRectElement = svg("rect", fn)
fun Node.circle(fn: SVGCircleElement.() -> Unit = {}) : SVGCircleElement = svg("circle", fn)
fun SVGElement.a(fn: SVGAElement.() -> Unit = {}) : SVGAElement = svg("a", fn)
fun Node.g(fn: SVGGElement.() -> Unit = {}) : SVGGElement = svg("g", fn)

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
