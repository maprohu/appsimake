package fontawesome

import domx.*
import kotlin.properties.ReadOnlyProperty
import kotlin.reflect.KProperty

//fun Element.fas(name: String) {
//    classes += "fas fa-$name"
//}
//
//fun Node.fa(name: String) = span {
//    classes += "fas fa-$name $lineHeightInherit"
//}
//
//fun Node.chevronRight() = fa("chevron-right")
//fun Node.chevronLeft() = fa("chevron-left")
//fun Node.chevronDown() = fa("chevron-down")
//fun Node.spinner() = fa("spinner fa-spin")

val Cls.fas by css()

open class Fa(val cls: Cls) {
    init {
        cls.fas
    }
    companion object: Fa(Cls)
}

val Cls.fa
    get() = Fa(this)

operator fun Fa.invoke(fn: Fa.() -> Unit) = apply(fn)

class FaCssClass(val name: String) : ReadOnlyProperty<Fa, String> {
    override fun getValue(thisRef: Fa, property: KProperty<*>) : String {
        thisRef.cls.element { classes += name }
        return name
    }
}
class FaCssClassProvider {
    operator fun provideDelegate(
        thisRef: Nothing?,
        prop: KProperty<*>
    ) = FaCssClass("fa-${prop.name.toCss()}")
}
fun facss() = FaCssClassProvider()

val Fa.fw by facss()
val Fa.ban by facss()
val Fa.undo by facss()
val Fa.search by facss()
val Fa.filter by facss()
val Fa.pen by facss()
val Fa.plus by facss()
val Fa.minus by facss()
val Fa.plusSquare by facss()
val Fa.chevronLeft by facss()
val Fa.chevronRight by facss()
val Fa.chevronDown by facss()
val Fa.trashAlt by facss()
val Fa.save by facss()
val Fa.tags by facss()
val Fa.ellipsisH by facss()
val Fa.list by facss()
val Fa.comments by facss()
val Fa.eraser by facss()
val Fa.check by facss()
val Fa.times by facss()
val Fa.volumeUp by facss()
val Fa.volumeMute by facss()
