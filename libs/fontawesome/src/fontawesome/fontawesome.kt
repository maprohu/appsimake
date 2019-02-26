package fontawesome

import commonshr.InvokeApply
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
val Cls.fab by css()

class FaIcon(
    val fn: Cls.() -> Fa
) {
    companion object {
        fun fa(fn: Fa.() -> Unit) = FaIcon { fa.apply(fn) }
        fun fa(str: String) = FaIcon { fa.apply { element { classes += str} } }
        fun faBrands(fn: FaBrands.() -> Unit) = FaIcon { faBrands.apply(fn) }
        fun faBrands(str: String) = FaIcon { faBrands.apply { element { classes += str} } }
    }
}

fun Cls.fa(icon: FaIcon, fn: Fa.() -> Unit = {}): Fa {
    return this.run(icon.fn).apply(fn)
}

open class Fa(val cls: Cls, faCls: String = Cls.fas): InvokeApply {
    init {
        cls.element {
            classes += faCls
        }
    }
    companion object: Fa(Cls)
}
open class FaBrands(cls: Cls): Fa(cls, Cls.fab) {
    companion object: FaBrands(Cls)
}

val Cls.fa
    get() = Fa(this)
val Cls.faBrands
    get() = FaBrands(this)

class FaCssClass(val name: String) : ReadOnlyProperty<Fa, String> {
    override fun getValue(thisRef: Fa, property: KProperty<*>) : String {
        thisRef.cls.element { classes += name }
        return name
    }
}
class FaCssClassProvider(private val cls: String? = null) {
    operator fun provideDelegate(
        thisRef: Nothing?,
        prop: KProperty<*>
    ) = FaCssClass("fa-${cls ?: prop.name.toCss()}")
}
fun facss(cls: String? = null) = FaCssClassProvider(cls)

val Fa.fw by facss()
val Fa.xs by facss()
val Fa.sm by facss()
val Fa.copy by facss()
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
val Fa.tasks by facss()
val Fa.checkDouble by facss()
val Fa.pooStorm by facss()
val Fa.backspace by facss()
val Fa.save by facss()
val Fa.tags by facss()
val Fa.ellipsisH by facss()
val Fa.list by facss()
val Fa.listOl by facss()
val Fa.comments by facss()
val Fa.comment by facss()
val Fa.eraser by facss()
val Fa.check by facss()
val Fa.clipboardCheck by facss()
val Fa.times by facss()
val Fa.volumeUp by facss()
val Fa.volumeMute by facss()
val Fa.eyeSlash by facss()
val Fa.eye by facss()
val Fa.running by facss()
val Fa.bars by facss()
val Fa.upload by facss()
val Fa.download by facss()
val Fa.file by facss()
val Fa.folder by facss()
val Fa.folderOpen by facss()
val Fa.fileImport by facss()
val Fa.dumpster by facss()
val Fa.database by facss()
val Fa.play by facss()
val Fa.pause by facss()
val Fa.stop by facss()
val Fa.stepForward by facss()
val Fa.stepBackward by facss()
val Fa.backward by facss()
val Fa.forward by facss()
val Fa.exchangeAlt by facss()
val Fa.cloudDownloadAlt by facss()
val Fa.cloudUploadAlt by facss()
val Fa.cloud by facss()
val Fa.thumbsUp by facss()
val Fa.thumbsDown by facss()
val Fa.question by facss()
val Fa.signOutAlt by facss()
val Fa.signInAlt by facss()
val Fa.at by facss()
val Fa.user by facss()
val Fa.syncAlt by facss()
val Fa.redoAlt by facss()
val Fa.tachometerAlt by facss()
val Fa.spinner by facss()
val Fa.spin by facss()
val FaBrands.google by facss()

val Fa.x2 by facss("2x")
val Fa.x3 by facss("3x")
val Fa.x4 by facss("4x")
